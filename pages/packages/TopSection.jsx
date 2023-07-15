import style from "../../styles/News.module.css"
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { AiFillFileAdd } from 'react-icons/ai'
import { setSortBlogsByNewest } from '../../redux/slices/sortBlogsSlice'
import { toggleBlogAddModal } from '../../redux/slices/blogAddModalToggleSlice'

export default function TopSection() {
    const dispatch = useAppDispatch()
    // const sortBlogsByNewest = useAppSelector(state => state.sortBlogs.value)
    
  return (
    <div className={`${style.top_section}`}>
        <div>
            <h1 className={`${style.heading}`}>Tour Packages</h1>
            <p className={style.heading__text}>List of all Tour Packages</p>
        </div>

        <div className={`${style.top_section_r}`}>
            <div className={style.blogfilter}>
                <select name="sort" id="sort" onChange={(e) => dispatch(setSortBlogsByNewest(e.target.value === "newest" ? true : false))}>
                    <option value="newest" >Newest</option>
                    <option value="oldest" >Oldest</option>
                </select>
            </div>
            <div className={style.blogadd}  onClick={() => dispatch(toggleBlogAddModal())} >
                <AiFillFileAdd className={style.blogadd__icon} />
                <p>Add New Package</p>
            </div>
        </div>
    </div>
  )
}
