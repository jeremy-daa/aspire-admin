import style from "../styles/Home.module.css"

import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Link from 'next/link'

export default function Blogs_Subs() {
    const [blogs, setBlogs] = useState(0)
    const [events, setEvents] = useState(0)
    // const [packages, setPackages] = useState(0)

    const { data: articlesData, loading: articlesLoading, error: articlesError } = useFetch("news")
    const { data: eventsData, loading: eventsLoading, error: eventsError } = useFetch("events")
    // const { data: packagesData, loading: packagesLoading, error: packagesError } = useFetch("packages")

    useEffect(() => {
        if (articlesData) {
            setBlogs(articlesData.length)
        }

        if (eventsData) {
            setEvents(eventsData.length)
        }

        // if (packagesData) {
        //     setPackages(packagesData.length)
        // }

    }, [ articlesData, eventsData ])

  return (
    <div className={style.mainbody__container} >
        <div className={style.mainbody__cards}>
            <Link href='/blog' style={{flex: 1, textDecoration: "none"}} title='blog'>
                <div className={style.mainbody__card}>
                    <h1>{blogs}</h1>
                    <p>Blogs Written</p>
                </div>
            </Link>
            <Link href='/events' style={{flex: 1, textDecoration: "none"}} title='events'>
                <div className={style.mainbody__card}>
                    <h1>{events}</h1>
                    <p>Upcoming Events</p>
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
