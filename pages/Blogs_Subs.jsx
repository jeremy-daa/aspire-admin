import style from "../styles/Home.module.css"

import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Link from 'next/link'

export default function Blogs_Subs() {
    const [blogs, setBlogs] = useState(0)
    const [subs, setSubs] = useState(0)
    const [tours, setTours] = useState(0)
    // const [packages, setPackages] = useState(0)
    const [bookings, setBookings] = useState(0)

    const { data: articlesData, loading: articlesLoading, error: articlesError } = useFetch("blogs")
    const { data: subscribersData, loading: subscribersLoading, error: subscribersError } = useFetch("newsletter")
    const { data: toursData, loading: toursLoading, error: toursError } = useFetch("tours")
    // const { data: packagesData, loading: packagesLoading, error: packagesError } = useFetch("packages")
    const { data: bookingsData, loading: bookingsLoading, error: bookingsError } = useFetch("bookings")

    useEffect(() => {
        if (articlesData) {
            setBlogs(articlesData.length)
        }

        if (subscribersData) {
            setSubs(subscribersData.length)
        }

        if (toursData) {
            setTours(toursData.length)
        }

        // if (packagesData) {
        //     setPackages(packagesData.length)
        // }

        if (bookingsData) {
            setBookings(bookingsData.length)
        }
    }, [ articlesData, subscribersData, toursData, bookingsData])

  return (
    <div className={style.mainbody__container} >
        <div className={style.mainbody__cards}>
            <Link href='/blog' style={{flex: 1, textDecoration: "none"}} title='blog'>
                <div className={style.mainbody__card}>
                    <h1>{blogs}</h1>
                    <p>Blogs Written</p>
                </div>
            </Link>
            <Link href='/newsletter' style={{flex: 1, textDecoration: "none"}} title='newsletter'>
                <div className={style.mainbody__card}>
                    <h1>{subs}</h1>
                    <p>NewsLetter Subscribers</p>
                </div>
            </Link>
        </div>
        <div className={style.mainbody__cards}>
            <Link href='/tours' style={{flex: 1, textDecoration: "none"}} title='tours'>
                <div className={style.mainbody__card}>
                    <h1>{tours}</h1>
                    <p>Tours</p>
                </div>
            </Link>
            {/* <Link href='/packages' style={{flex: 1, textDecoration: "none"}} title='packages'>
                <div className={style.mainbody__card}>
                    <h1>{packages}</h1>
                    <p>Packages</p>
                </div>
            </Link> */}
            <Link href='/booking' style={{flex: 1, textDecoration: "none"}} title='bookings'>
                <div className={style.mainbody__card}>
                    <h1>{bookings}</h1>
                    <p>Bookings</p>
                </div>
            </Link>
        </div>
    </div>
  )
}
