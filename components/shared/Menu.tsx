import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { screenState } from '../../reducers/appReducer';
import { media } from '../../utils/constants';

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
    menu: {
        composes: 'flexRow spaceBetween center stretchSelf',
    },
    leftMenu: {
        composes: 'flexRow center flex1',
        [media.lgDown]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    logo: {
        composes: '$rowCenter',
        fontSize: 52,
        fontStyle: 'italic',
        padding: 0,
        [media.lgDown]: {
            fontSize: 42,
        },
    },
    description: {
        composes: '$rowCenter',
        [media.lgUp]: {
            paddingLeft: theme.spacing(6),
            '& span': {
                marginTop: 5,
            },
        },
        fontSize: 16,
        color: '#666',
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
}));

const Menu = () => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const menuDesktop = (
        <div className={classes.rightMenu}>
            {menus.map(({ text, url }, index) => (
                <div className={classes.item} key={index}>
                    <a href={url} className={classes.link}>
                        {text}
                    </a>
                </div>
            ))}
        </div>
    );

    const menuIcon = (
        <div className={classes.rightMenu}>
            <img src={`/images/icons/menu.svg`} alt="menu-icon" />
        </div>
    );
    return (
        <div className={classes.menu}>
            <div className={classes.leftMenu}>
                <div className={classes.logo}>Mika</div>
                <div className={classes.description}>
                    <span>Some description about Mika</span>
                </div>
            </div>
            {isMobile ? menuIcon : menuDesktop}
        </div>
    );
};

export default Menu;
