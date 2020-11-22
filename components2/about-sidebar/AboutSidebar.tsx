import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
// import { motion } from 'framer-motion';
import { media } from '../../utils/constants';
import Button from '../Common/Button';

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexColum center stretchSelf',
        fontFamily: 'Prequelrough, sans-serif',
        backgroundColor: theme.colors.secondary,
        [media.lgUp]: {
            height: '100vh',
        },
        [media.lgDown]: {
            width: '100%',
        },
        paddingLeft: 20,
        paddingRight: 20,
    },
    top: {
        composes: 'flexColumn',
    },
    imageContainer: {
        composes: 'flexRow stretchSelf justifyCenter',
        padding: [15, 0],
    },
    image: {
        backgroundColor: 'green',
        composes: 'flexRow stretchSelf',
        width: 200,
        height: 200,
        borderRadius: '50%',
        border: '5px solid #000',
        overflow: 'hidden',
        '& img': {
            width: '100%',
        },
    },
    content: {
        '& h3': {
            color: theme.colors.grey,
            fontWeight: '400',
            lineHeight: 1.4,
            textTransform: 'uppercase',
            letterSpacing: 3.5,
        },
        '& h2': {
            color: '#fff',
            fontWeight: '400',
            lineHeight: 1.4,
            textTransform: 'uppercase',
            letterSpacing: 3.5,
            marginTop: 10,
        },
    },
    button: {
        composes: 'flexRow justifyCenter stretchSelf',
        marginTop: 15,
    },
}));

const AboutSidebar: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <div className={classes.imageContainer}>
                    <div className={classes.image}>
                        <img alt="" src="/images/profile.jpg" />
                    </div>
                </div>
                <div className={classes.content}>
                    <h3>Tiavina Michael Ralainirina</h3>
                    <h2>Développeur FullStack / Web Designer / Lead Developpeur</h2>
                </div>
                <div className={classes.button}>
                    <Button text="Télécharger mon CV" icon="download" />
                </div>
            </div>
        </div>
    );
};

export default AboutSidebar;
