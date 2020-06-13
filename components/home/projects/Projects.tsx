import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import BlockTitle from '../../Common/BlockTitle';
import { screenState } from '../../../reducers/appReducer';
import { animate, itemVariants } from '../../../animations/cards';
import { media, lgScreenWidth } from '../../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    rowCenter: {
        composes: 'flexRow stretchSelf center',
        padding: [0, 10],
    },
    root: {
        composes: 'flexRow flex1 justifyCenter',
        fontFamily: 'Prequelrough, sans-serif',
        [media.lgUp]: {
            marginTop: theme.spacing(30),
        },
        [media.lgDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingBottom: theme.spacing(0),
        },
    },
    center: {
        composes: 'flexRow justifyCenter',
        [media.lgUp]: {
            width: lgScreenWidth,
            marginTop: theme.spacing(4),
        },
    },
    items: {
        composes: 'flexRow stretchSelf',
        [media.lgUp]: {
            marginTop: theme.spacing(12),
        },
    },
    item: {
        composes: 'flexColumn alignCenter',
        color: '#fff',
        backgroundColor: '#27292C',
        borderRadius: 10,
        marginBottom: theme.spacing(10),
        boxShadow: '0 2px 5px 0 rgba(102, 102, 102, 0.5), 0 2px 10px 0 rgba(102, 102, 102, 0.12)',
        [media.smUp]: {
            margin: theme.spacing(2),
            width: 470,
            height: 400,
        },
    },
    body: {
        composes: 'flexColumn',
    },
    image: {
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden',
        '& > img': {
            width: '100%',
            height: 329,
            borderRadius: 10,
        },
    },
    description: {
        composes: 'flexRow center spaceBetween stretchSelf',
        height: 40,
        '& span': {
            color: '#fff',
        },
    },
    action: {
        composes: '$rowCenter flex1',
        borderTop: `1px solid ${theme.color.subtitle}`,
        '& a': {
            '&:hover': {
                color: theme.color.primary,
            },
        },
    },
    button: {
        composes: 'flexRow stretchSelf',
        marginTop: 5,
        marginBottom: -5,
        height: 8,
        paddingLeft: 12,
        '& div': {
            height: 8,
            width: 8,
            borderRadius: '50%',
            marginRight: 8,
        },
    },
}));

const data = [
    {
        image: 'dummy',
        description: 'Some sort description',
        link: 'htttps://www.facebook.com',
    },
    {
        image: 'dummy',
        description: 'Some sort description',
        link: 'htttps://www.facebook.com',
    },
    {
        image: 'dummy',
        description: 'Some sort description',
        link: 'htttps://www.facebook.com',
    },
    {
        image: 'dummy',
        description: 'Some sort description',
        link: 'htttps://www.facebook.com',
    },
];

const Projects: FC = () => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    // /** Components */
    const Div = isMobile ? 'div' : motion.div;
    const Img = isMobile ? 'img' : motion.img;

    // /** Animation */
    const itemsAnimation = (inView) => (isMobile ? {} : animate(inView));
    const itemAnimation = () => (isMobile ? {} : itemVariants);
    const imageAnimation = isMobile ? {} : { whileHover: { scale: 1.2 } };

    return (
        <div className={classes.root} ref={ref}>
            <BlockTitle
                title="Projets"
                subtitle="Projets sur lesquels j'ai travaille"
                startAnimation={inView}
                icon="projects"
            />
            <div className={classes.center}>
                <Div className={classes.items} {...itemsAnimation(inView)}>
                    {data.map((item, index) => (
                        <Div className={classes.item} key={index} {...itemAnimation()}>
                            <div className={classes.button}>
                                {['#D82734', '#F3A702', '#20891F'].map((color, index) => (
                                    <div style={{ backgroundColor: color }} key={index} />
                                ))}
                            </div>
                            <div className={classes.image}>
                                <img src="/images/dummy.png" alt="" />
                                <div className={classes.description}>
                                    <span>{item.description}</span>
                                    <a href="#">
                                        <Img src="/images/icons/enter.svg" alt="" {...imageAnimation} />
                                    </a>
                                </div>
                            </div>
                        </Div>
                    ))}
                </Div>
            </div>
        </div>
    );
};

export default Projects;
