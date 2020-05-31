import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import BlockTitle from '../../Common/BlockTitle';
import { animate, itemVariants } from '../../../animations/cards';
import { media, lgScreenWidth } from '../../../utils/constants';
import { screenState } from '../../../reducers/appReducer';

const useStyles = createUseStyles((theme: any) => ({
    fullColumn: {
        composes: 'flexColumn stretchSelf',
    },
    root: {
        composes: '$fullColumn justifyCenter',
        [media.mdDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    },
    content: {
        composes: '$fullColumn center',
        [media.mdUp]: {
            marginTop: theme.spacing(6),
        },
    },
    center: {
        composes: 'flexRow justifyCenter',
        [media.lgUp]: {
            width: lgScreenWidth - 300,
            marginTop: theme.spacing(4),
        },
        [media.lgDown]: {
            justifyContent: 'flex-start',
        },
    },
    type: {
        composes: '$fullColumn flex1',
    },
    label: {
        fontFamily: 'Tungsten-Medium',
        color: '#fff',
        fontSize: 24,
        marginBottom: theme.spacing(3),
        letterSpacing: 1.5,
    },
    items: {
        composes: 'flexColumn flexStart',
        marginBottom: theme.spacing(8),
        '& span': {
            marginLeft: 10,
        },
    },
    item: {
        composes: 'flexColumn justifyCenter center',
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: 90,
        [media.smDown]: {
            marginBottom: 0,
        },
    },
    icon: {
        composes: 'flexRow justifyCenter center',
        border: '1px solid #fff',
        height: 70,
        width: 70,
        marginBottom: theme.spacing(2),
    },
}));

const items = [
    {
        name: 'musique',
        icon: 'music',
    },
    {
        name: 'technologie',
        icon: 'technology',
    },
    {
        name: 'littérature',
        icon: 'literature',
    },
    {
        name: 'jeux vidéo',
        icon: 'game',
    },
    {
        name: 'science',
        icon: 'science',
    },
    {
        name: 'géopolitique',
        icon: 'geopolitic',
    },
    {
        name: 'chess',
        icon: 'chess',
    },
    {
        name: 'manga',
        icon: 'manga',
    },
    {
        name: 'histoire',
        icon: 'history',
    },
    {
        name: 'voiture',
        icon: 'car',
    },
    {
        name: 'comics',
        icon: 'comics',
    },
];

const Interests: FC = () => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });
    /** Components */
    const Div = isMobile ? 'div' : motion.div;

    /** Animation */
    const itemsAnimation = (inView) => (isMobile ? {} : animate(inView));
    const itemAnimation = isMobile ? {} : itemVariants;

    return (
        <div className={classes.root}>
            <BlockTitle
                title="Passions et loisirs"
                subtitle="Ce que j'aime"
                right
                startAnimation={inView}
                icon="passion"
            />
            <div className={classes.content} ref={ref}>
                <Div className={classes.center} {...itemsAnimation(inView)}>
                    {items.map((item, index) => (
                        <Div className={classes.item} key={index} {...itemAnimation}>
                            <div className={classes.icon}>
                                <img src={`/images/icons/${item.icon}.svg`} alt="" />
                            </div>
                            <h6 className={classes.label}>{item.name}</h6>
                        </Div>
                    ))}
                </Div>
            </div>
        </div>
    );
};

export default Interests;
