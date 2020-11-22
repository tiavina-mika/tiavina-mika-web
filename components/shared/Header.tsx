import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Title from './Title';
import Text from './Text';
import { horizontalPaddingMobile, media } from '../../utils/constants';
import Menu from './Menu';
import clsx from 'clsx';

const useStyles = createUseStyles((theme: any) => ({
    headerRoot: {
        composes: 'flexColumn justifyCenter font-ProximaNova-regular',
        fontSize: 22,
        background: 'linear-gradient(top bottom, #CCC 0%, #F4F4F4 100%)',
        [media.lgUp]: {
            padding: theme.spacing(20),
        },
    },
    /** Title */
    content: {
        composes: 'flexColumn',
        width: '75%',
        marginTop: theme.spacing(22),
        [media.lgDown]: {
            marginTop: theme.spacing(3),
            padding: [theme.spacing(1), theme.spacing(horizontalPaddingMobile)],
        },
    },
    titleContainer: {},
    title: {
        textTransform: 'uppercase',
        fontFamily: 'DINCondensed !important',
    },
    subtitle: {
        fontSize: 32,
    },
    descriptionContainer: {
        composes: 'flexRow stretchSelf font-ProximaNova-regular',
        lineHeight: '1.8em',
        color: theme.colors.secondary,
    },
    description: {
        fontSize: 24,
        [media.mdDown]: {
            fontSize: 18,
            lineHeight: '1.8em',
        },
    },
    spacing: {
        marginTop: theme.spacing(8.5),
        marginBottom: theme.spacing(8.5),
    },
}));

type Props = { title: string; description?: string; subtitle?: string };
const Header: FC<Props> = ({ title, description, subtitle }) => {
    const classes = useStyles();

    return (
        <div className={classes.headerRoot}>
            {/* menu */}
            <Menu />
            {/* page title */}
            <div className={classes.content}>
                <div className={description && subtitle ? classes.titleContainer : null}>
                    <Title text={title} className={clsx(classes.title, classes.spacing)} />
                    {subtitle && (
                        <Title
                            text={subtitle}
                            level={2}
                            className={clsx(classes.title, classes.subtitle, classes.spacing)}
                        />
                    )}
                </div>
                {/* page title */}
                {description && (
                    <div className={clsx(classes.descriptionContainer)}>
                        <Text text={description} tagName="p" className={classes.description} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
