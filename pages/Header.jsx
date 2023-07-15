import style from '../styles/Home.module.css'
import { useState } from 'react'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { useAppDispatch } from '../redux/hooks'
import { logout } from '../redux/auth/loginSlice'
import { useRouter } from 'next/navigation'

export default function Header() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onLogout = () => {
    dispatch(logout())
    router.push('/')
  }

  return (
    <div className={style.header}>
        <div className={style.header__container}>
            <div className={style.header__admin} >
                <FaUserCircle className={style.header__admin__icon} title='admin' />
                <div className={style.header__adminContent}>
                    {/* <h4 className='font-thin text-lg text-center'>admin</h4> */}
                    <button className={style.header__admin__btn} onClick={onLogout}>Logout <FaSignOutAlt size={25} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}
