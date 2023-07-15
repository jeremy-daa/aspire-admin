import style from "../../styles/Blogs.module.css"
import React from 'react'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleBlogModal } from '../../redux/slices/blogModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { FaTrash } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useMutation } from '@apollo/client'
import { DELETE_ARTICLE } from '../../graphql/mutations/articleMutations'
import { GET_ARTICLES } from '../../graphql/queries/articleQueries'
import deleteReq from "../../hooks/deleteReq"

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function ViewBlogModal() {
    const dispatch = useAppDispatch()
    const blogModalToggle = useAppSelector(state => state.blogModalToggle.value)
    const blogData = useAppSelector(state => state.activeBooking)
    const token = useAppSelector((state) => state.login.admin)

    const deleteBooking = () => {
      deleteReq("bookings", blogData._id, token)
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
                  {/* <h1 className={style.blogModal__title}>{blogData.first_name} {blogData.last_name}</h1> */}
                  <h3>Full Name:</h3>
                  <p className={style.blogModal__desc}>{blogData.first_name} {blogData.last_name}</p>
                  <h3>Email:</h3>
                  <p className={style.blogModal__desc}>{blogData.email}</p>
                  {blogData.phone && (
                    <>
                      <h3>Phone:</h3>
                      <p className={style.blogModal__desc}>{blogData.phone && blogData.phone}</p>
                    </>
                  )}
                  {blogData.tour && (
                    <>
                      <h3>Tour:</h3>
                      <p className={style.blogModal__desc}>{blogData.tour && blogData.tour}</p>
                    </>
                  )}
                  {blogData.package && (
                    <>
                      <h3>Package:</h3>
                      <p className={style.blogModal__desc}>{blogData.package && blogData.package}</p>
                    </>
                  )}
                  {/* <div className="blog-modal-sanitized" dangerouslySetInnerHTML={{ __html: blogData.sanitizedHtml }} ></div> */}
                </div>
                <button className={style.blogModal__btn} onClick={() => {
                    deleteBooking()
                    dispatch(toggleBlogModal())
                }} ><FaTrash /> DELETE</button>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
