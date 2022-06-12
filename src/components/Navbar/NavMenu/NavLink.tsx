/** React */
import { FunctionComponent, ReactElement } from "react";
/** Components */
import Link from "next/link";
/** Styles */
import styles from "./navmenu.module.sass";
/** Interfaces */
import { INavItem } from "../../../interfaces/INavItem";

/**
 * NavLink
 * @param {INavItem} props
 * @return {ReactElement}
 * */
const NavLink: FunctionComponent<INavItem> = (
    props: INavItem
): ReactElement => {
    const { item, url } = props;

    return (
        <Link href={url}>
            <a className={styles.item} title={item.toString()}>
                {item}
            </a>
        </Link>
    );
};

export default NavLink;
