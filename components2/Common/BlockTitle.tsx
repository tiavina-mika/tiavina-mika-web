import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import { media } from '../../utils/constants';
import PlxComponent from './PlxComponent';

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexRow center stretchSelf flex1',
        textTransform: 'uppercase',
        fontFamily: 'Prequelrough, sans-serif',
        width: '100%',
        opacity: 0,
        [media.lgDown]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            opacity: 1,
        },
        [media.mdDown]: {
            marginBottom: theme.spacing(4),
        },
    },
    right: {
        composes: 'justifyEnd',
    },
    main: {
        composes: 'flexRow alignCenter',
        [media.lgUp]: {
            paddingLeft: 15,
        },
        [media.lgDown]: {
            order: -1,
        },
    },
    icon: {
        composes: 'flexRow',
        marginRight: 10,
        [media.mdDown]: {
            marginBottom: theme.spacing(1),
            '& img': {
                width: 25,
            },
        },
    },
    titleContainer: {},
    title: {
        fontSize: 32,
        letterSpacing: ' 0.16em',
        color: '#fff',
        marginBottom: 10,
        [media.mdDown]: {
            fontSize: 20,
        },
    },
    dotted: {
        borderTop: '1px dotted white',
        textIndent: -9999,
        [media.mdLg]: {
            marginTop: theme.spacing(3),
        },
        [media.mdDown]: {
            marginTop: theme.spacing(1),
        },
        [media.lgDown]: {
            width: 200,
        },
        [media.lgUp]: {
            marginTop: theme.spacing(3),
            width: '30vw',
        },
    },
    dottedRight: {
        order: 1,
        [media.lgUp]: {
            width: '50vw',
        },
    },
    subtitle: {
        fontSize: 22,
        letterSpacing: '0.16em',
        color: theme.colors.subtitle,
        [media.mdDown]: {
            fontSize: 18,
        },
    },
}));

type Props = {
    className?: string;
    title: string;
    subtitle?: string;
    right?: boolean;
    icon?: string;
};
const BlockTitle: FC<Props> = ({ className, title, subtitle, right, icon }) => {
    const classes = useStyles();
    const triggerClass = title.split(' ').join('-') + '-titleTrigger';

    const parallaxData = [
        {
            start: `.${triggerClass}`,
            duration: '50vh',
            properties: [
                {
                    startValue: 20,
                    endValue: 5,
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

    return (
        <PlxComponent
            triggerClass={triggerClass}
            parallaxData={parallaxData}
            className={clsx(classes.root, className, right ? classes.right : null)}
            trigger={20}>
            <div className={clsx(classes.dotted, right ? classes.dottedRight : null)}></div>
            <div className={classes.main}>
                {icon && (
                    <div className={classes.icon}>
                        <img src={`/images/icons/${icon}.svg`} alt="" />
                    </div>
                )}
                <div className={classes.titleContainer}>
                    <h3 className={classes.title}>{title}</h3>
                    {subtitle && <h6 className={classes.subtitle}>{subtitle}</h6>}
                </div>
            </div>
        </PlxComponent>
    );
};

export default BlockTitle;
