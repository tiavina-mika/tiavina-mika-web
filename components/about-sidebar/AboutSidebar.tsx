import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { media } from '../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexRow stretchSelf',
        backgroundColor: theme.color.secondary,
        [media.lgUp]: {
            height: '100vh',
        },
        [media.lgDown]: {
            width: '100%',
        },
    },
    left: {
        composes: 'flexColumn',
    },
}));

const AboutSidebar: FC = () => {
    const classes = useStyles();

    return (
        <motion.div className={classes.root}>
            <div className={classes.left}>
                <h1>Tiavina Michael Ralainirina</h1>
                <h1>AboutSidebar</h1>
            </div>
        </motion.div>
    );
};

export default AboutSidebar;
