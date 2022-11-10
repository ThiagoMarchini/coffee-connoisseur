import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from "../../data/coffee-stores.json";
import Head from "next/head";

export async function getStaticProps(context: any) {
    const params = context.params;
    console.log('params', params);
    return {
        props: {
            coffeeStore: coffeeStoresData.find((coffeeStore: any) => {
                return coffeeStore.id.toString() === params.id; //dynamic id
            }),
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } },
            { params: { id: '300' } },
        ],
        fallback: true, // false: if ID is not on the list, display 404 page
    }
}

const CoffeeStore: FunctionComponent = (props: any) => {
    const router = useRouter();

    const { address, name, neighborhood } = props.coffeeStore;

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    console.log('router', router);
    console.log('props', props);

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            <p>{address}</p>
            <p>{name}</p>
            <p>{neighborhood}</p>
        </div>
    )
}

export default CoffeeStore;