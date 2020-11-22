import React, { ElementType, FC } from 'react';
import { createUseStyles } from 'react-jss';
import Plx from 'react-plx';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { screenState } from '../../../../reducers/appReducer';
import { horizontalPaddingMobile, media } from '../../../../utils/constants';
import Divider from '../../../shared/Divider';

const useStyles = createUseStyles((theme: any) => ({
    cardDesktop: {
        composes: 'flexColumn spaceBetween font-ProximaNova-regular',
        boxSizing: 'border-box',
        boxShadow: '0 6px 10px rgba(0,0,0,.08)',
        borderRadius: 10,
        height: 410,
        width: 543,
        backgroundColor: '#fff',
        position: 'absolute',
        padding: [60, 68],
        color: theme.colors.secondary,
    },
    cardMobile: {
        composes: 'flexColumn spaceBetween font-ProximaNova-regular',
        marginTop: theme.spacing(2),
        padding: [theme.spacing(2), theme.spacing(horizontalPaddingMobile)],
        color: theme.colors.secondary,
        [media.smLg]: {
            boxShadow: '0 6px 10px rgba(0,0,0,.08)',
            borderRadius: 10,
            height: 300,
            width: 440,
            marginBottom: theme.spacing(5),
        },
        [media.mdLg]: {
            marginTop: theme.spacing(4),
        },
    },
    cardHead: {
        composes: 'flexRow spaceBetween center stretchSelf',
        [media.lgDown]: {
            marginBottom: theme.spacing(1.8),
        },
    },
    cardBody: {
        composes: 'flexColumn spaceBetween alignCenter',
    },
    cardFooter: {
        composes: 'flexColumn spaceBetween alignCenter stretchSelf',
    },
    image: {
        width: '8%',
    },
    description: {
        fontSize: 17,
        lineHeight: 1.72,
    },
    title: {
        color: theme.colors.primary,
        fontSize: 26,
    },
    link: {
        color: theme.colors.active,
        fontSize: 20,
        textDecoration: 'none',
        '&:hover': {
            color: theme.colors.active,
            opacity: 0.8,
        },
    },
    divider: {
        [media.smLg]: {
            display: 'none',
        },
        [media.smDown]: {
            marginTop: theme.spacing(6),
        },
    },
}));

type Props = { className: string; parallaxData?: any; data: any; onPlxEnd: (value: string) => void };
const Card: FC<Props> = ({ className, parallaxData, data, onPlxEnd }) => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const Component = (isMobile ? 'div' : Plx) as ElementType;
    const otherProps = isMobile
        ? { className: clsx(classes.cardMobile, className) }
        : { parallaxData, onPlxEnd: () => onPlxEnd(data.name), className: clsx(classes.cardDesktop, className) };

    return (
        <Component {...otherProps} id={data.color}>
            <div className={classes.cardHead}>
                <img alt={data.name} src={`/images/competences/${data.name}.svg`} className={classes.image} />
                <span>{data.ranking}</span>
            </div>
            <div className={classes.cardBody}>
                <h3 className={classes.title}>{data.title}</h3>
                <p className={classes.description}>{data.description}</p>
            </div>
            <div className={classes.cardFooter}>
                <a href="/" className={classes.link}>
                    See more
                </a>
            </div>
            {isMobile && <Divider className={classes.divider} />}
        </Component>
    );
};

export default Card;
