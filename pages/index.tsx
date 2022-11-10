import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Banner from '../components/banner';
import Card from '../components/card';
import styles from '../styles/Home.module.css';
import coffeeStoresData from "../data/coffee-stores.json";

type CoffeeStore = {
  id: number;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighborhood: string;
}

type Props = {
  coffeeStores: CoffeeStore[];
}

// Pre-renders the content for the cards
// - Only runs at server-side
// - Only runs at build time
// - won´t be included in the client bundle
// - on dev runs server-side and client-side
export async function getStaticProps(context: any) {
  console.log('getStaticProps called');
  return {
    props: {
      coffeeStores: coffeeStoresData,
    } // will be passed to the page component as props
  }
}

const handleBannerButtonClick = () => {
  console.log('Hi banner button!');
}

const Home: NextPage = (props: any) => {
  console.log('props', props);
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
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="banner background"
          />
        </div>
        {props.coffeeStores.length > 0 && 
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore: CoffeeStore) => {
                return <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    href={`/coffee-store/${coffeeStore.id}`}
                    imgUrl={coffeeStore.imgUrl}
                    className={styles.card}
                  />
              })}
          </div>
        </>}
      </main>
    </div>
  )
}

export default Home
