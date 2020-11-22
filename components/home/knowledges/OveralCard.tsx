import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { createUseStyles } from 'react-jss';

import { media } from '../../../utils/constants';
import ItemsChart from './ItemsChart';
import PieChartSvg from './PieChartSvg';

const useStyles = createUseStyles((theme: any) => ({
    overallCard: {
        composes: 'flexColumn justifyCenter center font-ProximaNova-bold',
        paddingBottom: theme.spacing(4),
        width: 420,
        boxShadow: '1px 15px 10px 0 #C9D3DD',
        borderRadius: 20,
        [media.xsDown]: {
            width: '100%',
        },
    },
    header: {
        composes: 'flexColumn justifyCenter stretchSelf',
        backgroundColor: '#F1FDFF',
        padding: [theme.spacing(4), theme.spacing(4)],
    },
    pieChart: {
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5),
    },
}));

export interface KnowledgesMainChart {
    label: string;
    value: number;
    color: string;
}
const itemsChart: KnowledgesMainChart[] = [
    {
        label: 'Frontend',
        value: 95,
        color: '#956FFF',
    },
    {
        label: 'Backend',
        value: 90,
        color: '#FEE895',
    },
    {
        label: 'Database',
        value: 90,
        color: '#FD7A8C',
    },
    {
        label: 'Design',
        value: 75,
        color: '#95BF46',
    },
    {
        label: 'Ops',
        value: 50,
        color: '#00D8FF',
    },
];

const OveralCard: FC = () => {
    const classes = useStyles();
    const total = itemsChart.reduce((acc, curr) => {
        return acc + curr.value;
    }, 0);
    const { ref, inView } = useInView({
        threshold: 0,
    });
    return (
        <div className={classes.overallCard} ref={ref}>
            <div className={classes.header}>Note Générale</div>
            <div className={classes.pieChart}>
                <PieChartSvg total={total / itemsChart.length} startAnimation={inView} />
            </div>
            <ItemsChart items={itemsChart} startAnimation={inView} />
        </div>
    );
};

export default OveralCard;
