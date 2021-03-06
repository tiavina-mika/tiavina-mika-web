import clsx from 'clsx';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React, { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { createUseStyles } from 'react-jss';

import { useResponsive } from '../../../hooks/useResponsive';
import { horizontalPaddingMobile, media, sm } from '../../../utils/constants';
import { isReverse } from '../../../utils/utils';
import BackgroundPlx from '../../shared/BackgroundPlx';
import Layout from '../../shared/Layout';
import Knowledge from './Knowledge';
import KnowledgeProgressBar from './KnowledgeProgressBar';
import OveralCard, { KnowledgesMainChart } from './OveralCard';

const useStyles = createUseStyles((theme: any) => ({
    knowledgesRoot: {
        composes: 'flexColumn alignCenter justifyCenter flex1',
        position: 'relative',
        fontFamily: 'font-ProximaNova-regular',
        paddingBottom: theme.spacing(15),
        [media.lgDown]: {
            paddingLeft: theme.spacing(horizontalPaddingMobile),
            paddingRight: theme.spacing(horizontalPaddingMobile),
        },
    },
    plx: {
        composes: 'flexColumn flex1 stretchSelf',
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
        marginBottom: theme.spacing(16),
        composes: 'flexRow stretchSelf justifyCenter flex1',
        [media.mdLg]: {
            marginTop: theme.spacing(6),
        },
    },
    knowledgesProgressBarContent: {
        composes: 'flexRow stretchSelf flex1',
        [media.lgUp]: {
            width: 1300,
        },
        [media.mdLg]: {
            width: 1000,
        },
        [media.mdDown]: {
            flexDirection: 'column',
        },
    },
    sliderContainer: {
        cursor: 'grab',
        position: 'relative',
        width: 1200,
        [media.lgXl]: {
            width: '90vw',
        },
        [media.mdLg]: {
            width: 800,
        },
        [media.mdDown]: {
            width: '85vw',
        },
    },
    sliderTransition: {
        transition: '.6s transform ease-out',
    },
    slider: {
        overflow: 'hidden',
        padding: 0,
        '& ul': {
            display: 'flex',
            padding: 0,
            margin: 0,
        },
        '& li': {
            listStyle: 'none',
            padding: '0 !important',
            width: [400, '!important'],
        },
    },
    sildeButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        width: 62,
        height: 62,
        backgroundColor: '#000',
        boxShadow: '0 1px 5px 1px #C9D3DD',
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        fontSize: 22,
        '&:disabled': {
            opacity: 0.2,
        },
        '&:focus': {
            outline: 'none',
        },
    },
    buttonBack: {
        left: -60,
        [media.xlDown]: {
            left: -45,
        },
    },
    buttonNext: {
        right: -60,
        [media.xlDown]: {
            right: -45,
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
    {
        title: 'Design',
        items: [
            {
                label: 'Photoshop',
                value: 96,
                color: '#956FFF',
            },
            {
                label: 'Illustrator',
                value: 96,
                color: '#FEE895',
            },
            {
                label: 'InVision',
                value: 80,
                color: '#FD7A8C',
            },
            {
                label: 'Zepplin',
                value: 55,
                color: '#95BF46',
            },
        ],
    },
    {
        title: 'Webservice',
        items: [
            {
                label: 'REST',
                value: 96,
                color: '#956FFF',
            },
            {
                label: 'GraphQL',
                value: 96,
                color: '#FEE895',
            },
            {
                label: 'Parse Server',
                value: 92,
                color: '#FD7A8C',
            },
            {
                label: 'Firebase',
                value: 55,
                color: '#95BF46',
            },
        ],
    },
    {
        title: 'Gestion de code source',
        items: [
            {
                label: 'GitHub',
                value: 99,
                color: '#956FFF',
            },
            {
                label: 'GitLab',
                value: 90,
                color: '#FEE895',
            },
            {
                label: 'BitBucket',
                value: 95,
                color: '#FD7A8C',
            },
        ],
    },
    {
        title: 'Gestion de projet',
        items: [
            {
                label: 'Trello',
                value: 95,
                color: '#956FFF',
            },
            {
                label: 'Asana',
                value: 80,
                color: '#FEE895',
            },
            {
                label: 'Jira',
                value: 90,
                color: '#FD7A8C',
            },
        ],
    },
];

const Knowledges: FC = () => {
    const classes = useStyles();
    const isTablet = useResponsive(sm);

    const { ref, inView } = useInView({
        threshold: 0,
    });
    const carousel: ReactNode = (
        <CarouselProvider
            visibleSlides={3}
            totalSlides={6}
            step={1}
            naturalSlideWidth={500}
            naturalSlideHeight={500}
            isPlaying
            interval={10000}>
            <div className={classes.sliderContainer} ref={ref}>
                <Slider className={classes.slider} classNameAnimation={classes.sliderTransition}>
                    {dataProgressBar.map(
                        (d: KnowledgesProgressiveChartI, i: number): ReactNode => (
                            <Slide index={i} key={i}>
                                <KnowledgeProgressBar data={d} key={i} startAnimation={inView} />
                            </Slide>
                        )
                    )}
                </Slider>
                <ButtonBack className={clsx(classes.buttonBack, classes.sildeButton)}>{'<'}</ButtonBack>
                <ButtonNext className={clsx(classes.buttonNext, classes.sildeButton)}>{'>'}</ButtonNext>
            </div>
        </CarouselProvider>
    );

    const mobile: ReactNode = (
        <div className={classes.knowledgesProgressBarContent} ref={ref}>
            {dataProgressBar.map(
                (d: KnowledgesProgressiveChartI, i: number): ReactNode => (
                    <KnowledgeProgressBar data={d} key={i} startAnimation={inView} />
                )
            )}
        </div>
    );

    return (
        <Layout className={classes.knowledgesRoot} id="knowledges">
            <BackgroundPlx id="knowledges">
                <div className={classes.overall}>
                    <OveralCard />
                </div>
                {dataDescription.map(
                    (d: KnowledgeI, i: number): ReactNode => (
                        <Knowledge data={d} key={i} reverse={isReverse(i)} />
                    )
                )}
                <div className={classes.knowledgesProgressBar}>{isTablet ? mobile : carousel}</div>
            </BackgroundPlx>
        </Layout>
    );
};

export default Knowledges;
