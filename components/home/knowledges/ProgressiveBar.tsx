import clsx from 'clsx';
import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    progressiveBar: {
        composes: 'flexRow',
        backgroundColor: '#F4F9FE',
        borderRadius: 15,
        overflow: 'hidden',
        width: ({ width }) => width || '100%',
        height: 13,
    },
    color: {
        backgroundColor: ({ color }) => color,
        width: ({ percent }) => percent + '%',
        borderRadius: 15,
        height: '100%',
    },
});

type Props = { color: string; percent: number; width?: number; className?: string };
const ProgressiveBar: FC<Props> = ({ color, percent, width, className }) => {
    const classes = useStyles({ color, percent, width });
    return (
        <div className={clsx(classes.progressiveBar, className)}>
            <div className={classes.color} />
        </div>
    );
};

export default ProgressiveBar;
