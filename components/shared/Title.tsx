import React, { FC, ElementType } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { media } from '../../utils/constants';

const useStyles = createUseStyles({
    title: {
        composes: 'flexRow stretchSelf font-Poppins-bold',
        lineHeight: '1.25em',
        webkitFontSmoothing: 'antialiased',
        fontWeight: 'bold',
    },
    h1: {
        letterSpacing: 4,
        fontSize: 75,
        [media.mdDown]: {
            fontSize: 60,
            lineHeight: '1.1em',
        },
    },
    h2: {
        fontSize: 24,
        [media.mdDown]: {
            fontSize: 22,
            lineHeight: '1.6em',
        },
    },
    h3: {
        letterSpacing: 2,
    },
});

type Props = { text: string; className?: string; level?: 1 | 2 | 3 | 4 | 5 | 6 };
const Title: FC<Props> = ({ text, level, className }) => {
    const classes = useStyles();
    const Component = (level ? `h${level}` : 'h1') as ElementType;
    return (
        <Component className={clsx(className, classes.title, level ? classes[`h${level}`] : classes['h1'])}>
            {text}
        </Component>
    );
};

export default Title;
