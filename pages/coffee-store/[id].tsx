import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore: FunctionComponent = () => {
    const router = useRouter();
    const {id} = router.query;
    console.log('router', router);
    return (
        <div>
            Coffee Store Page {id}
            <Link href="/">
                <a>Back to home</a>
            </Link>
            <Link href="/coffee-store/dynamic">
                <a>Go to page dynamic</a>
            </Link>
        </div>
    )
}

export default CoffeeStore;