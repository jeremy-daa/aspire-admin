import style from '../styles/Home.module.css'
import TopSection from './TopSection'
import MainBody from './MainBody'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={`${style.home} ${style.blog}`}>
        <Head>
          <title>Aspire Admin Panel</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <TopSection />
        <MainBody />
    </div>
  )
}
