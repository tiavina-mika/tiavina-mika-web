import React from 'react';
import { createUseStyles } from 'react-jss';
import { useViewportScroll, motion } from 'framer-motion';

const useStyles = createUseStyles({
    block2: {
        height: '100vh',
        composes: 'flexRow stretchSelf',
        backgroundColor: '#fff',
        '& h1': {
            color: '#000',
        },
    },
    main: {
        composes: 'flexColumn',
    },
});

const Domain = () => {
    const classes = useStyles();
    const { scrollYProgress } = useViewportScroll();

    return (
        <motion.div className={classes.block2} style={{ opacity: scrollYProgress }}>
            <div className={classes.main}>
                <h1>Tiavina Michael Ralainirina</h1>
                <h1>Domain</h1>
            </div>
        </motion.div>
    );
};

export default Domain;
