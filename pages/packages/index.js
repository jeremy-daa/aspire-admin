import style from "../../styles/Packages.module.css"
import React from 'react'
import TopSection from './TopSection'
import BlogPaginator from './PackagePaginator'
import ViewBlogModal from './ViewPackageModal'
import EditBlogModal from './EditPackageModal'

export default function Packages() {
  return (
    <div className={style.blog}>
        <ViewBlogModal />
        <EditBlogModal />
        <TopSection />
        <BlogPaginator />
    </div>
  )
}
