import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import animateScrollTo from 'animated-scroll-to';

import { media } from '../../utils/constants';
import clsx from 'clsx';
import { screenState } from '../../reducers/appReducer';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { openMenuAnimation } from '../../animations/app';

const useStyles = createUseStyles({
    menu: {
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
    logo: {
        marginLeft: 20,
        flex: 2,
        [media.mdDown]: {
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
            alignSelf: 'stretch',
            marginLeft: 0,
            alignItems: 'center',
            padding: 10,
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
    link: {
        composes: 'flexRow center',
        color: '#fff',
        textDecoration: 'none',
        marginRight: 10,
        [media.mdDown]: {
            flex: 1,
            alignItems: 'flex-start',
            padding: 8,
        },
    },
    icon: {
        height: 20,
        width: 20,
        marginRight: 8,
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

const Menu = () => {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const isMobile = useSelector(screenState);

    const handleOpen = () => setOpenMenu(!openMenu);
    // const handleClose = () => setOpenMenu(false);

    const Div = !isMobile ? 'div' : motion.div;
    const animate = !isMobile ? {} : openMenuAnimation;

    const handleScroll = (id: string): void => {
        const element = document.getElementById(id);
        animateScrollTo(element.offsetTop, {
            easing: (t: number): number => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
        });
    };

    const menus = (
        <Div className={clsx(classes.menus)} {...animate}>
            <a href="#" className={classes.link} onClick={() => handleScroll('about')}>
                <img src={`/images/icons/passion.svg`} alt="" className={classes.icon} />
                <span>A propos de moi</span>
            </a>
            <a href="#" className={classes.link} onClick={() => handleScroll('competences')}>
                <img src={`/images/icons/passion.svg`} alt="" className={classes.icon} />
                <span>Compétences</span>
            </a>
            <a href="#" className={classes.link} onClick={() => handleScroll('projects')}>
                <img src={`/images/icons/passion.svg`} alt="" className={classes.icon} />
                <span>Projets</span>
            </a>
            <a href="#" className={classes.link} onClick={() => handleScroll('contact')}>
                <img src={`/images/icons/passion.svg`} alt="" className={classes.icon} />
                <span>Contact</span>
            </a>
        </Div>
    );

    return (
        <div className={classes.menu}>
            <div className={classes.logo}>
                <img alt="" src="/images/logo.svg" className={classes.logoIcon} />
                <img alt="" src="/images/icons/menu.svg" className={classes.menuIcon} onClick={handleOpen} />
            </div>
            {/* <Div className={clsx(classes.menus, openMenu ? classes.menusShow : classes.menusHide)} {...animate}> */}
            {isMobile && openMenu && menus}
            {!isMobile && menus}
        </div>
    );
};

export default Menu;
