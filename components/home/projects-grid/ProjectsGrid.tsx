import React, { ReactNode, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useWindowSize } from 'react-use';
import { md, media, projectCardWidth } from '../../../utils/constants';

import Layout from '../../shared/Layout';
import Text from '../../shared/Text';
import Title from '../../shared/Title';
import ProjectGrid, { RESPONSIVE_CARD_WIDTH } from './ProjectGrid';

const useStyles = createUseStyles((theme: any) => ({
    projectsRoot: {
        composes: 'flexRow',
    },
    projectsContent: {
        composes: 'flexRow flex1',
        [media.smDown]: {
            flexDirection: 'column',
        },
    },
    left: {
        composes: 'flexColumn flex1 justifyCenter flexEnd',
        [media.smMd]: {
            marginRight: theme.spacing(1.5),
        },
        [media.mdUp]: {
            marginRight: theme.spacing(3),
        },
        [media.smDown]: {
            alignSelf: 'stretch',
        },
    },
    right: {
        composes: 'flexColumn flex1 justifyCenter flexStart',
        [media.smMd]: {
            marginLeft: theme.spacing(1.5),
        },
        [media.mdUp]: {
            marginLeft: theme.spacing(3),
        },
        [media.smDown]: {
            alignSelf: 'stretch',
        },
    },
    blockTitle: {
        position: 'relative',
        composes: 'flexColumn',
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(16),
        [media.lgXl]: {
            width: RESPONSIVE_CARD_WIDTH.lgXl,
        },
        [media.mdLg]: {
            width: RESPONSIVE_CARD_WIDTH.mdLg,
        },
        [media.xlUp]: {
            width: projectCardWidth,
        },
        [media.smMd]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(9),
        },
        [media.smDown]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(5),
        },
    },
    blockTitleContent: {
        [media.smMd]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
        },
        [media.mdUp]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
    },
    blockDescription: {
        marginTop: theme.spacing(2),
        width: '80%',
        [media.smMd]: {
            width: '60%',
            lineHeight: 1.4,
            textAlign: 'center',
            fontSize: 16,
        },
        [media.smDown]: {
            fontSize: 14,
            width: '100%',
            lineHeight: 1.6,
        },
    },
    block: {
        borderRadius: 10,
        transition: 'all .5s cubic-bezier(.19,1,.4,1)',
        width: 580,
        height: 590,
        backgroundColor: '#d3b589',
        marginBottom: theme.spacing(6),
    },
}));

interface ColorI {
    color: string;
    dark?: boolean;
}
export interface ProjectI {
    id: string;
    subtitle: string;
    title: string;
    description: string;
    url: string;
    color: ColorI;
}
const colors: ColorI[] = [
    { color: 'd3b589' },
    { color: '825c79' },
    { color: 'eeedea', dark: true },
    { color: 'b5d4cc' },
    { color: '7ca5cf' },
];
const projects: Omit<ProjectI, 'color'>[] = [
    {
        id: '1',
        subtitle: 'Some card subtitle',
        title: 'Some card title, two line card title',
        description: 'Some long, very very long card description, and very very long card description',
        url: '/',
    },
    {
        id: '2',
        subtitle: 'Some card subtitle 2',
        title: 'Some card title 2',
        description: 'Some long, very very long card description, and very very long card description 2',
        url: '/',
    },
    {
        id: '3',
        subtitle: 'Some card subtitle 3',
        title: 'Some card title, two line card title 3',
        description: 'Some long, very very long card description, and very very long card description 3',
        url: '/',
    },
    {
        id: '4',
        subtitle: 'Some card subtitle 4',
        title: 'Some card title, two line card title 4',
        description: 'Some long, very very long card description, and very very long card description 4',
        url: '/',
    },
    {
        id: '5',
        subtitle: 'Some card subtitle 5',
        title: 'Some card title, two line card title 5',
        description: 'Some long, very very long card description, and very very long card description 5',
        url: '/',
    },
];

const ProjectsGrid = () => {
    const classes = useStyles();
    const [leftCardsData, setLeftCardData] = useState<ProjectI[]>([]);
    const [rightCardsData, setRightCardData] = useState<ProjectI[]>([]);
    const { width } = useWindowSize();
    const isTablet: boolean = width <= md;

    useEffect(() => {
        const split: number = projects.length <= 5 ? 2 : 3;
        const newProjects = projects.map(
            (project: Omit<ProjectI, 'color'>, index: number): ProjectI => ({
                ...project,
                color: colors[index],
            })
        );
        const leftCards: ProjectI[] = [...newProjects].splice(0, split);
        const rightCards: ProjectI[] = [...newProjects].splice(split, projects.length);
        setLeftCardData([...leftCards]);
        setRightCardData([...rightCards]);
    }, []);

    const splicedPorject = (project: ProjectI): ReactNode => <ProjectGrid key={project.id} {...project} />;

    const blockTitle: ReactNode = (
        <div className={classes.blockTitle}>
            <div className={classes.blockTitleContent}>
                <Title text="Some Title" level={2} />
                <Text
                    className={classes.blockDescription}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus metus non nunc tempor, eu ultricies mi euismod."
                    tagName="p"
                />
            </div>
        </div>
    );
    return (
        <Layout className={classes.projectsRoot}>
            {isTablet && blockTitle}
            <div className={classes.projectsContent}>
                <div className={classes.left}>
                    {!isTablet && blockTitle}
                    {leftCardsData.map(splicedPorject)}
                </div>
                <div className={classes.right}>{rightCardsData.map(splicedPorject)}</div>
            </div>
        </Layout>
    );
};
export default ProjectsGrid;
