import style from "../../styles/Blogs.module.css"
import React from 'react'
import TopSection from './TopSection'
import BlogPaginator from './BlogPaginator'
import ViewBlogModal from './ViewBlogModal'
import EditBlogModal from './EditBlogModal'

export default function Blog() {
  return (
    <div className={style.blog}>
        <ViewBlogModal />
        <EditBlogModal />
        <TopSection />
        <BlogPaginator />
    </div>
  )
}
