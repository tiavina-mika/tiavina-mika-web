import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
import { createUseStyles } from 'react-jss';
import { useViewportScroll, motion } from 'framer-motion';

const useStyles = createUseStyles({
    block1: {
        height: '100vh',
        display: 'flex',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        '& h1': {
            color: '#000',
        },
    },
});

const Presentation = () => {
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const [opacity, setOpacity] = useState(1);

    useEffect(
        () =>
            scrollYProgress.onChange((latest) => {
                setOpacity(1 - latest * 1.5);
            }),
        []
    );
    return (
        <motion.div className={classes.block1} style={{ opacity }}>
            <h1>Tiavina Michael Ralainirina</h1>
            <h1>Developpeur</h1>
        </motion.div>
    );
};

export default Presentation;
