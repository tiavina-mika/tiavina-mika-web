import React, { useState, useEffect, FC } from 'react';
import { createUseStyles } from 'react-jss';
import { useViewportScroll } from 'framer-motion';
import { useSelector } from 'react-redux';

import { screenState } from '../../../reducers/appReducer';

import About from './About';
import PlxComponent from '../../Common/PlxComponent';

const useStyles = createUseStyles({
    presentation: {
        composes: 'flexRow flexEnd stretchSelf',
        height: '100vh',
        // background: `linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(0,0,0,0.2) 20.29%, rgba(0,0,0,0.1) 80.89%, rgba(0,0,0,0) 99.93%)`,
        // backgroundColor: '#171717',
        // backgroundImage: `url(images/bg.svg)`,
    },
});

const triggerClass = 'presentationHeader-trigger';

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
                setBgOpacity(latest * 15);
                setPosition(latest * 220);
            }),
        []
    );

    const parallaxData = [
        {
            start: `.${triggerClass}`,
            duration: '40vh',
            easing: 'easeInSine',
            properties: [
                {
                    startValue: '#fff',
                    endValue: '#000',
                    property: 'backgroundColor',
                },
            ],
        },
    ];

    return (
        <PlxComponent
            className={classes.presentation}
            parallaxData={parallaxData}
            triggerClass={triggerClass}
            id="presentation"
            trigger={20}>
            <About position={isMobile ? 0 : position} opacity={opacity} />
        </PlxComponent>
    );
};

export default Presentation;
