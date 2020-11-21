import React, { FC, ElementType } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { media } from '../../utils/constants';

const useStyles = createUseStyles({
    text: {
        composes: 'font-Poppins-regular',
        // composes: 'font-ProximaNova-regular',
        fontSize: 18,
        // color: theme.color.secondary,
        padding: 0,
        margin: 0,
        [media.smDown]: {
            fontSize: 16,
        },
    },
    p: {
        [media.smDown]: {
            lineHeight: 1.8,
        },
    },
});

type Props = { text: string; className?: string; tagName?: 'b' | 'p' };
const Text: FC<Props> = ({ text, tagName, className }) => {
    const classes = useStyles();
    const Component = (tagName ? tagName : 'span') as ElementType;
    return <Component className={clsx(classes.text, className, classes[tagName])}>{text}</Component>;
};

export default Text;
