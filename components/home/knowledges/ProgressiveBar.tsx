import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    progressiveBar: {
        composes: 'flexRow',
        backgroundColor: '#F4F9FE',
        borderRadius: 15,
        overflow: 'hidden',
        width: ({ width }) => width || '100%',
        height: ({ height }) => height || 13,
    },
    color: {
        backgroundColor: ({ color }) => color,
        // width: ({ percent }) => percent + '%',
        borderRadius: 15,
        height: '100%',
    },
});

type Props = {
    color: string;
    percent: number;
    width?: number;
    className?: string;
    height?: number;
    startAnimation?: boolean;
};
const ProgressiveBar: FC<Props> = ({ color, percent, width, className, height, startAnimation }) => {
    const classes = useStyles({ color, percent, width, height });
    return (
        <div className={clsx(classes.progressiveBar, className)}>
            {/* <div className={classes.color} /> */}
            <motion.div
                className={classes.color}
                initial={{ width: 0 }}
                animate={startAnimation ? { width: percent + '%' } : {}}
                transition={{
                    duration: 2,
                    ease: 'easeOut',
                }}
            />
        </div>
    );
};

export default ProgressiveBar;
