import style from "../../styles/News.module.css"
import { useState } from 'react'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleBlogAddModal } from '../../redux/slices/blogAddModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { FaPlus } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import postReq from "../../hooks/postReq"

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function EditBlogModal() {
    const dispatch = useAppDispatch()
    const blogAddModalToggle = useAppSelector(state => state.blogAddModalToggle.value)

    const [err, setErr] = useState("")

    const [markdown, setMarkdown] = useState("")

    const token = useAppSelector(state => state.login.admin)


    const onSubmit = async (e) => {
        e.preventDefault();

        // @ts-ignore
        const img = document.getElementById("image").files[0]

        if(!img && markdown === "") {
            setErr("Please upload an image or write details")
            return
        }

        if(!img && markdown !== "") {
            const image = "";
            
            fetch("https://test.yuyana.com/newsletter/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    image,
                    markdown
                })
            })
            .then(res => res.json())
            .then(data => {
                if(!data.success){
                    setErr(data.error)
                }
                if(data.success){
                    console.log(data.data)
                    setErr("")
                    setMarkdown("")
                    dispatch(toggleBlogAddModal())
                }
            })
        } else {
            
            const imgData = new FormData()
            imgData.append('file', img)
            imgData.append('upload_preset', 'yuyana')
    
            const res = await fetch('https://api.cloudinary.com/v1_1/drp73bqti/image/upload', {
                method: 'POST',
                body: imgData
            })
            if(!res.ok) {
                setErr("Please upload an image")
                return
            }
            const json = await res.json()
    
    
            if(json.secure_url !== "") {
                setErr("")
                const image = json.secure_url
                
                const data = postReq("newsletter/send", {image, markdown}, token)
                if(data) console.log(data)

                setErr("")
                setMarkdown("")
                dispatch(toggleBlogAddModal())
            }
        }

    }

    // if(loading) console.log("loading")
    // if(error) console.log(error)
    // if(data) console.log(data)

  return (
    <>
      <AnimatePresence>
            {blogAddModalToggle && (
                <motion.div variants={variants} initial={"closed"} animate={"open"} exit={"closed"} className={style.blogModal}>
                <motion.div initial={{y: "-100%"}} animate={{y: 0}}  transition={{duration: .3}} className={style.blogModal__con}>
                    <div className={style.blogModal__close} onClick={() => dispatch(toggleBlogAddModal())}>
                        <GrClose />
                    </div>
                    <div style={{width: "100%"}}>
                        <h1 className={style.blogModal__title}>Send New Newsletter</h1>
                        {err && <p style={{color: "#ef4444", textAlign: "center", marginBottom: "20px"}}>{err}</p>}
                        <form onSubmit={onSubmit} className={style.blogModal__form}>
                            <div className={style.blogModal__form__row}>
                                <label>Image</label>
                                <input placeholder="Enter Article Cover Image Link" type="file" accept="image/*" id="image" />
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Details (write in markdown)</label>
                                <textarea placeholder="Enter Email details using markdown language" id="markdown" value={markdown} onChange={(e)=> setMarkdown(e.target.value)} ></textarea>
                            </div>
                            <button type='submit' className={`${style.blogModal__btn} ${style.btn__green}`}><FaPlus /> SEND EMAIL </button>
                            <Link target="_blank" style={{alignSelf: "flex-end", color: "#22c55e", marginTop: "32px"}} href="https://www.markdownguide.org/cheat-sheet/">Markdown Guide</Link>
                        </form>
                    </div>
                </motion.div>
                </motion.div>
            )}
      </AnimatePresence>
    </>
  )
}
