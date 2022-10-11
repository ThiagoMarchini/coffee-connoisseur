import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Banner from '../components/banner';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  const handleBannerButtonClick = () => {
    console.log('Hi banner button!');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleBannerButtonClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="banner background" />
        </div>
      </main>
    </div>
  )
}

export default Home
