import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Title from './Title';
import Text from './Text';
import { media } from '../../utils/constants';
import Menu from './Menu';

const useStyles = createUseStyles((theme: any) => ({
    headerRoot: {
        composes: 'flexColumn justifyCenter font-ProximaNova-regular',
        fontSize: 22,
        background: 'linear-gradient(top bottom, #CCC 0%, #F4F4F4 100%)',
    },
    /** Title */
    content: {
        composes: 'flexColumn',
        width: '75%',
        marginTop: theme.spacing(22),
        padding: theme.spacing(20),
        [media.lgDown]: {
            marginTop: theme.spacing(3),
            padding: [theme.spacing(1), theme.spacing(4)],
        },
    },
    titleContainer: {
        marginBottom: theme.spacing(6),
        [media.mdDown]: {
            marginBottom: theme.spacing(3),
        },
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
            <Menu />
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
