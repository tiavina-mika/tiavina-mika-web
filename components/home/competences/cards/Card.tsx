import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    card: {
        boxSizing: 'border-box',
        boxShadow: '0 6px 10px rgba(0,0,0,.08)',
        borderRadius: 10,
        backgroundColor: '#fff',
        // padding: '60px 68px',
        height: 410,
        width: 543,
        marginBottom: theme.spacing(10),
    },
}));

const Card: FC = () => {
    const classes = useStyles();
    return <div className={classes.card}></div>;
};

export default Card;
