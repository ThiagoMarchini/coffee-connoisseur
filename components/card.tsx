import cls from 'classnames';
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
    name: string;
    imgUrl: string;
    href: string;
    className: string;
}

const Card: FunctionComponent<Props> = (props) => {
    const { name, imgUrl, href } = props;

    return (
        <Link href={href}>
            <a className={styles.cardLink}>
                <div className={cls("glass", styles.container)}>
                    <div className={styles.cardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{name}</h2>
                    </div>
                    <div className={styles.cardImageWrapper}>
                        <Image
                            className={styles.cardImage}
                            src={imgUrl}
                            width={260}
                            height={160}
                            alt="Coffee store image"
                        />

                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card;