import style from "../../styles/Tours.module.css"
import { useState, useEffect } from 'react'
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
    const [category, setCategory] = useState("ethiopia")
    const [title, setTitle] = useState("")
    const [titleMotto, setTitleMotto] = useState("_")
    const [description, setDescription] = useState("")
    const [tour_program, setTourProgram] = useState([])
    const [no_of_days, setNoOfDays] = useState(0)
    const [included, setIncluded] = useState([])
    const [not_included, setNotIncluded] = useState([])
    const [price, setPrice] = useState(0)
    // const [markdown, setMarkdown] = useState("")


    const addProgram = () => {
        const day = document.getElementById("day").value
        const activity = document.getElementById("activity").value
        const activity_desc = document.getElementById("activity_desc").value
        if(day === "" || activity === "" || activity_desc === "") {
            setErr("Please fill in all fields (tour program)")
            return
        }
        setErr("")
        setTourProgram([...tour_program, {day, activity, description: activity_desc}])
        document.getElementById("day").value = ""
        document.getElementById("activity").value = ""
        document.getElementById("activity_desc").value = ""
    }

    const addIncluded = () => {
        const includedItem = document.getElementById("included").value
        if(includedItem === "") {
            setErr("Please fill in all fields (included)")
            return
        }
        setErr("")
        setIncluded([...included, includedItem])
        document.getElementById("included").value = ""
    }

    const addNotIncluded = () => {
        const notIncludedItem = document.getElementById("not_included").value
        if(notIncludedItem === "") {
            setErr("Please fill in all fields (not included)")
            return
        }
        setErr("")
        setNotIncluded([...not_included, notIncludedItem])
        document.getElementById("not_included").value = ""
    }

    // console.log(category)

    const token = useAppSelector((state) => state.login.admin)



    const onSubmit = async (e) => {
        e.preventDefault();
        // if(name === "" || category === "" || title === "" || titleMotto === "" || description === "" || tour_program.length === 0 || no_of_days === 0 || included.length === 0 || not_included.length === 0 || price === 0) {
        //     setErr("Please fill in all fields")
        //     return
        // }

        // @ts-ignore
        const imgs = document.getElementById("image").files
        if(imgs.length < 2) {
            setErr("Please upload at least 2 images")
            return
        }


        const imgData = new FormData()
        let images = []
        
        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i]
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
    
            if(json.secure_url === "") {
                setErr("Please upload an image")
                return
            }
            if(json.secure_url !== "") {
                images.push(json.secure_url)
            }
        }
        
        if(images.length < 2) {
            setErr("Please upload at least 2 images")
            return
        }

        if(images.length >= 2) {
            setErr("")
            const body = { name, images, category, title, titleMotto, description, tour_program, no_of_days, included, not_included, price }
            const data = postReq("tours", body, token)
            if(data) {
                console.log(data)
                // setErr("Tour Created Successfully")
            }
            
            setName("")
            setCategory("local")
            setTitle("")
            setTitleMotto("")
            setDescription("")
            setTourProgram([])
            setNoOfDays(0)
            setIncluded([])
            setNotIncluded([])
            setPrice(0)
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
                        <h1 className={style.blogModal__title}>Add New Tour</h1>
                        {err && <p style={{color: "#ef4444", textAlign: "center", marginBottom: "20px"}}>{err}</p>}
                        <form onSubmit={onSubmit} className={style.blogModal__form}>
                            <div className={style.blogModal__form__row}>
                                <label>Name</label>
                                <input placeholder="Enter Tour Name" type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Image</label>
                                <input type="file" accept="image/*" id="image" multiple />
                            </div>
                            {/* <div className={style.blogModal__form__row}>
                                <label>Type</label>
                                <input placeholder="Enter Tour Type" type="text" id="type" value={type} onChange={(e)=> setCategory(e.target.value)} />
                            </div> */}
                            <div className={style.blogModal__form__row}>
                                <label>Category</label>
                                <select name="category" id="category" onChange={(e)=> setCategory(e.target.value)}>
                                    <option value="ethiopia" >Ethiopia</option>
                                    <option value="africa" >Africa</option>
                                    <option value="asia" >Asia</option>
                                    <option value="europe" >Europe</option>
                                    <option value="middle-east" >Middle East</option>
                                </select>
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Title</label>
                                <input placeholder="Enter Tour Title" type="text" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
                            </div>
                            {/* <div className={style.blogModal__form__row}>
                                <label>Title Motto</label>
                                <input placeholder="Enter Tour Title Motto" type="text" id="titleMotto" value={titleMotto} onChange={(e)=> setTitleMotto(e.target.value)} />
                            </div> */}
                            <div className={style.blogModal__form__row}>
                                <label>Description</label>
                                <textarea placeholder="Enter Tour Description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} ></textarea>
                            </div>
                            <div className={style.blogModal__form__program}>
                                <h2>Tour Program</h2>
                                <div className={style.blogModal__form__program__list}>
                                    {tour_program.map((item, index) => (
                                        <div key={index} className={style.blogModal__form__program__list__item}>
                                            <p><b>Day:</b> {item.day}</p>
                                            <p><b>Activity:</b> {item.activity}</p>
                                            <p><b>Description:</b> {item.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className={style.blogModal__form__row}>
                                    {/* <label>Tour Program</label> */}
                                    <input placeholder="Enter Day" type="text" id="day" />
                                    <input placeholder="Enter Activity" type="text" id="activity"/>
                                    <input placeholder="Enter Activity Description" type="text" id="activity_desc"/>
                                    <button type="button" className={`${style.blogModal__btn} ${style.btn__green}`} onClick={addProgram}><FaPlus /></button>
                                </div>
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Number of Days</label>
                                <input placeholder="Enter Number of Days" type="text" id="no_of_days" value={no_of_days} onChange={(e)=> setNoOfDays(e.target.value)} />
                            </div>
                            <div className={style.blogModal__form__program}>
                                <h2>Included</h2>
                                <div className={style.blogModal__form__program__list}>
                                    {included.map((item, index) => (
                                        <ul key={index} className={style.blogModal__form__program__list__item}>
                                            <li>{item}</li>
                                        </ul>
                                    ))}
                                </div>
                                <div className={style.blogModal__form__row}>
                                    <input placeholder="Enter What's included" type="text" id="included" />
                                    <button type="button" className={`${style.blogModal__btn} ${style.btn__green}`} onClick={addIncluded}><FaPlus /></button>
                                </div>
                            </div>
                            <div className={style.blogModal__form__program}>
                                <h2>Not Included</h2>
                                <div className={style.blogModal__form__program__list}>
                                    {not_included.map((item, index) => (
                                        <ul key={index} className={style.blogModal__form__program__list__item}>
                                            <li>{item}</li>
                                        </ul>
                                    ))}
                                </div>
                                <div className={style.blogModal__form__row}>
                                    <input placeholder="Enter What's not included" type="text" id="not_included" />
                                    <button type="button" className={`${style.blogModal__btn} ${style.btn__green}`} onClick={addNotIncluded}><FaPlus /></button>
                                </div>
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Price</label>
                                <input placeholder="Enter Tour Price" type="text" id="price" value={price} onChange={(e)=> setPrice(e.target.value)} />
                            </div>
                            {/* <div className={style.blogModal__form__row}>
                                <label>Details (write in markdown)</label>
                                <textarea placeholder="Enter Article Details using markdown language" id="markdown" value={markdown} onChange={(e)=> setMarkdown(e.target.value)} ></textarea>
                            </div> */}
                            <button type='submit' className={`${style.blogModal__btn} ${style.btn__green}`}><FaPlus /> ADD TOUR</button>
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
