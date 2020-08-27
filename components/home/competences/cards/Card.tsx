import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Plx from 'react-plx';
import clsx from 'clsx';

const useStyles = createUseStyles((theme: any) => ({
    card: {
        composes: 'flexColumn spaceBetween font-ProximaNova-regular',
        boxSizing: 'border-box',
        boxShadow: '0 6px 10px rgba(0,0,0,.08)',
        borderRadius: 10,
        height: 410,
        width: 543,
        backgroundColor: '#fff',
        position: 'absolute',
        padding: [60, 68],
        color: theme.color.secondary,
    },
    cardHead: {
        composes: 'flexRow spaceBetween alignCenter stretchSelf',
    },
    cardBody: {
        composes: 'flexColumn spaceBetween alignCenter',
    },
    cardFooter: {
        composes: 'flexColumn spaceBetween alignCenter stretchSelf',
    },
    description: {
        fontSize: 17,
        lineHeight: 1.72,
    },
    title: {
        color: theme.color.primary,
        fontSize: 26,
    },
}));

type Props = { className: string; parallaxData?: any; data: any; onPlxEnd: (value: string) => void };
const Card: FC<Props> = ({ className, parallaxData, data, onPlxEnd }) => {
    const classes = useStyles();
    return (
        <Plx
            className={clsx(classes.card, className)}
            parallaxData={parallaxData}
            id={data.color}
            onPlxEnd={() => onPlxEnd(data.name)}>
            <div className={classes.cardHead}>
                <img alt={data.name} src={`/images/competences/${data.name}.svg`} />
                <span>{data.ranking}</span>
            </div>
            <div className={classes.cardBody}>
                <h3 className={classes.title}>Some title here</h3>
                <p
                    className={
                        classes.description
                    }>{`Component definition is missing display name react/display-name, bundled successfully, waiting for typecheck results...`}</p>
            </div>
            <div className={classes.cardFooter}>
                <span>Some title here</span>
            </div>
        </Plx>
    );
};

export default Card;
