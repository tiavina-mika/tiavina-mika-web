import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import Knowledge from './Knowledge';
import OveralCard from './OveralCard';

const useStyles = createUseStyles((theme: any) => ({
    knowledgesRoot: {
        composes: 'flexColumn center stretchSelf',
        fontFamily: 'font-ProximaNova-regular',
        paddingBottom: theme.spacing(15),
    },
    progressiveContainer: {
        composes: 'flexColumn stretchSelf center',
        width: '100%',
        height: 200,
    },
}));

export interface TechnoI {
    name: string;
    image: string;
    value: number;
}
export interface KnowledgeI {
    title: string;
    technos: TechnoI[];
}
const data: KnowledgeI[] = [
    {
        title: 'Frontend',
        technos: [
            {
                name: 'React',
                image: 'react',
                value: 98,
            },
            {
                name: 'HTML',
                image: 'html',
                value: 100,
            },
            {
                name: 'CSS',
                image: 'css',
                value: 100,
            },
            {
                name: 'JQuery',
                image: 'jquery',
                value: 98,
            },
            {
                name: 'Angular',
                image: 'angular',
                value: 50,
            },
        ],
    },
];

const Knowledges: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.knowledgesRoot} id="knowledges">
            <OveralCard />
            {data.map((d, i) => (
                <Knowledge data={d} key={i} />
            ))}
        </div>
    );
};

export default Knowledges;
