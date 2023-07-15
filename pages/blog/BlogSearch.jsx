import style from "../../styles/Blogs.module.css"

import React, { useState } from 'react'
import Link from 'next/link';
import { useAppDispatch } from '../../redux/hooks';
import { toggleBlogModal } from '../../redux/slices/blogModalToggleSlice';
import { changeActiveBlog } from '../../redux/slices/activeBlogSlice';
import { IoSearchOutline } from 'react-icons/io5'
import useFetch from "../../hooks/useFetch";

export default function BlogSearch() {
    const dispatch = useAppDispatch();

    const [filteredData, setFilteredData] = useState([]);
    const [word, setWord] = useState("");
    const { data, loading, error } = useFetch("blogs")
    


    const handleSearch = (e) => {
        const keyword = e.target.value;
        // const newFilter = data.filter((article: any) => {
        //   return article.title.toLowerCase().includes(keyword.toLowerCase())
        // })
        if(keyword === "") {
          setFilteredData([])
          setWord("")
        }

        setFilteredData( data.filter((article) => article.title.toLowerCase().includes(keyword.toLowerCase())))
        setWord(keyword)
        
      }
      const clearSearch = () => {
        setFilteredData([])
        setWord("")
      }
    

    const checkEmpty = (e) => {
        if(e.target.value === "") {
            setFilteredData([])
            setWord("")
        }
    }
    


  return (
    <div className={style.blogsearch} >
        <div className={style.blogsearch__con}>
            <input  id='blog-search' className={style.top_section_search} type="text" placeholder='Search here' value={word} onChange={handleSearch} onKeyDown={checkEmpty} />
            <IoSearchOutline  id='blog-search' className={style.top_section_search_icon} />
        </div>
        {filteredData.length != 0 && (
            <div className={style.searchResult} >
                {data && filteredData.slice(0, 10).map((blog, index) => (
                    <div className={style.searchResult__con} key={index}>
                        <p id='blog-search' onClick={() => {
                            dispatch(toggleBlogModal())
                            dispatch(changeActiveBlog(blog))
                            clearSearch()
                            }} 
                        >
                            {blog.title.substr(0, 50)}
                        </p>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}
