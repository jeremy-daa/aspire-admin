import style from "../../styles/News.module.css"
import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { FaTrash } from 'react-icons/fa'
import deleteReq from "../../hooks/deleteReq"


export default function SubscribersList({d}) {
  const subs = d
  const sortByNewest = useAppSelector(state => state.sortBlogs.value)
  const test = subs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  
  const token = useAppSelector((state) => state.login.admin)
  const deleteSubscriber = (id) => {
    deleteReq("newsletter", id, token)
  }

  
  // console.log(subs)
  return (
    <div className={style.subcards}>
        {sortByNewest && subs.map((sub, index) => (
            <div key={index} className={style.subcard}>
                <div className={style.subcard__text}>{sub.email}</div>
                <button className={style.subcard__btn} onClick={() => {
                    deleteSubscriber(sub._id)
                }} ><FaTrash /></button>
            </div>
        ))}
        {!sortByNewest && subs.reverse().map((sub, index) => (
            <div key={index} className={style.subcard}>
                <div className={style.subcard__text}>{sub.email}</div>
                <div className={style.subcard__btn} onClick={() => {
                    deleteSubscriber(sub._id)
                }} ><FaTrash /></div>
            </div>
        ))}
        
    </div>
  )
}


