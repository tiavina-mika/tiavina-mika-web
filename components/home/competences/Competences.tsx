import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import BlockTitle from '../../Common/BlockTitle';
import { animate, itemVariants } from '../../../animations/cards';
import { onEnterAnimation } from '../../../animations/onEnter';
import { media } from '../../../utils/constants';
import { useInView } from 'react-intersection-observer';

const data = [
    {
        title: 'Performance',
        description:
            "For as long as I can remember, I've been obsessed with learning about the latest and greatest; no language is too different, pattern too difficult, or process too challenging.",
    },
    {
        title: 'Performance',
        description:
            "For as long as I can remember, I've been obsessed with learning about the latest and greatest; no language is too different, pattern too difficult, or process too challenging.",
    },
    {
        title: 'Performance',
        description:
            "For as long as I can remember, I've been obsessed with learning about the latest and greatest; no language is too different, pattern too difficult, or process too challenging.",
    },
    {
        title: 'Performance',
        description:
            "For as long as I can remember, I've been obsessed with learning about the latest and greatest; no language is too different, pattern too difficult, or process too challenging.",
    },
    {
        title: 'Performance',
        description:
            "For as long as I can remember, I've been obsessed with learning about the latest and greatest; no language is too different, pattern too difficult, or process too challenging.",
    },
    {
        title: 'Performance',
        description:
            "For as long as I can remember, I've been obsessed with learning about the latest and greatest; no language is too different, pattern too difficult, or process too challenging.",
    },
    {
        title: 'Performance',
        description:
            "For as long as I can remember, I've been obsessed with learning about the latest and greatest; no language is too different, pattern too difficult, or process too challenging.",
    },
];
const useStyles = createUseStyles((theme: any) => ({
    fullColumn: {
        composes: 'flexColumn stretchSelf',
    },
    root: {
        composes: '$fullColumn alignCenter',
    },
    titleBlock: {
        composes: '$fullColumn',
    },
    content: {
        composes: '$fullColumn center',
    },
    center: {
        composes: 'flexRow justifyCenter',
        [media.lgUp]: {
            width: 1500,
            marginTop: theme.spacing(4),
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8),
        },
    },
    items: {
        composes: 'flexRow stretchSelf',
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

const Competences: FC = () => {
    const classes = useStyles();
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    return (
        <div className={classes.root}>
            <motion.div className={classes.titleBlock} {...onEnterAnimation(inView)}>
                <BlockTitle title="Compétences clées" subtitle="Ce que je maîtrise" />
            </motion.div>
            <div className={classes.content} ref={ref}>
                <div className={classes.center}>
                    <motion.div className={classes.items} {...animate(inView)}>
                        {data.map((item, index) => (
                            <motion.div className={classes.item} key={index} {...itemVariants}>
                                <h6 className={classes.title}>
                                    <img src="/images/icons/left-circle-active.svg" alt="circle" />
                                    <span>{item.title}</span>
                                </h6>
                                <span className={classes.description}>{item.description}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Competences;
