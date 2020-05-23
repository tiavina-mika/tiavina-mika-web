import React from 'react';
// import Head from 'next/head';
import { createUseStyles } from 'react-jss';

import Block1 from '../components/presentation/Presentation';
import Block2 from '../components/domain/Domain';

const useStyles = createUseStyles({
    root: {
        // minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#000',
        alignSelf: 'stretch',
        flex: 1,
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Block1 />
            <Block2 />
        </div>
    );
};

export default Home;
