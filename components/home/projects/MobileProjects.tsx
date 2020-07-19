import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import BlockTitle from '../../Common/BlockTitle';
import { media, lgScreenWidth } from '../../../utils/constants';
import { ProjectsProps, PageInfoProps } from './Projects';

const useStyles = createUseStyles((theme: any) => ({
    rowCenter: {
        composes: 'flexRow stretchSelf center',
        padding: [0, 10],
    },
    root: {
        composes: 'flexRow flex1 justifyCenter',
        fontFamily: 'Prequelrough, sans-serif',
        paddingBottom: theme.spacing(30),
        [media.lgDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingBottom: theme.spacing(0),
        },
    },
    center: {
        composes: 'flexRow justifyCenter',
        [media.lgUp]: {
            width: lgScreenWidth,
            marginTop: theme.spacing(4),
        },
    },
    items: {
        composes: 'flexRow stretchSelf',
        [media.lgUp]: {
            marginTop: theme.spacing(12),
        },
    },
    item: {
        composes: 'flexColumn alignCenter',
        marginBottom: theme.spacing(10),
        [media.smUp]: {
            margin: theme.spacing(2),
        },
    },
    body: {
        composes: 'flexColumn',
    },
    content: {
        padding: 10,
    },
    image: {
        '& > img': {
            width: '100%',
        },
    },
    title: {
        composes: 'flexRow center spaceBetween stretchSelf',
        marginBottom: 20,
        '& span': {
            color: '#fff',
        },
    },
    action: {
        composes: '$rowCenter flex1',
        borderTop: `1px solid ${theme.color.subtitle}`,
        '& a': {
            '&:hover': {
                color: theme.color.primary,
            },
        },
    },
    button: {
        composes: 'flexRow stretchSelf',
        marginTop: 5,
        marginBottom: -5,
        height: 8,
        paddingLeft: 12,
        '& div': {
            height: 8,
            width: 8,
            borderRadius: '50%',
            marginRight: 8,
        },
    },
    linkContainer: {
        composes: 'flexRow justifyCenter',
    },
    link: {
        composes: 'flexRow alignCenter justifyCenter',
        color: '#fff',
        textDecoration: 'none',
        width: 250,
    },
    rightArrowIcon: {
        marginLeft: 10,
    },
}));

type Props = { data: ProjectsProps[]; pageInfo: PageInfoProps };
const MobileProjects: FC<Props> = ({ data, pageInfo }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="projects">
            <BlockTitle {...pageInfo} />
            <div className={classes.center}>
                <div className={classes.items}>
                    {data.map(
                        (item: ProjectsProps, index: number): ReactNode => (
                            <div className={classes.item} key={index}>
                                <div className={classes.content}>
                                    <div className={classes.title}>
                                        <span>{item.title}</span>
                                    </div>
                                    <div className={classes.image}>
                                        <img src={`/images/${item.image}`} alt="" />
                                    </div>
                                    <div className={classes.linkContainer}>
                                        <a href="#" className={classes.link}>
                                            <span>Voir le projet</span>
                                            <img
                                                src="/images/icons/enter.svg"
                                                alt=""
                                                className={classes.rightArrowIcon}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileProjects;
