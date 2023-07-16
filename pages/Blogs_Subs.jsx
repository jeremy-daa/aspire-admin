import style from "../styles/Home.module.css"

import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Link from 'next/link'

export default function Blogs_Subs() {
    const [blogs, setBlogs] = useState(0)
    // const [packages, setPackages] = useState(0)

    const { data: articlesData, loading: articlesLoading, error: articlesError } = useFetch("blogs")
    // const { data: packagesData, loading: packagesLoading, error: packagesError } = useFetch("packages")

    useEffect(() => {
        if (articlesData) {
            setBlogs(articlesData.length)
        }

        // if (packagesData) {
        //     setPackages(packagesData.length)
        // }

    }, [ articlesData])

  return (
    <div className={style.mainbody__container} >
        <div className={style.mainbody__cards}>
            <Link href='/blog' style={{flex: 1, textDecoration: "none"}} title='blog'>
                <div className={style.mainbody__card}>
                    <h1>{blogs}</h1>
                    <p>Blogs Written</p>
                </div>
            </Link>
        </div>
        <div className={style.mainbody__cards}>

            {/* <Link href='/packages' style={{flex: 1, textDecoration: "none"}} title='packages'>
                <div className={style.mainbody__card}>
                    <h1>{packages}</h1>
                    <p>Packages</p>
                </div>
            </Link> */}
            
        </div>
    </div>
  )
}
