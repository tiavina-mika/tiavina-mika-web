import React, { FC, ElementType } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles((theme: any) => ({
    text: {
        composes: 'font-ProximaNova-regular',
        lineHeight: '1.2em',
        fontSize: 18,
        color: theme.color.secondary,
    },
}));

type Props = { text: string; className?: string; tagName?: 'b' | 'p' };
const Text: FC<Props> = ({ text, tagName, className }) => {
    const classes = useStyles();
    const Component = (tagName ? tagName : 'span') as ElementType;
    return <Component className={clsx(classes.text, className)}>{text}</Component>;
};

export default Text;
