import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import Plx from '../../../components/home/projects/node_modules/react-plx';
import { useSelector } from 'react-redux';
import { screenState } from '../../../reducers/appReducer';

const useStyles = createUseStyles((theme: any) => ({
    link: {
        composes: 'flexRow spaceBetween flex1',
        backgroundColor: theme.colors.primary,
        color: '#fff',
        textDecoration: 'none',
        padding: [20, 30],
        letterSpacing: 1,
        '& img': {
            marginLeft: theme.spacing(3),
        },
    },
}));

type Props = {
    text: string;
    icon?: string;
    url?: string;
    className?: string;
};
const DownloadButton: FC<Props> = ({ text, icon, url, className }) => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const parallaxData = [
        {
            start: `self`,
            duration: '40vh',
            properties: [
                {
                    startValue: 0,
                    endValue: -10,
                    unit: 'vh',
                    property: 'translateY',
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                },
            ],
        },
    ];

    const Component = isMobile ? 'a' : Plx;
    const otherProps = isMobile ? {} : { parallaxData, tagName: 'a' };

    return (
        <Component {...otherProps} className={clsx(classes.link, className)} href={url}>
            <span>{text}</span>
            {icon && <img alt="" src={`/images/icons/${icon}.svg`} />}
        </Component>
    );
};

export default DownloadButton;
