import React from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import Block from '../../Common/Block';
import { media } from '../../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    about: {
        composes: 'flexColumn stretchSelf',
    },
    root: {
        composes: 'flexRow stretchSelf',
        marginTop: 22,
        lineHeight: 1.8,
        fontFamily: 'Montserrat Medium',
        [media.mdDown]: {
            flexDirection: 'column',
        },
        [media.smDown]: {
            lineHeight: 1.4,
        },
    },
    left: {
        [media.mdUp]: {
            paddingRight: 50,
            flex: 2,
        },
        [media.mdDown]: {
            paddingBottom: 50,
        },
    },
    right: {
        composes: 'flexRow stretchSelf justifyCenter',
        transform: 'translate3d(0px, -12px, 0px)',
        flex: 1,
        '& > img': {
            width: '90%',
            [media.xlUp]: {
                width: 350,
            },
            [media.smXl]: {
                width: 300,
            },
        },
    },
    title: {
        margin: 0,
        fontSize: 22,
    },
    subtitle: {
        fontSize: 26,
        margin: [0, 0, 10, 0],
    },
    description: {
        fontSize: 24,
        fontStyle: 'italic',
        color: '#718096',
        fontFamily: 'Georgia, Tisa',
        letterSpacing: 1,
        lineHeight: 1.4,
        [media.smDown]: {
            fontSize: 18,
        },
    },
    content: {
        fontSize: 22,
        marginTop: 10,
        fontFamily: 'Montserrat Regular',
        color: theme.color.regular,
        [media.smDown]: {
            fontSize: 18,
        },
    },
    button: {
        composes: 'flexRow center spaceBetween flex1',
        color: '#333333',
        border: '2px solid rgb(34,34,34)',
        borderRadius: 0,
        letterSpacing: '2px',
        fontSize: 14,
        fontFamily: ['Montserrat', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'].join(','),
        fontWeight: 700,
        textTransform: 'uppercase',
        padding: [15, 40],
        backgroundColor: 'rgba(0,0,0,0)',
        textDecoration: 'none',
        transition: 'all 0.5s',
        '&:hover': {
            color: '#fff',
            backgroundIage: 'initial',
            backgroundColor: '#333333',
        },
    },
}));

const About = () => {
    const classes = useStyles();

    const content = (scrollY) => (
        <motion.div style={{ marginRight: scrollY }} className={classes.root}>
            <div className={classes.left}>
                <motion.h5 className={classes.title} style={{ marginTop: scrollY * 50 }}>
                    Tiavina Michael Ralainirina
                </motion.h5>
                <motion.h6 className={classes.subtitle} style={{ marginTop: scrollY * 10 }}>
                    Développeur Web experimenté avec 4 années d'expérience
                </motion.h6>
                <div className={classes.description}>
                    <span>
                        {`I am Andrew Martin, an excitable freelance full-stack web developer. I live with an intense
                        passion for software engineering, particularly in the world of architecture, functional
                        development, and enhancing developer productivity.`}
                    </span>
                </div>
                <div className={classes.content}>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.`}
                </div>
            </div>
            <div className={classes.right}>
                <img src="/images/profile.jpg" alt="profile" style={{ transform: `rotate(${10 * scrollY}deg)` }} />
                <a className={classes.button}>
                    <span>Télécharger mon CV</span>
                    <img src="/images/icons/right-arrow.svg" alt="right-arrow" />
                </a>
            </div>
        </motion.div>
    );

    return <Block title="A propos de mois" renderChildren={(scrollYProgress) => content(scrollYProgress)} />;
};

export default About;
