import React, { FC } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { textItemsAnimation, textItemAnimation } from '../../../animations/presentation';
import { screenState } from '../../../reducers/appReducer';

const useStyles = createUseStyles({
    title: {
        color: '#fff',
        fontFamily: 'Prequel, sans-serif',
        textTransform: 'uppercase',
    },
});

type Props = {
    text: string;
    className?: string;
    onComplete?: () => void;
    onStart?: () => void;
    variant?: string;
    display?: boolean;
};
const Title: FC<Props> = ({ text, className, onComplete, variant, onStart, display = true }) => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    if (!display) return null;

    const Component = !isMobile ? (variant && variant === 'h4' ? motion.h4 : motion.h6) : 'h5';
    const otherProps = !isMobile
        ? {
              onAnimationComplete: onComplete,
              onAnimationStart: onStart,
              ...textItemsAnimation,
          }
        : {};

    return (
        <Component className={clsx(classes.title, className)} {...otherProps}>
            {text.split('').map((t, i) =>
                !isMobile ? (
                    <motion.span key={i} {...textItemAnimation}>
                        {t}
                    </motion.span>
                ) : (
                    t
                )
            )}
        </Component>
    );
};

export default Title;
