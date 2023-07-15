'use client'
import React, {useEffect} from 'react'
import { useAppSelector } from "../redux/hooks"
import style from "../styles/Home.module.css"

import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import LoginForm from "./LoginForm"

export default function Auth({children}) {

  const loggedIn = useAppSelector((state) => state.login.value)

  return (
    <>
        {loggedIn ? <div className={style.auth}>
            <Sidebar />
            <div className={style.container}>
                <Header />
                {children}
                <Footer />
            </div>
        </div> : <LoginForm />}
    </>
  )
}
