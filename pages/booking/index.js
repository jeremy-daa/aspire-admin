import style from "../../styles/News.module.css"
import React from 'react'
import TopSection from './TopSection'
import NewsletterPaginator from './NewsletterPaginator'
import ViewBlogModal from "./ViewBlogModal"

export default function Booking() {
  return (
    <div className={style.blog}>
        <ViewBlogModal />
        <TopSection />
        <NewsletterPaginator />
    </div>
  )
}
