/** React */
import { FunctionComponent, ReactElement } from 'react';
/** Components */
import NavLink from './NavLink';
/** Styles */
import styles from './navmenu.module.sass';
/** Interfaces */
import { INavItem } from '../../../interfaces/INavItem';

type Props = INavItem & {
    children?: ReactElement | ReactElement[];
};

/**
 * NavLink
 * @param {Props} props
 * @return {ReactElement}
 * */
const NavSubItem: FunctionComponent<Props> = (props: Props): ReactElement => {
    const { children, item, url } = props;

    return (
        <>
            {url.toString() !== '#' ? (
                <NavLink item={item} url={url} />
            ) : (
                <span className={styles.item} title={item.toString()}>
                    {item}
                </span>
            )}
            <div className={styles.sublist_wrapper}>{children}</div>
        </>
    );
};

export default NavSubItem;
