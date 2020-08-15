import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import store from '../reducers/store';
import '../styles.css';

const theme = {
    color: {
        primary: '#cf1119',
        // secondary: '#373432',
        secondary: '#27282A',
        regular: '#6D6D6D',
        subtitle: '#52575f',
        grey: '#52575f',
    },
    spacing: (size) => size * 6,
};
React.useLayoutEffect = React.useEffect;
const MyApp = ({ Component, pageProps, router }: AppProps) => {
    useEffect(() => {
        const style = document.getElementById('server-side-styles');

        if (style) {
            style.parentNode.removeChild(style);
        }
    });
    return (
        <Provider store={store}>
            <AnimatePresence exitBeforeEnter>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} key={router.route} />
                </ThemeProvider>
            </AnimatePresence>
        </Provider>
    );
};

export default MyApp;
