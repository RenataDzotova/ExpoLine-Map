import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/map'
import Header from '../components/header'
import Footer from '../components/footer'
import { ImgPlaceholder } from '../styles/global'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      // <main className={styles.main}>
      <ImgPlaceholder>

        <Header></Header>
        <Map></Map>
        <Footer></Footer>
      
        </ImgPlaceholder>
      // </main>
  )
}
