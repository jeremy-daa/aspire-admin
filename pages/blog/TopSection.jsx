import style from "../../styles/Blogs.module.css"
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { AiFillFileAdd } from 'react-icons/ai'
import { setSortBlogsByNewest } from '../../redux/slices/sortBlogsSlice'
import { toggleBlogAddModal } from '../../redux/slices/blogAddModalToggleSlice'
import BlogSearch from './BlogSearch'

export default function TopSection() {
    const dispatch = useAppDispatch()
    // const sortBlogsByNewest = useAppSelector(state => state.sortBlogs.value)
    
  return (
    <div className={`${style.top_section}`}>
        <div>
            <h1 className={`${style.heading}`}>Blogs</h1>
            <p className={style.heading__text}>List of all blogs written</p>
        </div>

        <div className={`${style.top_section_r}`}>
            <BlogSearch />
            <div className={style.blogfilter}>
                <select name="sort" id="sort" onChange={(e) => dispatch(setSortBlogsByNewest(e.target.value === "newest" ? true : false))}>
                    <option value="newest" >Newest</option>
                    <option value="oldest" >Oldest</option>
                </select>
            </div>
            <div className={style.blogadd} onClick={() => dispatch(toggleBlogAddModal())}>
                <AiFillFileAdd className={style.blogadd__icon} />
                <p>Add Blog</p>
            </div>
        </div>
    </div>
  )
}
