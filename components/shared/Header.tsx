import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

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
    title: {
        composes: 'flexRow stretchSelf font-DINCondensed-medium',
        lineHeight: '1.25em',
        letterSpacing: 4,
        textTransform: 'uppercase',
        webkitFontSmoothing: 'antialiased',
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
                <div className={classes.title}>
                    <h1>{title}</h1>
                </div>
                {/* page title */}
                <div className={classes.descriptionContainer}>
                    <p>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
