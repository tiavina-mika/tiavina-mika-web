import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { media } from '../../../utils/constants';

import Text from '../../shared/Text';
import Title from '../../shared/Title';
import { KnowledgeI, TechnoI } from './Knowledges';
import ProgressiveBar from './ProgressiveBar';

const useStyles = createUseStyles((theme: any) => ({
    knowledgeRoot: {
        composes: 'flexColumn center stretchSelf',
        fontFamily: 'font-ProximaNova-regular',
        marginTop: theme.spacing(20),
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
    },
    cards: {
        composes: 'flexRow',
        [media.lgUp]: {
            flex: 1.2,
        },
        [media.smLg]: {
            marginTop: theme.spacing(8),
        },
        [media.smDown]: {
            marginTop: theme.spacing(5),
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
    title: {
        fontSize: 33,
    },
    descriptionContainer: {
        [media.lgUp]: {
            width: 400,
        },
        [media.smLg]: {
            width: 600,
        },
        marginTop: theme.spacing(2),
    },
    description: {
        fontWeight: 300,
        lineHeight: '1.8em',
        fontSize: 17,
    },
}));

const getColor = (percent: number): string => {
    let color;
    if (percent > 50) color = '#3ee85d';
    if (percent > 25 && percent <= 50) color = '#FEE895';
    if (percent <= 25) color = 'red';
    return color;
};

interface CardPositionI {
    top: number;
    left: number;
}
const getCardPosition = (index: number): CardPositionI => {
    let top;
    let left;
    switch (index) {
        case (index = 0):
            top = 100;
            left = 0;
            break;
        case (index = 1):
            left = 95;
            break;
        case (index = 2):
            top = 100;
            left = 275;
            break;
        case (index = 3):
            top = 250;
            left = -80;
            break;
        default:
            top = 210;
            left = 120;
    }
    return { top, left };
};

type Props = { data: KnowledgeI };
const Knowledge: FC<Props> = ({ data }) => {
    const classes = useStyles();
    return (
        <div className={classes.knowledgeRoot}>
            <div className={classes.knowledgeContent}>
                <div className={classes.textContainer}>
                    <Title text={data.title} level={2} className={classes.title} />
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
                                style={{ top: getCardPosition(index).top, left: getCardPosition(index).left }}>
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
