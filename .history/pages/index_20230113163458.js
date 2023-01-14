import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/map'
import {Header, HeaderText} from '../styles/global'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      <main className={styles.main}>
        <Header>
          <HeaderText>Expo Line</HeaderText>
        </Header>
        <Map></Map>
      </main>
  )
}
