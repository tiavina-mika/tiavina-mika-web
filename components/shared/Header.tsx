import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Title from './Title';
import Text from './Text';
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
    headerRoot: {
        composes: 'flexColumn justifyCenter font-ProximaNova-regular',
        padding: theme.spacing(20),
        fontSize: 22,
        background: 'linear-gradient(top bottom, #CCC 0%, #F4F4F4 100%)',
        [media.lgDown]: {
            padding: [theme.spacing(1), theme.spacing(4)],
        }
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
    /** Title */
    content: {
        composes: 'flexColumn',
        width: '75%',
        marginTop: theme.spacing(22),
        [media.lgDown]: {
            marginTop: theme.spacing(3),
        }
    },
    titleContainer: {
        marginBottom: theme.spacing(6),
        [media.mdDown]: {
            marginBottom: theme.spacing(3),
        }
    },
    descriptionContainer: {
        composes: 'flexRow stretchSelf font-ProximaNova-regular',
        lineHeight: '1.8em',
        color: theme.color.secondary,
    },
}));

type Props = { title: string; description?: string; subtitle?: string };
const Header: FC<Props> = ({ title, description, subtitle }) => {
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
            <div className={classes.content}>
                <div className={description && subtitle ? classes.titleContainer : null}>
                    <Title text={title} />
                    {subtitle && <Title text={subtitle} level={2} />}
                </div>
                {/* page title */}
                {description && (
                    <div className={classes.descriptionContainer}>
                        <Text text={description} tagName="p" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
