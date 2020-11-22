import React, { FC, ReactNode, useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { useViewportScroll, motion } from 'framer-motion';

import { media } from '../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    column: {
        composes: 'flexColumn stretchSelf',
    },
    root: {
        composes: '$column',
    },
    blockTitle: {
        composes: '$column',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    title: {
        margin: 0,
        marginBottom: theme.spacing(5),
        color: theme.colors.secondary,
        fontFamily: 'Montserrat Regular, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: -5,
        fontWeight: 700,
        [media.lgUp]: {
            fontSize: 60,
        },
        [media.smLg]: {
            fontSize: 40,
        },
        [media.smDown]: {
            fontSize: 20,
        },
    },
    line: {
        backgroundColor: theme.colors.primary,
        height: 10,
    },
}));

type Props = { renderChildren: (value?: any) => ReactNode; title: string; className?: string };

const Block: FC<Props> = ({ renderChildren, title, className }) => {
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();
    const [value, setValue] = useState(0);

    useEffect(
        () =>
            scrollYProgress.onChange((latest) => {
                setValue(latest);
            }),
        []
    );
    return (
        <motion.div className={clsx(classes.root, className)}>
            <div className={classes.blockTitle}>
                <h3 className={classes.title}>{title}</h3>
                {/* parallax: grow the green line when scrolling */}
                <motion.div className={classes.line} style={{ width: value > 0 ? 100 * value : 100 }}></motion.div>
            </div>

            {renderChildren(value)}
        </motion.div>
    );
};

export default Block;
