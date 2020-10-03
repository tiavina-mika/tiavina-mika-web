import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { media } from '../../../utils/constants';

import Text from '../../shared/Text';
import BlockTitle from './BlockTitle';
import { KnowledgeI, TechnoI } from './Knowledges';
import ProgressiveBar from './ProgressiveBar';

const useStyles = createUseStyles((theme: any) => ({
    knowledgeRoot: {
        composes: 'flexColumn center stretchSelf',
        fontFamily: 'font-ProximaNova-regular',
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(10),
        [media.lgDown]: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
    },
    knowledgeContent: {
        composes: 'flexRow justifyCenter alignCenter',
        alignSelf: 'center',
        [media.lgUp]: {
            width: 1200,
        },
        [media.lgDown]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    textContainer: {
        composes: 'flexColumn',
        flex: 1,
        [media.lgUp]: {
            marginTop: theme.spacing(12),
        },
    },
    blockReverse: {
        [media.lgUp]: {
            marginLeft: theme.spacing(40),
        },
    },
    cards: {
        composes: 'flexRow',
        [media.lgUp]: {
            flex: 1.2,
        },
        [media.smLg]: {
            marginTop: theme.spacing(6),
        },
        [media.smDown]: {
            marginTop: theme.spacing(2),
        },
    },
    card: {
        composes: 'flexColumn spaceBetween center',
        width: 98,
        padding: theme.spacing(3),
        marginRight: theme.spacing(1),
        height: 93,
        backgroundColor: '#fff',
        boxShadow: '0 8px 10px 0 rgba(0,0,0,.08)',
        borderRadius: 10,
        [media.lgUp]: {
            position: 'relative',
        },
        [media.lgDown]: {
            margin: theme.spacing(2),
        },
    },
    cardBody: {
        composes: 'flexColumn spaceBetween stretchSelf center',
    },
    label: {
        composes: 'font-ProximaNova-bold',
        fontSize: 16,
        marginBottom: theme.spacing(1),
    },
    descriptionContainer: {
        marginTop: theme.spacing(2),
        [media.lgUp]: {
            width: 400,
        },
        [media.lgDown]: {
            marginTop: theme.spacing(0),
        },
        [media.smLg]: {
            width: 600,
        },
    },
    description: {
        fontWeight: 300,
        lineHeight: '1.8em',
        fontSize: 17,
    },
    reverse: {
        [media.lgUp]: {
            order: 1,
        },
    },
}));

const getColor = (percent: number): string => {
    let color;
    if (percent > 50) color = '#13BB70';
    if (percent > 25 && percent <= 50) color = '#FEE895';
    if (percent <= 25) color = '#F4B63E';
    return color;
};

interface CardPositionI {
    top: number;
    left: number;
}

const getCardPosition = (index: number, cardPositions?: number[][]): CardPositionI => {
    const positions: number[][] = cardPositions || [
        [0, 100, 0],
        [1, 0, 95],
        [2, 100, 240],
        [3, 250, -80],
        [4, 210, 120],
    ];
    let top: number;
    let left: number;
    positions.map((item: number[]) => {
        if (index !== item[0]) return false;
        top = item[1];
        left = item[2];
    });
    return { top, left };
};

type Props = { data: KnowledgeI; reverse: boolean };
const Knowledge: FC<Props> = ({ data, reverse }) => {
    const classes = useStyles();
    return (
        <div className={classes.knowledgeRoot}>
            <div className={classes.knowledgeContent}>
                <div
                    className={clsx(
                        classes.textContainer,
                        reverse ? classes.reverse : null,
                        reverse ? classes.blockReverse : null
                    )}>
                    <BlockTitle text={data.title} />
                    <div className={classes.descriptionContainer}>
                        <Text text={data.description} tagName="p" className={classes.description} />
                    </div>
                </div>
                <div className={classes.cards}>
                    {data.technos.map(
                        (d: TechnoI, index: number): ReactNode => (
                            <div
                                className={classes.card}
                                key={d.name}
                                style={{
                                    top: getCardPosition(index, data.cardPositions).top,
                                    left: getCardPosition(index, data.cardPositions).left,
                                }}>
                                <img alt="react" src={`/images/technos/${d.image}.png`} />
                                <div className={classes.cardBody}>
                                    <Text text={d.name} className={classes.label} />
                                    <ProgressiveBar color={getColor(d.value)} percent={d.value} height={8} />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
