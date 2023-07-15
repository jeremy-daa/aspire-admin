import style from "../../styles/News.module.css"
import React from 'react'
import TopSection from './TopSection'
import NewsletterPaginator from './NewsletterPaginator'
import EditBlogModal from './EditBlogModal'

export default function Newsletter() {
  return (
    <div className={style.blog}>
        <EditBlogModal />
        <TopSection />
        <NewsletterPaginator />
    </div>
  )
}
