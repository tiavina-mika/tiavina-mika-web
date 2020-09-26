import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexRow stretchSelf justifyCenter',
    },
    divider: {
        backgroundColor: theme.color.secondary,
        opacity: 0.2,
        width: 100,
        height: 1.5,
        borderRadius: 2,
    },
}));

type Props = { className?: string };
const Divider: FC<Props> = ({ className }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={clsx(classes.divider, className)} />
        </div>
    );
};

export default Divider;
