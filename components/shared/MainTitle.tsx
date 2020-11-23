import React, { ElementType, FC } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import { media } from '../../utils/constants';

const useStyles = createUseStyles({
    mainTitle: {
        composes: 'font-DINCondensed-medium',
        textTransform: 'uppercase',
        padding: 0,
        margin: 0,
        fontWeight: 'bold',
    },
    page: {
        fontSize: 75,
        letterSpacing: 4,
    },
    block: {
        fontSize: 56,
        letterSpacing: 2,
        [media.smDown]: {
            fontSize: 44,
            letterSpacing: 1,
            lineHeight: 1.2,
        },
    },
});

type Props = { text: string; className?: string; type?: 'page' | 'block' };
const MainTitle: FC<Props> = ({ text, className, type = 'block' }) => {
    const classes = useStyles();

    const Component: ElementType = type === 'page' ? 'h1' : 'h2';
    return <Component className={clsx(classes.mainTitle, className, classes[type])}>{text}</Component>;
};

export default MainTitle;
