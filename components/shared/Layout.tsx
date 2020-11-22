import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { media } from '../../utils/constants';

const useStyles = createUseStyles({
    layout: {
        composes: 'flexRow justifyCenter center noWrap flex1 stretchSelf',
    },
    layoutContent: {
        composes: 'flexRow',
    },
    layoutWithWidth: {
        width: '80%',
        // [media.mdDown]: {
        //     width: '90%',
        // },
        [media.xsSm]: {
            width: '90%',
        },
        [media.mdLg]: {
            width: '96%',
        },
        [media.lgXl]: {
            width: '90%',
        },
    },
    layoutFullWidth: {
        width: '100%',
    },
});

export type Props = {
    children: ReactNode;
    rootClassName?: string;
    className?: string;
    fullWidth?: boolean;
    id?: string;
};
const Layout: FC<Props> = ({ children, rootClassName, className, fullWidth = false, id }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.layout, rootClassName)} id={id}>
            <div
                className={clsx(
                    fullWidth ? classes.layoutFullWidth : classes.layoutWithWidth,
                    classes.layoutContent,
                    className
                )}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
