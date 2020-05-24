import React, { FC, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useViewportScroll, motion } from 'framer-motion';

import BlockTitle from '../../Common/BlockTitle';
import { animation, itemVariants } from '../../../animations/cards';
import { onEnterAnimation } from '../../../animations/onEnter';
import { media } from '../../../utils/constants';

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

const Competences: FC = () => {
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const [start, setStart] = useState(false);

    useEffect(
        () =>
            scrollYProgress.onChange((latest) => {
                if (latest > 0.3) {
                    setStart(true);
                    return;
                }
                setStart(false);
            }),
        []
    );
    if (!start) return null;
    return (
        <motion.div className={classes.root}>
            <motion.div className={classes.titleBlock} {...onEnterAnimation}>
                <BlockTitle title="Compétences clées" subtitle="Ce que je maîtrise" />
            </motion.div>
            <div className={classes.content}>
                <motion.div className={classes.items} {...animation}>
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
        </motion.div>
    );
};

export default Competences;
