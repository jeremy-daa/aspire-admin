import style from "../styles/Home.module.css"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoCaretForward } from 'react-icons/io5'
import { AiFillDashboard } from 'react-icons/ai'
import { GiNewspaper, GiSurferVan } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { MdArticle, MdEvent } from 'react-icons/md'
import { GoPackage } from 'react-icons/go'

export default function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        switch (pathname) {
            case '/':
                setActive('dashboard')
                break
            case '/blog':
                setActive('blog')
                break
            case '/events':
                setActive('events')
                break
            // case '/packages':
            //     setActive('packages')
            //     break
            default:
                break
        }
    }, [])
  return (
    <div className={`${style.sidebar} ${isOpen && style.sidebar_open}`}>
        <div className={style.sidebar__toggle}>
            <IoCaretForward className={`${isOpen && style.sidebar__toggled} `} color='#fff' size={20} onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className={style.sidebar__logo}>
            <Image src='/icon.png' width={isOpen ? 100 : 50} height={isOpen ? 100 : 50} alt="Logo" priority/>
        </div>

        <div className={style.sidebar__items}>
            <Link href='/' onClick={() => setActive('dashboard')} style={{textDecoration: "none"}} title="dashboard">
                <div className={`${style.sidebar__item} ${active==='dashboard' && style.sidebar__item__active} `}>
                    <AiFillDashboard style={!isOpen && {flex: 1}} size={20}/>
                    {isOpen && <p style={{transition: .3}}>Dashboard</p>}
                </div>
            </Link>
            <Link href='/blog' onClick={() => setActive('blog')} style={{textDecoration: "none"}} title="blog">
                <div className={`${style.sidebar__item} ${active==='blog' && style.sidebar__item__active} `}>
                    <MdArticle style={!isOpen && {flex: 1}} size={20}/>
                    {isOpen && <p style={{transition: .3}}>Blog</p>}
                </div>
            </Link>
            <Link href='/events' onClick={() => setActive('events')} style={{textDecoration: "none"}} title="events">
                <div className={`${style.sidebar__item} ${active==='events' && style.sidebar__item__active} `}>
                    <MdEvent style={!isOpen && {flex: 1}} size={20}/>
                    {isOpen && <p style={{transition: .3}}>Events</p>}
                </div>
            </Link>
            {/* <Link href='/packages' onClick={() => setActive('packages')} style={{textDecoration: "none"}} title="packages">
                <div className={`${style.sidebar__item} ${active==='packages' && style.sidebar__item__active} `}>
                    <GoPackage style={!isOpen && {flex: 1}} size={20}/>
                    {isOpen && <p style={{transition: .3}}>Packages</p>}
                </div>
            </Link> */}


            <hr />


            {/* <Link href='/vendors' onClick={() => setActive('vendors')} title="vendors">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='vendors' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <GiBarracksTent className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Vendors</p>}
                </div>
            </Link>
            <Link href='/startups' onClick={() => setActive('startups')} title="Business Corner">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='startups' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <IoBulbSharp className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Business Corner</p>}
                </div>
            </Link>
            <Link href='/participants' onClick={() => setActive('participants')} title="participants">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='participants' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaUsers className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Visitors</p>}
                </div>
            </Link>
            <Link href='/ctf' onClick={() => setActive('ctf')} title="ctf">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='ctf' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaFlagCheckered className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Catch The Flag</p>}
                </div>
            </Link>
            <Link href='/hackathon' onClick={() => setActive('hackathon')} title="hackathon">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='hackathon' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <SiHackaday className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Hackathon</p>}
                </div>
            </Link>
            <Link href='/lanparty' onClick={() => setActive('lanparty')} title="lanparty">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='lanparty' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <IoGameController className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>LAN Party</p>}
                </div>
            </Link>
            <Link href='/workshop' onClick={() => setActive('workshop')} title="workshop">
                <div className={`flex h-12 rounded-lg duration-300 hover:bg-[#489b42] ${active==='workshop' ? 'bg-[#489b42]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                    <FaChalkboardTeacher className={`${isOpen ? '' : 'flex-1'}`} size={20}/>
                    {isOpen && <p className='duration-300'>Workshop</p>}
                </div>
            </Link> */}
        </div>
    </div>
  )
}
