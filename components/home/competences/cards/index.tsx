import React, { FC, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import Card from './Card';
import clsx from 'clsx';

const y = 40;
const useStyles = createUseStyles({
    cardsRoot: {
        composes: 'flexRow justifyStart flex1 blue',
    },
    cards: {
        composes: 'flexColumn justifyCenter alignCenter',
        position: 'absolute',
    },
    firstLogo: {
        transform: 'translateY(-10vh)',
    },
    logo: {
        transform: `translateY(${y}vh)`,
        opacity: 0,
    },
});

interface Property {
    startValue: string | number;
    endValue: string | number;
    unit?: string;
    property: string;
}
interface Sequence {
    start: string | number;
    startOffset: string | number;
    duration?: string;
    properties: Property[];
}

const getOffsets = (index: number): any => {
    const offsets: number[][] = [
        /** index, startOffset animation start */
        [0, 0],
        [1, 80],
        [2, 160],
        [3, 240],
        [4, 320],
        [5, 400],
        [6, 480],
    ];
    let offsetAnimationEnd: number;
    offsets.map((offset: number[]): void => {
        if (index === offset[0]) {
            offsetAnimationEnd = offset[1];
        }
    });
    return offsetAnimationEnd;
};

const cards = [
    {
        id: '1',
        color: 'yellow',
    },
    {
        id: '2',
        color: 'gray',
    },
    {
        id: '3',
        color: 'purple',
    },
    {
        id: '4',
        color: 'blue',
    },
    {
        id: '5',
        color: '#000',
    },
    {
        id: '6',
        color: 'pink',
    },
];
type Props = { triggerClassName: string };
const Cards: FC<Props> = ({ triggerClassName }) => {
    const classes = useStyles();

    const setParallaxData = (index: number): any => {
        const offsetAnimationEnd = getOffsets(index);

        const properties = [];
        if (index !== 0) {
            properties.push({
                startValue: y,
                endValue: -10,
                unit: 'vh',
                property: 'translateY',
            });
        } else {
            properties.push({
                startValue: -10,
                endValue: -10,
                unit: 'vh',
                property: 'translateY',
            });
        }
        const enterAnimationPropreties: Property[] = [
            {
                startValue: 0,
                endValue: 1,
                property: 'opacity',
            },
        ];
        const enterAnimationSequence: Sequence = {
            start: `.${triggerClassName}`,
            startOffset: `${offsetAnimationEnd - 10}vh`,
            duration: '1vh',
            properties: enterAnimationPropreties,
        };
        const exitAnimationSequence: Sequence = {
            start: `.${triggerClassName}`,
            startOffset: `${offsetAnimationEnd}vh`,
            duration: '50vh',
            properties,
        };

        return useMemo(() => [enterAnimationSequence, exitAnimationSequence], []);
    };

    return (
        <div className={classes.cardsRoot}>
            <div className={clsx(classes.cards, triggerClassName)}>
                {cards.map((card, i) => (
                    <Card
                        key={i}
                        className={i === 0 ? classes.firstLogo : classes.logo}
                        parallaxData={setParallaxData(i)}
                        bgColor={card.color}
                        data={card}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
