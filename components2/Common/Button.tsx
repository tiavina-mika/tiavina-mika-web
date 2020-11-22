import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
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
    link: {
        composes: 'flexRow spaceBetween flex1',
        backgroundColor: theme.colors.primary,
        color: '#fff',
        textDecoration: 'none',
        padding: [20, 30],
        letterSpacing: 1,
        '& img': {
            marginLeft: theme.spacing(3),
        },
    },
    button: {
        border: 'none',
        cursor: 'pointer',
        '&:focus': {
            outline: 'none',
        },
    },
}));

type Props = {
    text: string;
    icon?: string;
    url?: string;
    animation?: any;
    type?: 'button' | 'submit';
    className?: string;
};
const Button: FC<Props> = ({ text, icon, url, animation, type, className }) => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const animate = isMobile ? {} : animation ? animation : defaultAnimation;
    const Link = isMobile ? 'a' : motion.a;

    if (type) {
        return (
            <button type={type} className={clsx(classes.button, className)}>
                {text}
            </button>
        );
    }

    return (
        <Link className={clsx(classes.link, className)} {...animate} href={url || '#'}>
            <span>{text}</span>
            {icon && <img alt="" src={`/images/icons/${icon}.svg`} />}
        </Link>
    );
};

export default Button;
