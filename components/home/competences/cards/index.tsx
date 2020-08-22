import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Card from './Card';

const useStyles = createUseStyles({
    cards: {
        composes: 'flexColumn',
    },
});

const cards = [0, 1];
const Cards: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.cards}>
            {cards.map((card, index) => {
                <Card key={index} />
            })}
        </div>
    );
};

export default Cards;
