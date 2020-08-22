import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Card from './Card';

const useStyles = createUseStyles({
    cards: {
        composes: 'flexColumn',
    },
});

const Cards: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.cards}>
            <Card />
            <Card />
        </div>
    );
};

export default Cards;
