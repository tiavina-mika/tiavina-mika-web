import React from 'react';
// import Head from 'next/head';
import { createUseStyles } from 'react-jss';

import Block1 from '../../components2/home/presentation/Presentation';
import Block2 from '../../components2/home/Domain';

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

const Scroll = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Block1 />
            <Block2 />
        </div>
    );
};

export default Scroll;
