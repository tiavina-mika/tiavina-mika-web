import React, { FC, ElementType } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { media } from '../../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    text: {
        composes: 'flexRow stretchSelf font-ProximaNova-regular',
        lineHeight: '1.8em',
        fontSize: 24,
        color: theme.color.secondary,
        [media.mdDown]: {
            fontSize: 18,
        },
    },
}));

type Props = { text: string; className?: string; tagName?: 'b' | 'p' };
const Text: FC<Props> = ({ text, tagName, className }) => {
    const classes = useStyles();
    const Component = (tagName ? tagName : 'span') as ElementType;
    return <Component className={clsx(classes.text, className)}>{text}</Component>;
};

export default Text;
