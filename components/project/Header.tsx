import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import PlxComponent from '../Common/PlxComponent';
import { media } from '../../utils/constants';
import clsx from 'clsx';

const useStyles = createUseStyles({
    header: {
        composes: 'flexColumn justifyCenter center stretchSelf',
        height: '100vh',
        [media.lgDown]: {
            backgroundColor: '#000',
        },
    },
    title: {
        fontFamily: 'Prequel, sans-serif',
        letterSpacing: '0.6vw',
        margin: 0,
        fontSize: 52,
        color: '#fff',
    },
    subtitle: {
        opacity: 0,
    },
});

const triggerClass = 'headerHeader-trigger';

const Header: FC = () => {
    const classes = useStyles();

    const rootParallaxData = [
        {
            start: `.${triggerClass}`,
            duration: '40vh',
            easing: 'easeInSine',
            properties: [
                {
                    startValue: '#1EB47C',
                    endValue: '#000',
                    property: 'backgroundColor',
                },
            ],
        },
    ];

    const titleParallaxData = [
        {
            start: `.${triggerClass}`,
            duration: '40vh',
            easing: 'easeInSine',
            properties: [
                {
                    startValue: 1,
                    endValue: 3,
                    property: 'scale',
                },
            ],
        },
        {
            start: `.${triggerClass}`,
            startOffset: '75vh',
            duration: '30vh',
            easing: 'easeInSine',
            properties: [
                {
                    startValue: 1,
                    endValue: 0,
                    property: 'opacity',
                },
            ],
        },
    ];

    const subtitleParallaxData = [
        {
            start: `.${triggerClass}`,
            startOffset: '60vh',
            duration: '40vh',
            easing: 'easeInSine',
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                },
            ],
        },
        {
            start: `.${triggerClass}`,
            duration: '60vh',
            easing: 'easeInSine',
            properties: [
                {
                    startValue: 0,
                    endValue: 25,
                    unit: 'vh',
                    property: 'translateY',
                },
            ],
        },
    ];

    return (
        <PlxComponent className={classes.header} parallaxData={rootParallaxData} triggerClass={triggerClass}>
            <PlxComponent
                tagName="h1"
                className={classes.title}
                parallaxData={titleParallaxData}
                triggerClass={triggerClass}>
                Project Title
            </PlxComponent>
            <PlxComponent
                tagName="h3"
                className={clsx(classes.subtitle, classes.title)}
                parallaxData={subtitleParallaxData}
                triggerClass={triggerClass}>
                Project Title 2
            </PlxComponent>
        </PlxComponent>
    );
};

export default Header;
