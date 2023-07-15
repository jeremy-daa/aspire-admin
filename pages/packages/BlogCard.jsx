import style from '../../styles/Packages.module.css'
import Image from 'next/image'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleBlogModal } from '../../redux/slices/blogModalToggleSlice'
import { changeActivePackage } from '../../redux/slices/activePackageSlice'


export default function BlogCard({d}) {
  const dispatch = useAppDispatch()
  const blogs = d
  const sortByNewest = useAppSelector(state => state.sortBlogs.value)
  const test = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  return (
    <div className={style.blogcards}>
      <div className={style.blogcards__con}>
          {!sortByNewest && blogs.reverse().map((blog, index) => (
              <div key={index} className={style.blogcard}>
                  <Image src={"https://res.cloudinary.com/drp73bqti/image/upload/v1680720109/yuyana/location_loba4t.png"} alt={blog.name.substr(0, 20)} width={200} height={200} priority />
                  <div className={style.blogcard__content}>
                      <h2>{blog.name.substr(0, 30)}</h2>
                      <p onClick={() => {
                        dispatch(toggleBlogModal())
                        dispatch(changeActivePackage(blog))
                      }}>view tour</p>
                  </div>
              </div>
          ))}
          {sortByNewest && blogs.map((blog, index) => (
              <div key={index} className={style.blogcard}>
                  <Image src={"https://res.cloudinary.com/drp73bqti/image/upload/v1680720109/yuyana/location_loba4t.png"} alt={blog.name.substr(0, 20)} width={200} height={200} priority />
                  <div className={style.blogcard__content}>
                      <h2>{blog.name.substr(0, 30)}</h2>
                      <p onClick={() => {
                        dispatch(toggleBlogModal())
                        dispatch(changeActivePackage(blog))
                      }}>view tour</p>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}
