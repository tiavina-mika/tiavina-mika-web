import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { horizontalPaddingMobile, media } from '../../../utils/constants';
import { isReverse } from '../../../utils/utils';

import Knowledge from './KnowledgeDescription';
import KnowledgeProgressBar from './KnowledgeProgressBar';
import OveralCard, { KnowledgesMainChart } from './OveralCard';

const useStyles = createUseStyles((theme: any) => ({
    knowledgesRoot: {
        composes: 'flexColumn alignCenter justifyCenter flex1',
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
    knowledgesProgressBar: {
        composes: 'flexRow stretchSelf flex1',
        [media.mdDown]: {
            flexDirection: 'column',
        },
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
const dataDescription: KnowledgeI[] = [
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

interface KnowledgesProgressiveChartI {
    title: string;
    items: KnowledgesMainChart[];
}
const dataProgressBar: KnowledgesProgressiveChartI[] = [
    {
        title: 'Language de programmation',
        items: [
            {
                label: 'Javascript',
                value: 95,
                color: '#956FFF',
            },
            {
                label: 'TypeScript',
                value: 95,
                color: '#FEE895',
            },
            {
                label: 'Python',
                value: 80,
                color: '#FD7A8C',
            },
            {
                label: 'PHP',
                value: 95,
                color: '#95BF46',
            },
            {
                label: 'Ruby',
                value: 40,
                color: '#00D8FF',
            },
        ],
    },
    {
        title: 'Base de données',
        items: [
            {
                label: 'MySQL',
                value: 96,
                color: '#956FFF',
            },
            {
                label: 'MongoDB',
                value: 98,
                color: '#FEE895',
            },
            {
                label: 'ElasticSearch',
                value: 75,
                color: '#FD7A8C',
            },
            {
                label: 'PostgreSQL',
                value: 88,
                color: '#95BF46',
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
            {dataDescription.map(
                (d: KnowledgeI, i: number): ReactNode => (
                    <Knowledge data={d} key={i} reverse={isReverse(i)} />
                )
            )}
            <div className={classes.knowledgesProgressBar}>
                {dataProgressBar.map((d, i) => (
                    <KnowledgeProgressBar data={d} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Knowledges;
