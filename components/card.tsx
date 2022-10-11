// import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
    name: string;
    imgUrl: string;
    href: string;
}

const Card: FunctionComponent<Props> = (props) => {
    const { name, imgUrl, href } = props;

    return <Link href={href}>
    <a>
        <h2>{name}</h2>
        <Image src={imgUrl} width={260} height={160} alt="Coffee store image" />
    </a>
    </Link>
};

export default Card;