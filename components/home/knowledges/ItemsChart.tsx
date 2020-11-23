import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { media } from '../../../utils/constants';
import { KnowledgesMainChart } from './OveralCard';

import ProgressiveBar from './ProgressiveBar';

const useStyles = createUseStyles((theme: any) => ({
    items: {
        composes: 'flexColumn stretchSelf center font-ProximaNova-bold',
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
        [media.smDown]: {
            marginTop: 2,
        },
    },
    progressiveBar: {
        flex: 2,
        alignSelf: 'center',
    },
}));

type Props = { items: KnowledgesMainChart[]; itemClassName?: string; className?: string; startAnimation: boolean };
const ItemsChart: FC<Props> = ({ items, itemClassName, className, startAnimation }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.items, className)}>
            {items.map(
                (item: KnowledgesMainChart, index: number): ReactNode => (
                    <div className={clsx(classes.item, itemClassName)} key={item.label + '-' + index}>
                        <div className={classes.texts}>
                            <div className={classes.label}>{item.label}</div>
                            <div className={classes.value}>{item.value}%</div>
                        </div>
                        <ProgressiveBar
                            color={item.color}
                            percent={item.value}
                            className={classes.progressiveBar}
                            startAnimation={startAnimation}
                        />
                    </div>
                )
            )}
        </div>
    );
};

export default ItemsChart;
