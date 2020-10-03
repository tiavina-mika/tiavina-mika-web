import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { horizontalPaddingMobile, media } from '../../../utils/constants';
import { isReverse } from '../../../utils/utils';

import Knowledge from './Knowledge';
import OveralCard from './OveralCard';

const useStyles = createUseStyles((theme: any) => ({
    knowledgesRoot: {
        composes: 'flexColumn center stretchSelf',
        fontFamily: 'font-ProximaNova-regular',
        paddingBottom: theme.spacing(15),
        [media.lgDown]: {
            paddingLeft: theme.spacing(horizontalPaddingMobile),
            paddingRight: theme.spacing(horizontalPaddingMobile),
        },
    },
    overall: {
        composes: 'flexColumn center stretchSelf',
        [media.lgDown]: {
            marginBottom: theme.spacing(4),
        },
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
    description: string;
    cardPositions?: number[][];
    technos: TechnoI[];
}
const data: KnowledgeI[] = [
    {
        title: 'Frontend',
        description: `Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining 
        essentially unchanged.`,
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
    {
        title: 'Backend',
        description: `Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries.`,
        cardPositions: [
            [0, 100, 0],
            [1, 0, 95],
            [2, 150, 230],
            [3, 100, 180],
            [4, 210, 120],
        ],
        technos: [
            {
                name: 'Node',
                image: 'node',
                value: 95,
            },
            {
                name: 'Symfony',
                image: 'symfony',
                value: 95,
            },
            {
                name: 'Flask',
                image: 'flask',
                value: 80,
            },
            {
                name: 'Rails',
                image: 'rails',
                value: 45,
            },
        ],
    },
];

const Knowledges: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.knowledgesRoot} id="knowledges">
            <div className={classes.overall}>
                <OveralCard />
            </div>
            {data.map(
                (d: KnowledgeI, i: number): ReactNode => (
                    <Knowledge data={d} key={i} reverse={isReverse(i)} />
                )
            )}
        </div>
    );
};

export default Knowledges;
