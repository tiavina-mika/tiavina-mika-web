import React, { useState, FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import Title from './Title';
import Post from './Post';

const useStyles = createUseStyles((theme: any) => ({
    about: {
        margin: 50,
        fontFamily: 'Prequel, sans-serif',
        letterSpacing: '0.6vw',
        color: '#fff',
    },
    title: {
        margin: [10, 0],
        position: 'relative',
        fontSize: '3.8vw',
        textShadow: '0px 0px 25px rgba(0,0,0,0.2)',
    },
    name: {},
    hello: {
        '& h6': {
            fontSize: 24,
            letterSpacing: '0.2vw',
            margin: 0,
        },
    },
    post: {
        textShadow: '0px 0px 2px rgba(0,0,0,0.5)',
        color: theme.color.primary,
        fontSize: 20
    }
}));
type Props = { className?: string; position?: number };

const About: FC<Props> = ({ className, position }) => {
    console.log('position: ', position);
    const classes = useStyles();
    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [post, setPost] = useState(false);

    return (
        <motion.div className={classes.about} style={{ paddingBottom: position }}>
            <div className={classes.hello}>
                <h6>Hello! Je suis</h6>
            </div>
            <div className={classes.name}>
                <Title text="Tiavina Michael" onComplete={() => setFirstName(true)} className={classes.title} />
                {firstName && (
                    <Title text="Ralainirina" onComplete={() => setLastName(true)} className={classes.title} />
                )}
                {lastName && <Post text="Developpeur Full-Stack / Web Designer" className={classes.post} />}
            </div>
        </motion.div>
    );
};

export default About;
