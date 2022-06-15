/** React */
import {
    ReactElement,
    FunctionComponent,
    useEffect,
    useState,
    cloneElement,
} from 'react';
/** Components */
import NavLink from './NavLink';
import NavSubItem from './NavSubItem';
/** Interfaces */
import { INavItem } from '../../../interfaces/INavItem';
/** Features */
import { checkUrl } from '../../../features/url/checkUrl';
/** Styles */
import styles from './navmenu.module.sass';

type Props = INavItem & {
    children?: ReactElement;
    subItem?: boolean;
    currItem?: string | null;
    location?: string | null;
    callback: (item: string | null) => void;
};

/**
 *Items of NavMenu.
 * @param {INavItem} props
 * @return {ReactElement}
 */
const NavItem: FunctionComponent<Props> = (props: Props): ReactElement => {
    const { children, url, item, subItem, currItem, location, callback } =
        props;

    type states = {
        isOpen: boolean;
        currItem: string | null;
        currSubItem: string | boolean | null | undefined;
        location: string | null;
    };

    const initialState: states = {
        isOpen: false,
        currItem: null,
        currSubItem: null,
        location: null,
    };
    const [state, setState] = useState<states>(initialState);

    useEffect(() => {
        currItem === null &&
            setState({ ...state, currItem: currItem, isOpen: false });

        location !== state.location &&
            location &&
            setState({ ...state, isOpen: false, location: location });
    }, [currItem, location]);

    return (
        <>
            {subItem ? (
                <li
                    className={`${styles.list_item} ${
                        currItem === url ||
                        currItem === item ||
                        (subItem &&
                            currItem?.includes(item.toLocaleLowerCase())) ||
                        (state.location && state.location.includes(url)) ||
                        (state.location &&
                            state.location.includes(item.toLowerCase()))
                            ? styles.active
                            : ''
                    }`}
                    onTouchStart={(e) => {
                        e.stopPropagation();
                        setState({ ...state, isOpen: !state.isOpen });
                        e.target.href &&
                            callback &&
                            callback(checkUrl(item, url.toString()));
                    }}
                    onMouseOver={(e) => {
                        e.stopPropagation();
                        setState({ ...state, isOpen: true });
                    }}
                    onMouseOut={(e) => {
                        e.stopPropagation();
                        setState({ ...state, isOpen: false });
                    }}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                        e.target.href &&
                            callback &&
                            callback(checkUrl(item, url.toString()));
                    }}
                >
                    <>
                        <div
                            className={`${styles.topbar} ${
                                state.isOpen ? styles.open : ''
                            }`}
                        />
                        <NavSubItem item={item} url={url}>
                            {children &&
                                cloneElement(children, { open: state.isOpen })}
                        </NavSubItem>
                    </>
                </li>
            ) : (
                <li
                    className={`${styles.list_item} ${
                        currItem === url ||
                        currItem === item ||
                        (subItem &&
                            currItem?.includes(item.toLocaleLowerCase())) ||
                        (state.location && state.location.includes(url)) ||
                        (state.location &&
                            state.location.includes(item.toLowerCase()))
                            ? styles.active
                            : ''
                    }`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setState({ ...state, isOpen: !state.isOpen });
                        callback && callback(item);
                    }}
                >
                    <NavLink item={item} url={url} />
                </li>
            )}
        </>
    );
};

export default NavItem;
