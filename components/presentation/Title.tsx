import React, { FC } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

import { textItemsAnimation, textItemAnimation } from '../../utils/animation';
import { motion } from 'framer-motion';

const useStyles = createUseStyles({
    title: {
        color: '#fff',
        fontFamily: 'Prequel, sans-serif',
        textTransform: 'uppercase',
    },
});

type Props = { text: string; className?: string; onComplete: () => void; onStart?: () => void; variant?: string };
const Title: FC<Props> = ({ text, className, onComplete, variant, onStart }) => {
    const classes = useStyles();
    const Component = variant && variant === 'h4' ? motion.h6 : motion.h4;

    return (
        <Component
            className={clsx(classes.title, className)}
            {...textItemsAnimation}
            onAnimationComplete={onComplete}
            onAnimationStart={onStart}>
            {text.split('').map((t, i) => (
                <motion.span key={i} {...textItemAnimation}>
                    {t}
                </motion.span>
            ))}
        </Component>
    );
};

export default Title;
