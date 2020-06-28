import React, { useState, useEffect, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { media } from '../../utils/constants';
import clsx from 'clsx';
import { screenState } from '../../reducers/appReducer';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { openMenuAnimation } from '../../animations/app';
import Link, { LinkProps } from './Link';

const useStyles = createUseStyles({
    menuRoot: {
        composes: 'flexRow center font-Montserrat-light',
        width: '100%',
        position: 'fixed',
        zIndex: 2000,
        top: 50,
        left: 0,
        fontSize: 18,
        [media.mdDown]: {
            flexDirection: 'column',
            alignSelf: 'stretch',
            alignItems: 'flex-start',
            top: 0,
            backgroundColor: '#000',
        },
        [media.mdUp]: {
            height: 80,
        },
    },
    fixedMenuRoot: {
        top: 0,
    },
    nonFixedMenuRoot: {
        top: 50,
    },
    logo: {
        marginLeft: 20,
        flex: 2,
        [media.mdDown]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            marginLeft: 0,
            alignItems: 'center',
            padding: 10,
        },
        [media.xlDown]: {
            flex: 1,
        },
    },
    fixedLogo: {
        [media.mdUp]: {
            backgroundColor: '#000',
            border: '5px solid #000',
        },
    },
    menus: {
        composes: 'flexRow',
        flex: 1,
        [media.mdDown]: {
            flexDirection: 'column',
            paddingTop: 15,
            paddingBottom: 15,
        },
    },
    fixedMenu: {
        [media.mdUp]: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#000',
            height: '100%',
            paddingLeft: 20,
            borderRadius: 2,
        },
    },
    menuIcon: {
        cursor: 'pointer',
        [media.mdUp]: {
            display: 'none',
        },
    },
    logoIcon: {
        width: 30,
    },
});

const links = [
    {
        id: 'about',
        icon: 'passion',
        text: 'A propos de moi',
    },
    {
        id: 'competences',
        icon: 'passion',
        text: 'Compétences',
    },
    {
        id: 'projects',
        icon: 'passion',
        text: 'Projets',
    },
    {
        id: 'contact',
        icon: 'passion',
        text: 'Contact',
    },
];

const Menu = () => {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [fixMenu, setFixMenu] = useState<boolean>(false);
    const isMobile = useSelector(screenState);

    const onScroll = () => {
        const header = document.getElementById('presentation');
        const sticky = header.offsetHeight / 2;
        if (window.pageYOffset > sticky) {
            setFixMenu(true);
        } else {
            setFixMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [fixMenu]);

    const handleOpen = () => setOpenMenu(!openMenu);
    // const handleClose = () => setOpenMenu(false);

    const Div = !isMobile ? 'div' : motion.div;
    const animate = !isMobile ? {} : openMenuAnimation;

    const menus = (
        <Div className={clsx(classes.menus, fixMenu ? classes.fixedMenu : null)} {...animate}>
            {links.map(
                (link: LinkProps, index: number): ReactNode => (
                    <Link {...link} key={index} />
                )
            )}
        </Div>
    );

    return (
        <div className={clsx(classes.menuRoot, fixMenu ? classes.fixedMenuRoot : classes.nonFixedMenuRoot)} id="menu">
            <div className={classes.logo}>
                <img
                    alt=""
                    src="/images/logo.svg"
                    className={clsx(classes.logoIcon, fixMenu ? classes.fixedLogo : null)}
                />
                <img alt="" src="/images/icons/menu.svg" className={classes.menuIcon} onClick={handleOpen} />
            </div>
            {isMobile && openMenu && menus}
            {!isMobile && menus}
        </div>
    );
};

export default Menu;
