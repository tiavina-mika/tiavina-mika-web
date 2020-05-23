import React, { useState, FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import Title from './Title';
import Post from './Post';
import { screenState } from '../../reducers/appReducer';
import { media } from '../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    about: {
        margin: 50,
        fontFamily: 'Prequel, sans-serif',
        letterSpacing: '0.6vw',
        color: '#fff',
        [media.smDown]: {
            marginLeft: 10,
        },
    },
    title: {
        margin: [10, 0, 0, 0],
        position: 'relative',
        fontSize: '3.8vw',
        textShadow: '0px 0px 25px rgba(0,0,0,0.2)',
        [media.mdDown]: {
            fontSize: 22,
        },
    },
    name: {},
    hello: {
        '& h6': {
            fontSize: 24,
            [media.mdDown]: {
                fontSize: 14,
            },
            letterSpacing: '0.2vw',
            margin: 0,
        },
    },
    post: {
        textShadow: '0px 0px 2px rgba(0,0,0,0.5)',
        color: theme.color.primary,
        fontSize: 20,
    },
}));

const textName = 'Tiavina Michael';
const textFirstName = 'Ralainirina';
const textPost = 'Developpeur Full-Stack / Web Designer';

type Props = { position?: number };

const About: FC<Props> = ({ position }) => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const isMobile = useSelector(screenState);

    return (
        <motion.div className={classes.about} style={{ paddingBottom: position }}>
            <div className={classes.hello}>
                <h6>Hello! Je suis</h6>
            </div>
            <div className={classes.name}>
                <Title text={textName} onComplete={() => setFirstName(true)} className={classes.title} />
                <Title
                    text={textFirstName}
                    onComplete={() => setLastName(true)}
                    className={classes.title}
                    display={isMobile ? true : firstName}
                />
                <Post text={textPost} className={classes.post} display={isMobile ? true : lastName} />
            </div>
        </motion.div>
    );
};

export default About;
