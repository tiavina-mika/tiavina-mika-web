import React, { ReactNode, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import { useWindowSize } from 'react-use';

import AlertMessage from './AlertMessage';
import { getScreen } from '../../reducers/appReducer';
import PageHeader from './PageHeader';

const useStyles = createUseStyles({
    root: {
        composes: 'flexColumn flexCenter alignCenter stretchSelf flex1',
    },
});

type Props = {
    children: ReactNode;
    windowTitle?: string;
    metaTitle?: string;
    metaDescription?: string;
    pageTitle: string;
    pageSubtitle?: string;
    pageDescription?: string;
};

const Page = ({
    children,
    windowTitle,
    metaTitle,
    metaDescription,
    pageDescription,
    pageSubtitle,
    pageTitle,
}: Props) => {
    const size = useWindowSize();
    const classes = useStyles({ size });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getScreen(size.width));
    }, []);

    return (
        <div className={classes.root}>
            <Head>
                <title>{windowTitle ? windowTitle + ' - ' : ''} Tiavina Michael Ralainirina</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content={metaTitle || 'Tiavina Michael Ralainirina Portfolio'} />
                <meta name="description" content={metaDescription || 'FullStack Developer from Madagascar.'} />
            </Head>
            <AlertMessage />
            <PageHeader title={pageTitle} subtitle={pageSubtitle} description={pageDescription} />
            {children}
        </div>
    );
};

export default Page;
