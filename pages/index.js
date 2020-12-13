import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import HomeComponrnt from '../src/components/Home/index';
import { Blog } from '../src/components/ListAndKeys/Blog';
import ExtractComponent from '../src/components/Extracting/ExtractComponent';
import FormatName from '../src/components/FormatName';
import Tick from '../src/components/Tick';
import Greeting from '../src/components/Conditional/Greeting';
import EventHandling from '../src/components/EventHandling';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeComponrnt />
        <Link href="/dashboard">Go to Dashboard</Link>
        <Link href="/customhook">Go to Custom Hook</Link>
        <Link href="/context">Go to Context</Link>
        <Link href="/workouts">Go to Redux Workouts</Link>
        <hr />
        <Blog />
        <hr />
        <ExtractComponent />
        <hr />
        <FormatName />
        <hr />
        <Tick />
        <hr />
        <Greeting />
        <hr />
        <EventHandling />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Example Next App
        </a>
      </footer>
    </div>
  )
}
