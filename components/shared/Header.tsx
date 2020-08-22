import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Title from './Title';
import Text from './Text';

const menus = [
    {
        url: '/',
        text: 'Services',
    },
    {
        url: '/',
        text: 'Projets',
    },
];

const useStyles = createUseStyles((theme: any) => ({
    rowCenter: {
        composes: 'flexRow justifyCenter alignCenter',
    },
    headerRoot: {
        composes: 'flexColumn justifyCenter font-ProximaNova-regular',
        padding: theme.spacing(20),
        fontSize: 22,
        background: 'linear-gradient(top bottom, #CCC 0%, #F4F4F4 100%)',
    },
    menu: {
        composes: 'flexRow spaceBetween alignCenter stretchSelf',
    },
    leftMenu: {
        composes: 'flexRow center flex1',
    },
    logo: {
        composes: '$rowCenter',
        fontSize: 52,
        fontStyle: 'italic',
        padding: 0,
    },
    description: {
        composes: '$rowCenter',
        paddingLeft: theme.spacing(6),
        fontSize: 16,
        color: '#666',
        '& span': {
            marginTop: 5,
        },
    },
    rightMenu: {
        composes: 'flexRow alignCenter justifyEnd flex1',
    },
    item: {
        padding: [theme.spacing(3), theme.spacing(6)],
    },
    link: {
        color: theme.color.active,
        textDecoration: 'none',
    },
    // title
    titleContainer: {
        composes: 'flexColumn',
        width: '75%',
        marginTop: theme.spacing(22),
    },
    descriptionContainer: {
        composes: 'flexRow stretchSelf font-ProximaNova-regular',
        lineHeight: '1.8em',
        fontSize: 24,
        color: theme.color.secondary,
    },
}));

type Props = { title: string; description?: string };
const Header: FC<Props> = ({ title, description }) => {
    const classes = useStyles();

    return (
        <div className={classes.headerRoot}>
            {/* menu */}
            <div className={classes.menu}>
                <div className={classes.leftMenu}>
                    <div className={classes.logo}>Mika</div>
                    <div className={classes.description}>
                        <span>Some description about Mika</span>
                    </div>
                </div>
                <div className={classes.rightMenu}>
                    {menus.map(({ text, url }, index) => (
                        <div className={classes.item} key={index}>
                            <a href={url} className={classes.link}>
                                {text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* page title */}
            <div className={classes.titleContainer}>
                <div>
                    <Title text={title} />
                    {/* <h1>{title}</h1> */}
                </div>
                {/* page title */}
                <div className={classes.descriptionContainer}>
                    <Text text={description} tagName="p" />
                </div>
            </div>
        </div>
    );
};

export default Header;
