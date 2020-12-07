import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { openMenuAnimation } from '../../animations/app';
import { screenState } from '../../reducers/appReducer';
import { horizontalPaddingMobile, media } from '../../utils/constants';
import Link from './Link';

interface MenuI {
    url: string;
    text: string;
}
interface IndexI {
    index: number;
}
const menus: MenuI[] = [
    {
        url: '/',
        text: 'Services',
    },
    {
        url: '/',
        text: 'Projets',
    },
    {
        url: '/contact',
        text: 'Contact',
    },
];

const useStyles = createUseStyles((theme: any) => ({
    rowCenter: {
        composes: 'flexRow justifyCenter alignCenter',
    },
    menu: {
        composes: 'flexColumn stretchSelf',
        [media.lgDown]: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    },
    content: {
        composes: 'flexRow spaceBetween center stretchSelf',
        [media.lgDown]: {
            padding: [theme.spacing(0), theme.spacing(horizontalPaddingMobile)],
        },
    },
    leftMenu: {
        composes: 'flexRow center flex1',
        [media.lgDown]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    logoContainer: {
        composes: '$rowCenter',
    },
    logo: {
        fontSize: 52,
        [media.lgDown]: {
            fontSize: 42,
            lineHeight: '1em',
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
        composes: 'flexRow alignCenter justifyEnd ',
    },
    item: {
        padding: [theme.spacing(3), theme.spacing(6)],
    },
    link: {
        color: theme.colors.active,
        textDecoration: 'none',
        fontSize: 20,
        '&:hover': {
            opacity: 0.6,
        },
    },
    menuMobile: {
        composes: 'flexColumn stretchSelf',
        backgroundColor: '#fff',
        height: '100%',
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        position: 'absolute',
        width: '100%',
        top: (top) => top,
    },
    menuIcon: {
        cursor: 'pointer',
    },
}));

const Menu = () => {
    const isMobile = useSelector(screenState);
    const theme = useTheme();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [height, setHeight] = useState(0);
    const classes = useStyles(height);

    const ref = useRef(null);

    useEffect(() => {
        setHeight(ref.current.clientHeight);
    }, []);

    const menuItem = ({ url, text, index }: IndexI & MenuI): ReactNode => (
        <div className={classes.item} key={index}>
            <Link
                href={url}
                text={text}
                className={classes.link}
                animate={false}
                hoveredColor={(theme as any).colors.active}
            />
        </div>
    );

    const menuDesktop: ReactNode = (
        <div className={classes.rightMenu}>
            {menus.map(({ text, url }: MenuI, index: number): ReactNode => menuItem({ index, text, url }))}
        </div>
    );

    const handleOpen = () => setOpenMenu((prev: boolean) => !prev);

    const menuIconProps = {
        alt: 'menu-icon',
        onClick: handleOpen,
        className: classes.menuIcon,
    };
    const menuIcon: ReactNode = (
        <div className={classes.rightMenu}>
            {!openMenu ? (
                <img src={`/images/icons/menu.svg`} {...menuIconProps} />
            ) : (
                <img src={`/images/icons/menu-close.svg`} {...menuIconProps} />
            )}
        </div>
    );

    return (
        <div className={classes.menu}>
            <div className={classes.content} ref={ref}>
                <div className={classes.leftMenu}>
                    <div className={classes.logoContainer}>
                        <Link href="/" animate={false} className={classes.logo}>
                            Mika.L
                        </Link>
                    </div>
                    <div className={classes.description}>
                        <span>Some description about Mika</span>
                    </div>
                </div>
                {isMobile ? menuIcon : menuDesktop}
            </div>
            {isMobile && (
                <motion.div
                    animate={openMenu ? 'visible' : 'hidden'}
                    initial={'hidden'}
                    className={classes.menuMobile}
                    {...openMenuAnimation}>
                    {menus.map(({ text, url }: MenuI, index: number): ReactNode => menuItem({ index, text, url }))}
                </motion.div>
            )}
        </div>
    );
};

export default Menu;
