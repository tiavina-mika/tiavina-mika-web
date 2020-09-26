import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import { ProjectsProps } from './Projects';
import { horizontalPaddingMobile, media } from '../../../utils/constants';
import Button from '../../shared/Button';

const SYSTEM_CONTENT_BLOCK_WIDTH = 380;

const useStyles = createUseStyles((theme: any) => ({
    projectRoot: {
        composes: 'flexColumn justifyCenter stretchSelf',
        marginBottom: theme.spacing(15),
        letterSpacing: '0.1em',
    },
    content: {
        composes: 'flexRow justifyCenter stretchSelf',
        [media.lgDown]: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: [0, theme.spacing(horizontalPaddingMobile)],
        },
    },
    imageBlockRoot: {
        composes: 'flexColumn center',
        [media.lgUp]: {
            flex: 1.3,
        },
    },
    textBlockRoot: {
        composes: 'flexRow',
        [media.lgUp]: {
            flex: 1,
        },
        [media.lgDown]: {
            marginTop: theme.spacing(4),
        },
        [media.smLg]: {
            maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
        },
    },
    textBlockRootReverse: {
        [media.lgUp]: {
            justifyContent: 'flex-end',
        },
    },
    textContent: {
        [media.lgUp]: {
            maxWidth: SYSTEM_CONTENT_BLOCK_WIDTH,
            padding: [theme.spacing(8), theme.spacing(6)],
        },
    },
    reverseImage: {
        [media.lgUp]: {
            order: 1,
        },
    },
    imageContainer: {
        composes: 'flexRow justifyEnd stretchSelf',
        paddingRight: theme.spacing(6),
        transform: 'translate(0%, 0px) rotate(-4e-05deg) rotateY(15deg) rotateX(9.99994deg)',
        transformOrigin: 'center top',
        pointerEvents: 'none',
    },
    imageContainerReverse: {
        transform: 'translate(0%, 0px) rotate(-4e-05deg) rotateY(-15deg) rotateX(9.99994deg)',
    },
    img: {
        [media.lgUp]: {
            width: '90%',
        },
        [media.smLg]: {
            width: '95%',
        },
        [media.smDown]: {
            width: '100%',
        },
        margin: 0,
    },
    textSpaceBottom: {
        [media.lgUp]: {
            marginBottom: theme.spacing(6),
        },
    },
    number: {
        composes: 'font-Montserrat-bold',
        color: '#F8C462',
        [media.lgDown]: {
            marginBottom: theme.spacing(5),
        },
    },
    title: {
        lineHeight: '1.2em',
    },
    description: {
        composes: 'font-Montserrat-medium',
        lineHeight: 1.8,
        [media.lgDown]: {
            marginBottom: theme.spacing(5),
        },
    },
    subtitle: {
        composes: 'font-Montserrat-regular',
        fontSize: 32,
        color: theme.color.subtitle,
        textTransform: 'initial',
        [media.lgDown]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            fontSize: 22,
            letterSpacing: 1,
        },
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
    reverseIndex: number;
};

const Project: FC<ProjectsProps & Props> = ({ image, reverse, title, link, description, subtitle, reverseIndex }) => {
    const classes = useStyles();

    return (
        <div className={classes.projectRoot}>
            <div className={classes.content}>
                <div className={clsx(classes.imageBlockRoot, reverse ? classes.reverseImage : null)}>
                    <div className={clsx(classes.imageContainer, reverse ? classes.imageContainerReverse : null)}>
                        <img src={`/images/${image}`} alt={image} className={classes.img} />
                    </div>
                </div>
                <div className={clsx(classes.textBlockRoot, reverse ? classes.textBlockRootReverse : null)}>
                    <div className={classes.textContent}>
                        <div className={clsx(classes.number, classes.textSpaceBottom)}>Projet. {reverseIndex}</div>
                        <h2 className={clsx(classes.title, classes.textSpaceBottom)}>{title}</h2>
                        <h3 className={clsx(classes.textSpaceBottom, classes.subtitle)}>{subtitle}</h3>
                        <div className={clsx(classes.textSpaceBottom, classes.description)}>{description}</div>
                        <Button url={link} text="Voir plus" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Project;
