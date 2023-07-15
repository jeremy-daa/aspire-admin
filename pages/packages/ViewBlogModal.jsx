import style from "../../styles/Packages.module.css"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleBlogModal } from '../../redux/slices/blogModalToggleSlice'
import { GrClose } from 'react-icons/gr'
import { FaTrash } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import deleteReq from "../../hooks/deleteReq"
import useFetch from "../../hooks/useFetch"

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}


export default function ViewBlogModal() {
    const dispatch = useAppDispatch()
    const blogModalToggle = useAppSelector(state => state.blogModalToggle.value)
    const blogData = useAppSelector(state => state.activePackage)
    const token = useAppSelector((state) => state.login.admin)

    const deletePackage = () => {
      deleteReq("packages", blogData._id, token)
    }
    
    const [tours, setTours] = useState([])
    const { data, loading, error } = useFetch("tours")

    useEffect(() => {

      // if (data) {
      //   if(blogModalToggle){
      //     for(let i = 0; i < blogData.tour_ids.length; i++){
      //       const tour = data.find((t) => t._id === blogData.tour_ids[i])
      //       if(tour){
      //         setTours([...tours, tour])
      //       }
      //     }
      //   }
      // }
      // set the tours array state with the tours coming from fetching data that have the same _id property
      // as the tour_ids array in the blogData state
      if (data) {
        if(blogModalToggle){
          const tours = data.filter((tour) => blogData.tour_ids.includes(tour._id))
          setTours(tours)
        }
      }

    }, [data, loading, error, blogModalToggle])

    // console.log(tours)

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
                  <p className={style.blogModal__date}>{blogData.type}</p>
                  <Image src={"https://res.cloudinary.com/drp73bqti/image/upload/v1680720109/yuyana/location_loba4t.png"} alt={blogData.name} width={500} height={500} className={style.blogModal__img} />
                  <p className={style.blogModal__desc}>{blogData.description}</p>
                  {/* <div className="blog-modal-sanitized" dangerouslySetInnerHTML={{ __html: blogData.sanitizedHtml }} ></div> */}

                  <p style={{fontWeight: "bold"}}>Total Days: {blogData.total_no_of_days}</p>

                  <div style={{display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "30px", marginBottom: "30px"}}>
                    <ol style={{flex: "1"}}>
                      <h2 style={{marginBottom: "15px"}}>Tours Included</h2>
                      {tours.map((item, index) => (
                        <li key={index}>{item?.name}</li>
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
                    deletePackage()
                    dispatch(toggleBlogModal())
                }} ><FaTrash /> DELETE TOUR</button>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
