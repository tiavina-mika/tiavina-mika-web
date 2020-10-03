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
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
    },
    knowledgeProgressBarContent: {
        composes: 'flexColumn center stretchSelf',
        alignSelf: 'center',
    },
    cards: {
        marginTop: theme.spacing(4),
        margin: -theme.spacing(1.8),
    },
    card: {
        width: 300,
        padding: [theme.spacing(2.5), theme.spacing(5)],
        margin: theme.spacing(1.8),
        backgroundColor: '#fff',
        boxShadow: '0 8px 10px 0 rgba(0,0,0,.08)',
        borderRadius: 32,
        fontSize: 18,
    },
    title: {
        composes: 'justifyCenter',
        textAlign: 'center',
        fontSize: 22,
        [media.mdDown]: {
            justifyContent: 'flex-start',
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
