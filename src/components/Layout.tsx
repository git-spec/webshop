import React, { ReactChild, Fragment, FunctionComponent } from 'react';
import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
// import { useWindowSize } from "../hooks/useWindowSize";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { getWidth, selectWidth } from "../features/window/windowSize";

type Props = {
    children?: ReactChild | ReactChild[];
};

/**
 * Wraps head, header with navbar, footer & main with children together.
 * @param {Props} children React component pages.
 * @return {JSX.Element}
 */
const Layout: FunctionComponent<Props> = ({ children }: Props): JSX.Element => {
    // const windowSize = useWindowSize();
    // const dispatch = useAppDispatch();
    // const windowWidth = useAppSelector(selectWidth);

    // windowSize.width && dispatch(getWidth(windowSize.width));
    // console.log(windowSize.width);
    // console.log(windowWidth);

    return (
        <Fragment>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <header>
                <Navbar></Navbar>
            </header>
            <main>{children}</main>
            <Footer></Footer>
        </Fragment>
    );
};

/* class component */
// export default class Layout extends Component<Props> {
//     render() {
//         return (
//             <Fragment>
//                 <Head>
//                     <meta charSet="utf-8" />
//                     <meta
//                         name="viewport"
//                         content="initial-scale=1.0, width=device-width"
//                     />
//                 </Head>
//                 <header>
//                     <Navbar></Navbar>
//                 </header>
//                 {this.props.children}
//                 <Footer></Footer>
//             </Fragment>
//         );
//     }
// }

export default Layout;
