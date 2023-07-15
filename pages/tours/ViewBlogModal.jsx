import style from "../../styles/Tours.module.css"
import React from 'react'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleBlogModal } from '../../redux/slices/blogModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { FaTrash } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import deleteReq from "../../hooks/deleteReq"

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function ViewBlogModal() {
    const dispatch = useAppDispatch()
    const blogModalToggle = useAppSelector(state => state.blogModalToggle.value)
    const blogData = useAppSelector(state => state.activeTour)
    const token = useAppSelector((state) => state.login.admin)

    const deleteTour = () => {
      deleteReq("tours", blogData._id, token)
    }

  return (
    <>
      <AnimatePresence>
        {blogModalToggle && (
            <motion.div variants={variants} initial={"closed"} animate={"open"} exit={"closed"} className={style.blogModal}>
              <motion.div initial={{y: "100%"}} animate={{y: 0}}  transition={{duration: .3}} className={style.blogModal__con}>
                <div className={style.blogModal__close} onClick={() => dispatch(toggleBlogModal())}>
                  <GrClose />
                </div>
                <div style={{width: "100%"}}>
                  <h1 className={style.blogModal__title}>{blogData.name}</h1>
                  <p className={style.blogModal__date}>{blogData.category}</p>
                  <Image src={blogData.images[0]} alt={blogData.title} width={800} height={400} className={style.blogModal__img} />
                  <p style={{textAlign: "center", fontSize: "20px", marginBottom: "5px"}}>{blogData.title}</p>
                  <p style={{textAlign: "center", marginBottom: "10px"}}>{blogData.titleMotto}</p>
                  <p className={style.blogModal__desc}>{blogData.description}</p>
                  {/* <div className="blog-modal-sanitized" dangerouslySetInnerHTML={{ __html: blogData.sanitizedHtml }} ></div> */}
                  <div className={style.blogModal__program}>
                    <h2 style={{marginBottom: "15px", textAlign: "center"}}>Tour Program</h2>
                    {blogData.tour_program.map((item, index) => (
                      <div style={{marginBottom: "10px"}} key={index}>
                        <h3>Day {item.day}</h3>
                        <p style={{fontWeight: "bold", marginBottom: "5px"}}>{item.activity}</p>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{fontWeight: "bold"}}>Total Days: {blogData.no_of_days}</p>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "30px", marginBottom: "30px"}}>
                    <ol style={{flex: "1"}}>
                      <h2 style={{marginBottom: "15px"}}>Included</h2>
                      {blogData.included.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                    <ol style={{flex: "1"}}>
                      <h2 style={{marginBottom: "15px"}}>Not Included</h2>
                      {blogData.not_included.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  </div>
                  {/* <div style={{display: "flex", alignItems: "center", flexWrap: "wrap", gap: "5px", marginBottom: "10px"}}>
                    <b>Keywords: </b> 
                    {blogData.keywords.map((item, index) => (
                      <p key={index}>{item + ","}</p>
                    ))}
                  </div> */}
                  <p style={{fontWeight: "bold"}}>Price: {blogData.price}</p>

                </div>
                <button className={style.blogModal__btn} onClick={() => {
                    deleteTour()
                    dispatch(toggleBlogModal())
                }} ><FaTrash /> DELETE TOUR</button>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
