import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
import { createUseStyles } from 'react-jss';
import { useViewportScroll, motion } from 'framer-motion';
import { screenState } from '../../../reducers/appReducer';
import { useSelector } from 'react-redux';

import About from './About';

const useStyles = createUseStyles({
    presentation: {
        composes: 'flexRow flexEnd stretchSelf',
        height: '100vh',
        backgroundColor: '#fff',
        background: `linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(7,17,35,0.4) 59.29%, rgba(6,15,31,0.6) 99.89%, rgba(6,15,31,0.8) 99.93%)`,
    },
});

const Presentation = () => {
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const [opacity, setOpacity] = useState(1);
    const [position, setPosition] = useState(0);
    const isMobile = useSelector(screenState);

    useEffect(
        () =>
            scrollYProgress.onChange((latest) => {
                setOpacity(1 - latest * 1.8);
                setPosition(latest * 220);
            }),
        []
    );
    const Component = isMobile ? 'div' : motion.div;
    const styles = isMobile ? {} : { opacity };

    return (
        <Component className={classes.presentation} style={styles}>
            <About position={isMobile ? 0 : position} />
        </Component>
    );
};

export default Presentation;
