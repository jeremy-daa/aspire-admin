import style from "../../styles/Booking.module.css"
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { FaTrash, FaEye } from 'react-icons/fa'
import deleteReq from "../../hooks/deleteReq"
import { toggleBlogModal } from '../../redux/slices/blogModalToggleSlice'
import { changeActiveBooking } from "../../redux/slices/activeBookingSlice"


export default function SubscribersList({d}) {
    const dispatch = useAppDispatch()
  const subs = d
  const sortByNewest = useAppSelector(state => state.sortBlogs.value)
  const test = subs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  
//   const token = useAppSelector((state) => state.login.admin)
//   const deleteSubscriber = (id) => {
//     deleteReq("bookings", id, token)
//   }

  
  // console.log(subs)
  return (
    <div className={style.subcards}>
        {sortByNewest && subs.map((sub, index) => (
            <div key={index} className={style.subcard}>
                <div className={style.subcard__text}>{sub.email}</div>
                <button className={`${style.subcard__btn} ${style.btn__green}`} onClick={() => {
                    dispatch(changeActiveBooking(sub))
                    dispatch(toggleBlogModal())
                }} ><FaEye /> Details</button>
            </div>
        ))}
        {!sortByNewest && subs.reverse().map((sub, index) => (
            <div key={index} className={style.subcard}>
                <div className={style.subcard__text}>{sub.email}</div>
                <div className={`${style.subcard__btn} ${style.btn__green}`} onClick={() => {
                    dispatch(changeActiveBooking(sub))
                    dispatch(toggleBlogModal())
                }} ><FaEye /> Details</div>
            </div>
        ))}
        
    </div>
  )
}


