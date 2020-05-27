import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
// import { media } from '../../utils/constants';
import { useSelector } from 'react-redux';

import { screenState } from '../../reducers/appReducer';

const defaultAnimation = {
    initial: 'in',
    animate: 'out',
    variants: {
        in: { y: 30, opacity: 0 },
        out: { y: 0, opacity: 1 },
    },
    transition: {
        duration: 1,
        delay: 0.5,
    },
};
const useStyles = createUseStyles((theme: any) => ({
    button: {
        composes: 'flexRow spaceBetween flex1',
        backgroundColor: theme.color.primary,
        color: '#fff',
        textDecoration: 'none',
        padding: [20, 30],
        letterSpacing: 1,
        '& img': {
            marginLeft: theme.spacing(3),
        },
    },
}));

type Props = { text: string; icon?: string; url?: string; animation?: any };
const Button: FC<Props> = ({ text, icon, url, animation }) => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const animate = isMobile ? {} : animation ? animation : defaultAnimation;
    const Link = isMobile ? 'a' : motion.a;

    return (
        <Link className={classes.button} {...animate} href={url || '#'}>
            <span>{text}</span>
            {icon && <img alt="" src={`/images/icons/${icon}.svg`} />}
        </Link>
    );
};

export default Button;
