import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import BlockTitle from '../Common/BlockTitle';
import { animate, itemVariants } from '../../animations/cards';
import { media, lgScreenWidth } from '../../utils/constants';
import { screenState } from '../../reducers/appReducer';

const data = [
    {
        title: 'Performance',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
        title: 'Performance',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
        title: 'Performance',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
        title: 'Performance',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
        title: 'Performance',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
        title: 'Performance',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
        title: 'Performance',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
];
const useStyles = createUseStyles((theme: any) => ({
    fullColumn: {
        composes: 'flexColumn stretchSelf',
    },
    root: {
        composes: '$fullColumn alignCenter',
        paddingBottom: theme.spacing(30),
        [media.mdDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingBottom: theme.spacing(0),
        },
    },
    content: {
        composes: '$fullColumn center',
    },
    center: {
        composes: 'flexRow justifyCenter',
        [media.lgUp]: {
            width: lgScreenWidth,
            marginTop: theme.spacing(4),
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8),
        },
        [media.smLg]: {
            width: '60%',
        },
    },
    items: {
        composes: 'flexRow stretchSelf',
        [media.lgUp]: {
            marginTop: theme.spacing(12),
        },
    },
    item: {
        color: '#fff',
        marginBottom: theme.spacing(8),
        [media.lgUp]: {
            width: 300,
            margin: theme.spacing(4),
        },
        [media.mdDown]: {
            marginBottom: theme.spacing(5),
        },
    },
    title: {
        composes: 'flexRow center',
        fontFamily: 'Tungsten-Medium',
        color: '#52575f',
        fontSize: 22,
        textTransform: 'uppercase',
        marginBottom: theme.spacing(3),
        '& span': {
            marginLeft: -15,
        },
    },
    description: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        lineHeight: 1.6,
        letterSpacing: '0.68px',
        color: '#fff',
        [media.smDown]: {
            fontSize: 16,
        },
    },
}));

const Competences: FC = () => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });
    /** Components */
    const Div = isMobile ? 'div' : motion.div;

    /** Animation */
    const itemsAnimation = (inView) => (isMobile ? {} : animate(inView));
    const itemAnimation = isMobile ? {} : itemVariants;

    return (
        <div className={classes.root} id="competences">
            <BlockTitle title="Compétences clées" subtitle="Ce que je maîtrise" />
            <div className={classes.content} ref={ref}>
                <div className={classes.center}>
                    <Div className={classes.items} {...itemsAnimation(inView)}>
                        {data.map((item, index) => (
                            <Div className={classes.item} key={index} {...itemAnimation}>
                                <h6 className={classes.title}>
                                    <img src="/images/icons/left-circle-active.svg" alt="circle" />
                                    <span>{item.title}</span>
                                </h6>
                                <span className={classes.description}>{item.description}</span>
                            </Div>
                        ))}
                    </Div>
                </div>
            </div>
        </div>
    );
};

export default Competences;
