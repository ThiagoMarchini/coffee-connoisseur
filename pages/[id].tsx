import Head from "next/head";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const Dynamic: FunctionComponent = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
            <Head>
                <title>{id}</title>
            </Head>
            <div>
                Page {id}
            </div>
        </>
    )
}

export default Dynamic;