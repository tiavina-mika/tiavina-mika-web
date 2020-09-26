import React, { FC, ElementType } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const useStyles = createUseStyles({
    button: {
        composes: 'flexRow center spaceBetween font-Montserrat-medium',
        boxShadow: '0 1px 4px rgba(26,26,67,.1)',
        borderRadius: 8,
        padding: '14px 20px',
        width: 180,
        fontSize: 13,
    },
    link: {
        textDecoration: 'none',
    },
    icon: {
        transform: 'rotate(-90deg)',
    },
});

type Props = { text: string; className?: string; url?: string };
const Button: FC<Props> = ({ text, url, className }) => {
    const classes = useStyles();
    const Component = (url ? motion.a : motion.button) as ElementType;
    const otherProps = url ? { href: url } : {};
    return (
        <Component
            {...otherProps}
            className={clsx(classes.button, className, url ? classes.link : null)}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.1, type: 'spring', stiffness: 200, damping: 3 },
            }}>
            <span>{text}</span>
            <img src={`/images/icons/caret.svg`} alt="icon" className={classes.icon} />
        </Component>
    );
};

export default Button;
