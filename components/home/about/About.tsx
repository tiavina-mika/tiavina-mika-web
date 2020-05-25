import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import BlockTitle from '../../Common/BlockTitle';
import { onEnterAnimation } from '../../../animations/onEnter';
import { media } from '../../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    fullColumn: {
        composes: 'flexColumn stretchSelf',
    },
    root: {
        composes: '$fullColumn',
    },
    titleBlock: {
        composes: '$fullColumn',
    },
    content: {
        composes: '$fullColumn',
    },
    items: {
        composes: 'flexRow stretchSelf',
        marginTop: theme.spacing(7),
        [media.lgUp]: {
            marginTop: theme.spacing(12),
        },
    },
    item: {
        color: '#fff',
        marginBottom: theme.spacing(8),
        [media.smUp]: {
            width: 300,
        },
        [media.lgUp]: {
            margin: theme.spacing(4),
        },
    },
    title: {
        composes: 'flexRow center',
        fontFamily: 'Tungsten-Medium',
        color: '#52575f',
        fontSize: 22,
        textTransform: 'uppercase',
        marginBottom: theme.spacing(3),
        '& span': {
            marginLeft: -15,
        },
    },
    description: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        lineHeight: 1.6,
        letterSpacing: '0.68px',
        color: '#fff',
    },
}));

const About: FC = () => {
    const classes = useStyles();

    // if (!start) return null;
    return (
        <motion.div className={classes.root}>
            <motion.div className={classes.titleBlock} {...onEnterAnimation}>
                <BlockTitle title="A propos de moi" subtitle="Qui suis-je" />
            </motion.div>
            <div className={classes.content}>
                <h1>About Me</h1>
            </div>
        </motion.div>
    );
};

export default About;
