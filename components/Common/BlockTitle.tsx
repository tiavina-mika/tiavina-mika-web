import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { useViewportScroll, motion } from 'framer-motion';
import clsx from 'clsx';

import { media } from '../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexRow center stretchSelf flex1',
        textTransform: 'uppercase',
        fontFamily: 'Prequelrough, sans-serif',
        width: '100%',
        [media.lgDown]: {
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    },
    main: {
        [media.lgUp]: {
            paddingLeft: 15,
        },
        [media.lgDown]: {
            order: -1
        }
    },
    title: {
        fontSize: 32,
        letterSpacing: ' 0.16em',
        color: '#fff',
        marginBottom: 10,
    },
    dotted: {
        // flexBasis: '40%',
        borderTop: '1px dotted white',
        textIndent: -9999,
        [media.lgDown]: {
            marginTop: theme.spacing(3),
            width: 200
        },
        [media.lgUp]: {
            marginTop: theme.spacing(3),
        width: 300,
    },
        
    },
    subtitle: {
        fontSize: 22,
        letterSpacing: '0.16em',
        color: theme.color.subtitle,
    },
}));

type Props = { className?: string; title: string; subtitle?: string };
const BlockTitle: FC<Props> = ({ className, title, subtitle }) => {
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();

    return (
        <motion.div className={clsx(classes.root, className)}>
            <div className={classes.dotted}></div>

            <div className={classes.main}>
                <h3 className={classes.title}>{title}</h3>
                {subtitle && <h6 className={classes.subtitle}>{subtitle}</h6>}
            </div>
        </motion.div>
    );
};

export default BlockTitle;
