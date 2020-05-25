import React, { useState, useEffect, FC } from 'react';
import { createUseStyles } from 'react-jss';
import { useViewportScroll, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { screenState } from '../../../reducers/appReducer';

import About from './About';

const useStyles = createUseStyles({
    presentation: {
        composes: 'flexRow flexEnd stretchSelf',
        height: '100vh',
        backgroundColor: '#fff',
        // background: `linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(7,17,35,0.4) 59.29%, rgba(6,15,31,0.6) 99.89%, rgba(6,15,31,0.8) 99.93%)`,
    },
});

const Presentation: FC = () => {
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const [bgOpacity, setBgOpacity] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [position, setPosition] = useState(0);
    const isMobile = useSelector(screenState);

    useEffect(
        () =>
            scrollYProgress.onChange((latest) => {
                setOpacity(1 - latest * 3.5);
                setBgOpacity(latest * 5);
                setPosition(latest * 220);
            }),
        []
    );
    const Component = isMobile ? 'div' : motion.div;
    const styles = isMobile
        ? {}
        : {
              background: `linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(0,0,0,${
                  bgOpacity - 0.2
              }) 20.29%, rgba(0,0,0,${bgOpacity - 0.1}) 80.89%, rgba(0,0,0,${bgOpacity}) 99.93%)`,
          };

    return (
        <Component className={classes.presentation} style={styles}>
            <About position={isMobile ? 0 : position} opacity={opacity} />
        </Component>
    );
};

export default Presentation;