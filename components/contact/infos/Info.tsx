import React, { ReactNode } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import clsx from 'clsx';

import { media } from '../../../utils/constants';
import Title from '../../shared/Title';
import Link from '../../shared/Link';

const useStyles = createUseStyles((theme: any): any => ({
    info: {
        flex: 1,
    },
    label: {},
    value: {
        marginTop: theme.spacing(5.2),
        [media.smDown]: {
            marginTop: theme.spacing(3.8),
        },
    },
    labelText: {
        fontSize: 24,
        [media.smDown]: {
            lineHeight: 1.35,
        },
        [media.mdUp]: {
            lineHeight: 0.9,
        },
    },
    valueLink: {
        [media.smDown]: {
            fontSize: 17,
        },
    },
}));

type Props = {
    className?: string;
    title: string;
    children: ReactNode;
    href?: string;
    hovered?: boolean;
};
const Info = ({ className, title, children, href, hovered = true }: Props) => {
    const classes: any = useStyles();
    const theme = useTheme();

    return (
        <div className={clsx(classes.info, className)}>
            <div className={classes.label}>
                <Title text={title} level={3} className={classes.labelText} />
            </div>
            <div className={classes.value}>
                {href ? (
                    <Link
                        href={href}
                        animate={hovered || false}
                        hoveredColor={hovered && (theme as any).colors?.active}
                        className={classes.valueLink}
                        isExternalLink>
                        {children}
                    </Link>
                ) : (
                    children
                )}
            </div>
        </div>
    );
};

export default Info;
