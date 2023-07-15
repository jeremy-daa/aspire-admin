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
    const [type, setType] = useState("local")
    const [total_no_of_days, setTotalNoOfDays] = useState(0)
    const [tour_ids, setTourIds] = useState([])
    const [price, setPrice] = useState(0)
    // const [markdown, setMarkdown] = useState("")

    const { data, loading, error } = useFetch("tours")



    const addTourId = () => {
        const tour_id = document.getElementById("tour_id").value
        if(tour_id === "") {
            setErr("Please fill in all fields (tour)")
            return
        }
        setErr("")
        setTourIds([...tour_ids, tour_id])
    }


    const token = useAppSelector((state) => state.login.admin)



    const onSubmit = async (e) => {
        e.preventDefault();
        if(name === "" || type === "" || description === "" || tour_ids.length === 0 || total_no_of_days === 0 || price === 0) {
            setErr("Please fill in all fields")
            return
        }

        setErr("")
        const body = { name, type, description, tour_ids, total_no_of_days, price }
        const data = postReq("packages", body, token)
        if(data) console.log(data)
        
        setName("")
        setDescription("")
        setType("local")
        setTotalNoOfDays(0)
        setTourIds([])
        setPrice(0)
        dispatch(toggleBlogAddModal())
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
                                <label>Type</label>
                                <select name="type" id="type" onChange={(e)=> setType(e.target.value)}>
                                    <option value="local" >Local</option>
                                    <option value="international" >International</option>
                                </select>
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Description</label>
                                <textarea placeholder="Enter Tour Description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)} ></textarea>
                            </div>
                            <div className={style.blogModal__form__row}>
                                <label>Number of Days</label>
                                <input placeholder="Enter Number of Days" type="text" id="total_no_of_days" value={total_no_of_days} onChange={(e)=> setTotalNoOfDays(e.target.value)} />
                            </div>
                            <div className={style.blogModal__form__program}>
                                <h2>Tours Included</h2>
                                <div className={style.blogModal__form__program__list}>
                                    {tour_ids.map((item, index) => (
                                        <ul key={index} className={style.blogModal__form__program__list__item}>
                                            <li>{ data?.find(tour => tour._id === item).name }</li>
                                        </ul>
                                    ))}
                                </div>
                                <div className={style.blogModal__form__row}>
                                    <select name="type" id="tour_id">
                                        {data && data.map((item, index) => (
                                            <option key={index} value={item._id}>{item.name}</option>
                                        ))}
                                    </select>
                                    <button type="button" className={`${style.blogModal__btn} ${style.btn__green}`} onClick={addTourId}><FaPlus /></button>
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
                            <button type='submit' className={`${style.blogModal__btn} ${style.btn__green}`}><FaPlus /> ADD PACKAGE</button>
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
