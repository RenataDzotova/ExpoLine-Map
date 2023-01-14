import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/map'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      <main className={styles.main}>

        {/* <Header> */}
        <div>

        <div className={styles.header}>
          <p className={styles.headerH1}>Expo Line</p>
          <p className={styles.headerH3}>by Renata Dzotova</p>
        </div>

        </div>
        {/* </Header> */}


        <Map></Map>

      </main>
  )
}
