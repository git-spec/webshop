/** Next, React */
import React from 'react';
import type { AppProps } from 'next/app';
/** Redux */
import { Provider } from 'react-redux';
import { store } from '../app/store';
/** Styles */
import '../styles/sass/style.sass';
/** Components */
import Layout from '../components/Layout';

/**
 * MyApp
 * @param {AppProps} Component
 * @param {AppProps} pageProps
 * @return {JSX.Element}
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
