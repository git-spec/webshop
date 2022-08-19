/** Next, React */
import { FunctionComponent, useState, useRef, useEffect } from 'react';
// import { useRouter } from "next/router";
import Link from 'next/link';
/** Fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
/** Styles */
import navStyles from './nav.module.sass';
/** Components */
import Logo from '../Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import NavItem from './NavMenu/NavItem';
/** Interfaces */
import { IMenu } from '../../interfaces/IMenu';
/** Hooks */
import useDocEvtTarget from '../../hooks/useDocEvtTarget';
// import { useWindowSize } from "../../hooks/useWindowSize";
// import { getWidth, selectWidth } from "../../features/window/windowSize";
/** Redux */
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
/** Features */
import { checkUrl } from '../../features/url/checkUrl';
/** Data */
import menu from '../../data/menu.json';

/**
 * Navigation bar of the application
 * @return {JSX.Element}
 */

const Navbar: FunctionComponent = (): JSX.Element => {
    type States = {
        currItem: string | null;
        // isOpenAct: boolean;
        isOpen: boolean;
        location: string | null;
    };
    const initialState: States = {
        currItem: null,
        // isOpenAct: false,
        isOpen: false,
        location: null,
    };
    const [state, setState] = useState<States>(initialState);

    const targetRef = useRef<HTMLDivElement>(null);

    /** Subitems of items from navmenu in side-bar will be closed if viewport is bigger than 640px. */
    // const windowSize = useWindowSize();
    // const dispatch = useAppDispatch();
    // const windowWidth = useAppSelector(selectWidth);
    // windowSize.width && dispatch(getWidth(windowSize.width));

    //

    /** Close top-bar & side-bar after changing page. */
    // useEffect(() => {
    //     const handleRouteChange = (url: string) => {
    //         setState({
    //             ...state,
    //             isOpenTB: false,
    //             isOpenSB: false,
    //         });
    //     };

    //     router.events.on("routeChangeStart", handleRouteChange);

    //     return () => {
    //         router.events.off("routeChangeStart", handleRouteChange);
    //     };
    // }, []);

    /** Close bars after changing viewport or location. */
    useEffect(() => {
        if (window.location.pathname !== state.location) {
            setState({
                ...state,
                isOpen: false,
                location: window.location.pathname,
            });
        }

        window.onresize = function () {
            setState({
                ...state,
                isOpen: false,
                currItem: null,
            });
        };
        return window.removeEventListener('resize', function () {
            setState({
                ...state,
                isOpen: false,
                currItem: null,
            });
        });
    });

    /** Toggle state of menu & set state of account to false.
     * @return {void}
     */
    const toggleSidebar = (): void => {
        setState({
            ...state,
            isOpen: !state.isOpen,
            // isOpenAct: false,
        });
    };

    /** Set selected item.
     * @param {string} item Status of item
     * @return {void}
     */
    const setItem = (item: string | null): void => {
        setState({
            ...state,
            currItem: item,
        });
    };

    /**
     * Close bars of navigation.
     * @return {void}
     * */
    const closeBar = (): void => {
        setState({
            ...state,
            currItem: null,
            isOpen: false,
        });
    };

    /**
     * Handle clicks outside of event target.
     * @param {Object} e Property target of event.
     * @return {void}
     * */
    const handleClickOutside = (e: { target: any }): void => {
        if (targetRef.current && !targetRef.current.contains(e.target)) {
            closeBar();
        }
    };

    /** Set event listeners click & touchstart to document. */
    useDocEvtTarget(handleClickOutside);

    return (
        <nav className={navStyles.bar}>
            <div className={navStyles.wrapper}>
                <div className={navStyles.logo_wrapper}>
                    <Logo classLogo={navStyles.logo} callback={closeBar} />
                </div>
                <div className={navStyles.menu_wrapper} ref={targetRef}>
                    <div
                        className={`${navStyles.menu_btn} ${
                            state.isOpen ? navStyles.active : ''
                        }`}
                        onClick={toggleSidebar}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div
                        className={`${navStyles.menu} ${
                            state.isOpen ? navStyles.open : ''
                        }`}
                    >
                        <NavMenu subItem={true}>
                            {menu.items.map((value: IMenu) => (
                                <NavItem
                                    key={
                                        checkUrl(
                                            value.item,
                                            value.url?.toString()
                                        ) !== '#'
                                            ? checkUrl(
                                                  value.item,
                                                  value.url?.toString()
                                              )
                                            : value.item
                                    }
                                    item={value.item}
                                    url={checkUrl(
                                        value.item,
                                        value.url?.toString()
                                    )}
                                    subItem={value.subItem && true}
                                    currItem={state.currItem}
                                    location={state.location}
                                    callback={setItem}
                                >
                                    {value.subItem && (
                                        <NavMenu>
                                            {value.subItem.map((subValue) => (
                                                <NavItem
                                                    key={checkUrl(
                                                        subValue.item,
                                                        subValue.url?.toString()
                                                    )}
                                                    item={subValue.item}
                                                    url={checkUrl(
                                                        subValue.item,
                                                        subValue.url?.toString()
                                                    )}
                                                    currItem={state.currItem}
                                                    location={state.location}
                                                    callback={setItem}
                                                />
                                            ))}
                                        </NavMenu>
                                    )}
                                </NavItem>
                            ))}
                        </NavMenu>
                    </div>
                </div>
                {/* <ul./abstracts/index
            className={navStyles.account_list}
            // {[navStyles.account_list, toggleClassNameAcc()].join(' ')}
        >
            <li>
                <Link href="#">Login</Link>
            </li>
            <li>
                <Link href="#">Register</Link>
            </li>
        </ul> */}
                <ul className={navStyles.user_btns}>
                    <li>
                        <Link href="#">
                            <a className={navStyles.cart_btn}>
                                <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    // fixedWidth
                                    // size={'2x'}
                                />
                            </a>
                        </Link>
                        {/* <a href="#" className="cartFull"> <i className="fas fa-cart-arrow-down"></i></a> */}
                    </li>
                    <li>
                        <div
                            className={navStyles.account_btn}
                            // onClick={toggleAccount}
                        >
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span>Account</span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
