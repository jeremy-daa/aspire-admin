import style from "../styles/Home.module.css"

export default function TopSection() {
    // const sortBlogsByNewest = useAppSelector(state => state.sortBlogs.value)
    
  return (
    <div className={`${style.top_section}`}>
        <div>
            <h1 className={`${style.heading}`}>DASHBOARD</h1>
            {/* <p className='text-sm text-gray-700'>List of all blogs written</p> */}
        </div>

        <div className={`${style.top_section_r}`}>
            
        </div>
    </div>
  )
}
