import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Plx from '../../../components/home/projects/node_modules/react-plx';
import clsx from 'clsx';

import { ProjectsProps } from './Projects';
import ProjectLink from './ProjectLink';

const SYSTEM_CONTENT_BLOCK_WIDTH = 380;

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexRow justifyCenter',
        height: '280vh',
        width: '100%',
    },
    textBlockRoot: {
        composes: 'textBlock',
        maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
    },
    textPlx: {
        maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
        top: '20%',
        opacity: 0,
        position: 'fixed',
        transform: 'translateX(-20vw)',
    },
    reverseTextPlx: {
        transform: 'translateX(0vw)',
    },
    imageBlockRoot: {
        composes: 'flexColumn alignCenter justifyCenter',
    },
    imageBlockReverse: {
        order: -1,
    },
    img: {
        width: '100%',
        margin: 0,
        transform: 'translateY(50%)',
    },
    imagePlx: {
        pointerEvents: 'none',
        bottom: 0,
        opacity: 0,
        position: 'fixed',
        left: '13vw',
    },
    textTrigger: {
        marginTop: '120vh',
    },
    imageTrigger: {
        marginTop: '50vh',
    },
    scrollY: {
        height: '200vh',
    },
    description: {
        composes: 'font-Montserrat-regular',
        lineHeight: 1.6,
    },
    subtitle: {
        composes: 'font-tungsten-regular',
        fontSize: 32,
        letterSpacing: '0.16em',
        color: theme.colors.subtitle,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    link: {
        marginTop: theme.spacing(6),
        justifyContent: 'flex-start !important',
    },
    linkText: {
        justifyContent: 'flex-start !important',
    },
}));

type Props = {
    reverse?: boolean;
};

const PlxLayout: FC<Props & ProjectsProps> = ({ image, reverse, title, description, subtitle, link }) => {
    const classes = useStyles();
    const triggerClass = title.split(' ').join('-') + '-trigger';
    const textTriggerClass = 'text' + triggerClass;
    const imageTriggerClass = 'image' + triggerClass;

    const textParallaxData = [
        {
            start: `.${textTriggerClass}`,
            duration: '30vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                },
            ],
        },
        {
            start: `.${textTriggerClass}`,
            startOffset: '10vh',
            duration: '30vh',
            properties: [
                {
                    startValue: reverse ? 0 : -20,
                    endValue: reverse ? 16 : -38,
                    unit: 'vw',
                    property: 'translateX',
                },
            ],
        },
        {
            start: `.${textTriggerClass}`,
            startOffset: '90vh',
            duration: '50vh',
            properties: [
                {
                    startValue: 1,
                    endValue: 0,
                    property: 'opacity',
                },
            ],
        },
    ];

    const imageParallaxData = [
        {
            start: `.${imageTriggerClass}`,
            duration: '50vh',
            properties: [
                {
                    startValue: 0,
                    endValue: -40,
                    unit: 'vh',
                    property: 'translateY',
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                },
            ],
        },
        {
            start: `.${imageTriggerClass}`,
            startOffset: '60vh',
            duration: '30vh',
            properties: [
                {
                    startValue: 0,
                    endValue: reverse ? -13 : 15,
                    unit: 'vw',
                    property: 'translateX',
                },
            ],
        },
        {
            start: `.${imageTriggerClass}`,
            startOffset: '190vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 1,
                    endValue: 0,
                    property: 'opacity',
                },
            ],
        },
    ];

    return (
        <div className={classes.root}>
            <div className={classes.textBlockRoot}>
                <div className={clsx(textTriggerClass, classes.textTrigger)} />
                <Plx
                    parallaxData={textParallaxData}
                    className={clsx(classes.textPlx, reverse ? classes.reverseTextPlx : null)}>
                    <h2>{title}</h2>
                    <h3 className={classes.subtitle}>{subtitle}</h3>
                    <div className={classes.description}>{description}</div>
                    <ProjectLink url={link} className={classes.link} linkClassName={classes.linkText} />
                </Plx>
            </div>
            <div className={clsx(classes.imageBlockRoot, reverse ? classes.imageBlockReverse : null)}>
                <div className={clsx(imageTriggerClass, classes.imageTrigger)} />
                <Plx parallaxData={imageParallaxData} className={classes.imagePlx}>
                    <img src={`/images/${image}`} alt={image} className={classes.img} />
                </Plx>
                <div className={classes.scrollY} />
            </div>
        </div>
    );
};
export default PlxLayout;
