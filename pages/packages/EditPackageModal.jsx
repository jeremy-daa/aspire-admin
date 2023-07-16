import style from "../../styles/Tours.module.css"
import { useState } from 'react'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleBlogAddModal } from '../../redux/slices/blogAddModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { FaPlus } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import postReq from "../../hooks/postReq"
import useFetch from "../../hooks/useFetch"

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function EditBlogModal() {
    const dispatch = useAppDispatch()
    const blogAddModalToggle = useAppSelector(state => state.blogAddModalToggle.value)

    const [err, setErr] = useState("")

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [aglp, setAglp] = useState(0)
    
    // const [markdown, setMarkdown] = useState("")

    const token = useAppSelector((state) => state.login.admin)



    const onSubmit = async (e) => {
        e.preventDefault();
        if(name === "" || description === "" || aglp === 0) {
            setErr("Please fill in all fields")
            return
        }


        // @ts-ignore
        const img = document.getElementById("image").files[0]
        const imgData = new FormData()
        imgData.append('file', img)
        imgData.append('upload_preset', 'aspire')

        const res = await fetch('https://api.cloudinary.com/v1_1/drp73bqti/image/upload', {
            method: 'POST',
            body: imgData
        })
        if(!res.ok) {
            setErr("Please upload an image")
            return
        }
        const json = await res.json()

        if(json.secure_url === "") {
            setErr("Please upload an image")
            return
        }
        if(json.secure_url !== "") {
            setErr("")
            const image = json.secure_url
            const body = { name, image, description, aglp}
            const data = postReq("packages", body, token)
            if(data) console.log(data)
            
            setName("")
            setDescription("")
            setAglp(0)
            dispatch(toggleBlogAddModal())
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
                        <h1 className={style.blogModal__title}>Add New Package</h1>
                        {err && <p style={{color: "#ef4444", textAlign: "center", marginBottom: "20px"}}>{err}</p>}
                        <form onSubmit={onSubmit} className={style.blogModal__form}>
                            <div className={style.blogModal__form__row}>
                                <label>Name</label>
                                <input placeholder="Enter Tour Name" type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Image Link</label>
                                <input placeholder="Enter Article Cover Image Link" type="file" accept="image/*" id="image" />
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Description</label>
                                <textarea placeholder="Enter Tour Description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} ></textarea>
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>AGLP</label>
                                <input placeholder="Enter AGLP Points" type="text" id="aglp" value={aglp} onChange={(e)=> setAglp(e.target.value)} />
                            </div>
                            
                            {/* <div className={style.blogModal__form__row}>
                                <label>Details (write in markdown)</label>
                                <textarea placeholder="Enter Article Details using markdown language" id="markdown" value={markdown} onChange={(e)=> setMarkdown(e.target.value)} ></textarea>
                            </div> */}
                            <button type='submit' className={`${style.blogModal__btn} ${style.btn__green}`}><FaPlus /> ADD PACKAGE</button>
                        </form>
                    </div>
                </motion.div>
                </motion.div>
            )}
      </AnimatePresence>
    </>
  )
}
