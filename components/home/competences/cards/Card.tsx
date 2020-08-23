import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Plx from 'react-plx';
import clsx from 'clsx';

const useStyles = createUseStyles({
    card: {
        boxSizing: 'border-box',
        boxShadow: '0 6px 10px rgba(0,0,0,.08)',
        borderRadius: 10,
        // backgroundColor: 'red',
        // padding: '60px 68px',
        height: 410,
        width: 543,
        // marginBottom: theme.spacing(10),
        backgroundColor: '#fff',
        position: 'absolute',
    },
});

type Props = { className: string; parallaxData?: any; data: any };
const Card: FC<Props> = ({ className, parallaxData, data }) => {
    const classes = useStyles();
    return (
        <Plx className={clsx(classes.card, className)} parallaxData={parallaxData} id={data.color}>
            {data.id}
        </Plx>
    );
};

export default Card;
