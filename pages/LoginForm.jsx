'use client'
import { useState, useEffect } from 'react'
import { FaUserLock } from "react-icons/fa"
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login, logout } from '../redux/auth/loginSlice'

export default function LoginForm() {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const [formData, setFormData] = useState({
        email: '', 
        password: '' 
    })
    
    const { email, password } = formData;
    
    
    const dispatch = useAppDispatch()
    const router = useRouter()


    const onSubmit = (e) => {
        e.preventDefault()

        const adminData = {
            email,
            password
        }

        setIsLoading(true)
        fetch('https://test.oneloveethiopiatour.com/api/administrator/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success === false) {
                setIsLoading(false)
                setError(data.msg)
            } else {
                setIsLoading(false)
                dispatch(login(data.token))
            }
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err.message)
        })
    }

    const onChange = (e) => {
        setFormData({ 
            ...formData, [e.target.name]: e.target.value 
        })
    }

    if (isLoading) {
        return (
            <div className='login'>
                <div className="spinner"></div>
            </div>
        )
    }

  return (
    <div className='login'>
        <div className="login__container">
            <div className="login__icon">
                <FaUserLock />
            </div>
            {error && <p className="login__error">{error}</p>}
            <form className="login__form" onSubmit={onSubmit}>
                <input value={email} onChange={onChange} type="email" required name="email" id="email" placeholder='email' />
                <input value={password} onChange={onChange} type="password" required name="password" id="password" placeholder='password' />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}
