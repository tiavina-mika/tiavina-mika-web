import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { KnowledgesMainChart } from './OveralCard';

import ProgressiveBar from './ProgressiveBar';

const useStyles = createUseStyles((theme: any) => ({
    items: {
        composes: 'flexColumn stretchSelf center',
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        fontSize: 14,
    },
    item: {
        composes: 'flexRow center stretchSelf',
        marginBottom: theme.spacing(2),
    },
    texts: {
        composes: 'flexColumn stretchSelf justifyCenter',
        flex: 1,
    },
    label: {},
    value: {
        color: '#8693B5',
        marginTop: theme.spacing(0.7),
    },
    progressiveBar: {
        flex: 2,
    },
}));

type Props = { items: KnowledgesMainChart[] };
const ItemsChart: FC<Props> = ({ items }) => {
    const classes = useStyles();
    return (
        <div className={classes.items}>
            {items.map(
                (item: KnowledgesMainChart, index: number): ReactNode => (
                    <div className={classes.item} key={item.label + '-' + index}>
                        <div className={classes.texts}>
                            <div className={classes.label}>{item.label}</div>
                            <div className={classes.value}>{item.value}%</div>
                        </div>
                        <ProgressiveBar color={item.color} percent={item.value} className={classes.progressiveBar} />
                        {/* <ProgressiveBar color="#FD7A8C" percent={10} width={167} /> */}
                    </div>
                )
            )}
        </div>
    );
};

export default ItemsChart;
