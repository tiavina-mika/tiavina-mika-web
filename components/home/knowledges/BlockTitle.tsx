import clsx from 'clsx';
import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import Title from '../../shared/Title';

const useStyles = createUseStyles({
    title: {
        fontSize: 33,
    },
});

type Props = { text: string; className?: string };
const BlockTitle: FC<Props> = ({ text, className }) => {
    const classes = useStyles();
    return <Title text={text} level={2} className={clsx(classes.title, className)} />;
};

export default BlockTitle;
