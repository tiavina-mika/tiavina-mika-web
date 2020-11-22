import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { media } from '../../../utils/constants';

import BlockTitle from './BlockTitle';
import ItemsChart from './ItemsChart';

const useStyles = createUseStyles((theme: any) => ({
    knowledgeProgressBarRoot: {
        composes: 'flexColumn center flex1',
        fontFamily: 'font-ProximaNova-regular',
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        [media.lgDown]: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(5),
        },
        [media.mdDown]: {
            alignSelf: 'stretch',
        },
    },
    knowledgeProgressBarContent: {
        composes: 'flexColumn center stretchSelf',
        width: 400,
        alignSelf: 'center',
        [media.smDown]: {
            alignSelf: 'stretch',
            alignItems: 'flex-start',
        },
    },
    cards: {
        marginTop: theme.spacing(4),
        margin: -theme.spacing(1.8),
        [media.smDown]: {
            alignItems: 'flex-start',
            justifyCenter: 'flex-start',
            margin: [theme.spacing(1), 0],
            marginTop: theme.spacing(1.3),
            padding: 0,
        },
    },
    card: {
        width: 300,
        padding: [theme.spacing(2.5), theme.spacing(5)],
        margin: theme.spacing(1.8),
        backgroundColor: '#fff',
        boxShadow: '0 8px 10px 0 rgba(0,0,0,.08)',
        borderRadius: 32,
        fontSize: 18,
        [media.smDown]: {
            padding: [theme.spacing(1.5), theme.spacing(3)],
            margin: [theme.spacing(1), 0],
            fontSize: 14,
        },
    },
    title: {
        composes: 'justifyCenter',
        textAlign: 'center',
        fontSize: 22,
        [media.smDown]: {
            justifyContent: 'flex-start',
            fontSize: 16,
        },
    },
}));

type Props = { data: any };

const KnowledgeProgressBar: FC<Props> = ({ data }) => {
    const classes = useStyles();
    return (
        <div className={classes.knowledgeProgressBarRoot}>
            <div className={classes.knowledgeProgressBarContent}>
                <BlockTitle text={data.title} className={classes.title} />
                <ItemsChart
                    items={data.items.sort((a, b) => b.value - a.value)}
                    className={classes.cards}
                    itemClassName={classes.card}
                />
            </div>
        </div>
    );
};

export default KnowledgeProgressBar;
