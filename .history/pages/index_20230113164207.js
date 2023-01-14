import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/map'
import {Header, HeaderText, SmallHeaderText} from '../styles/global'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      <main className={styles.main}>
        <div>
        <Header>
          <HeaderText>Expo Line</HeaderText>
          {/* <SmallHeaderText>by Renata Dzotova</SmallHeaderText> */}
        </Header>
        </div>

        <Map></Map>

      </main>
  )
}
