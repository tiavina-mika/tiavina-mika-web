import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import BlockTitle from '../Common/BlockTitle';
import { animate, itemVariants } from '../../animations/cards';
import { media, lgScreenWidth } from '../../utils/constants';
import { screenState } from '../../reducers/appReducer';

const useStyles = createUseStyles((theme: any) => ({
    fullColumn: {
        composes: 'flexColumn stretchSelf',
    },
    root: {
        composes: '$fullColumn justifyCenter',
        paddingBottom: theme.spacing(30),
        [media.lgDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            marginTop: theme.spacing(8),
            paddingBottom: theme.spacing(0),
        },
    },
    content: {
        composes: '$fullColumn center',
        [media.lgUp]: {
            marginTop: theme.spacing(6),
        },
    },
    center: {
        composes: 'flexRow justifyCenter',
        [media.lgUp]: {
            width: lgScreenWidth - 300,
            marginTop: theme.spacing(4),
        },
    },
    type: {
        composes: '$fullColumn flex1',
        [media.mdDown]: {
            marginBottom: theme.spacing(4),
        },
    },
    title: {
        composes: 'flexRow center stretchSelf',
        fontFamily: 'Tungsten-Medium',
        color: '#52575f',
        fontSize: 24,
        textTransform: 'uppercase',
        marginBottom: theme.spacing(3),
        '& span': {
            marginLeft: 10,
        },
        [media.mdDown]: {
            marginBottom: theme.spacing(1.3),
        },
    },
    items: {
        composes: 'flexColumn flexStart',
        '& span': {
            marginLeft: 10,
        },
        [media.mdUp]: {
            marginBottom: theme.spacing(8),
        },
    },
    item: {
        composes: 'flexRow center',
        marginBottom: theme.spacing(2),
        [media.smDown]: {
            marginBottom: 3,
        },
        width: 300,
        '& h6': {
            marginLeft: 10,
            fontFamily: 'Montserrat-Regular',
            fontSize: 18,
            lineHeight: 1.6,
            letterSpacing: '0.85px',
            color: '#fff',
            [media.smDown]: {
                fontSize: 16,
            },
        },
    },
}));

const items = [
    {
        type: 'Language de Programmation',
        icon: 'programing-language',
        experiences: [
            {
                name: 'Javascript',
                level: 'expert',
            },
            {
                name: 'TypeScript',
                level: 'expert',
            },
            {
                name: 'PHP',
                level: 'expert',
            },
            {
                name: 'Python',
                level: 'medium',
            },
            {
                name: 'Ruby',
                level: 'beginner',
            },
        ],
    },
    {
        type: 'Backend',
        icon: 'backend',
        experiences: [
            {
                name: 'NodeJs',
                level: 'expert',
            },
            {
                name: 'Symfony',
                level: 'expert',
            },
            {
                name: 'Flask',
                level: 'expert',
            },
            {
                name: 'Ruby on Rails',
                level: 'beginner',
            },
        ],
    },
    {
        type: 'Frontend',
        icon: 'frontend',
        experiences: [
            {
                name: 'ReactJs',
                level: 'expert',
            },
            {
                name: 'HTML',
                level: 'expert',
            },
            {
                name: 'CSS',
                level: 'expert',
            },
            {
                name: 'JQuery',
                level: 'expert',
            },
            {
                name: 'Angular',
                level: 'medium',
            },
        ],
    },
    {
        type: 'Base de données',
        icon: 'database',
        experiences: [
            {
                name: 'MongoDB',
                level: 'expert',
            },
            {
                name: 'MySQL',
                level: 'expert',
            },
            {
                name: 'PostgreSQL',
                level: 'expert',
            },
            {
                name: 'Elastic Search',
                level: 'expert',
            },
        ],
    },
    {
        type: 'Versioning',
        icon: 'versioning',
        experiences: [
            {
                name: 'GitHub',
                level: 'expert',
            },
            {
                name: 'GitLab',
                level: 'expert',
            },
            {
                name: 'BitBucket',
                level: 'expert',
            },
        ],
    },

    {
        type: 'Webservice',
        icon: 'frontend',
        experiences: [
            {
                name: 'REST API',
                level: 'expert',
            },
            {
                name: 'GraphQL',
                level: 'expert',
            },
            {
                name: 'Parse Server',
                level: 'expert',
            },
        ],
    },
    {
        type: 'Design',
        icon: 'Design',
        experiences: [
            {
                name: 'Adobe Photoshop',
                level: 'expert',
            },
            {
                name: 'Adobe Illustrator',
                level: 'expert',
            },
            {
                name: 'InVision',
                level: 'expert',
            },
            {
                name: 'Zepplin',
                level: 'expert',
            },
        ],
    },
    {
        type: 'Gestion Projet',
        icon: 'project-gestion',
        experiences: [
            {
                name: 'Jira',
                level: 'expert',
            },
            {
                name: 'Trello',
                level: 'expert',
            },
            {
                name: 'Asana',
                level: 'expert',
            },
        ],
    },
    {
        type: 'Outils communication',
        icon: 'communication',
        experiences: [
            {
                name: 'Skype',
                level: 'expert',
            },
            {
                name: 'Microsoft Teams',
                level: 'expert',
            },
            {
                name: 'Slack',
                level: 'expert',
            },
            {
                name: 'Google Sheet',
                level: 'expert',
            },
        ],
    },
];

const Skills: FC = () => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });
    /** Components */
    const Div = isMobile ? 'div' : motion.div;

    /** Animation */
    const itemsAnimation = (inView) => (isMobile ? {} : animate(inView));
    const itemAnimation = isMobile ? {} : itemVariants;

    return (
        <div className={classes.root} id="skills">
            <BlockTitle title="Connaissance" subtitle="Ce que je maîtrise" right icon="skills" />
            <div className={classes.content} ref={ref}>
                <Div className={classes.center} {...itemsAnimation(inView)}>
                    {items.map((item, index) => (
                        <Div className={classes.type} key={index} {...itemAnimation}>
                            <h6 className={classes.title}>
                                <img src={`/images/icons/${item.icon}.svg`} alt="" />
                                <span>{item.type}</span>
                            </h6>
                            <Div className={classes.items} {...itemsAnimation(inView)}>
                                {item.experiences.map((experience, index) => (
                                    <Div className={classes.item} key={index} {...itemAnimation}>
                                        <img src={`/images/icons/${experience.level}.svg`} alt="" />
                                        <h6>{experience.name}</h6>
                                    </Div>
                                ))}
                            </Div>
                        </Div>
                    ))}
                </Div>
            </div>
        </div>
    );
};

export default Skills;
