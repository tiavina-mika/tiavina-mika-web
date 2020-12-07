import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { media } from '../../utils/constants';
import { SocialLinkI } from '../../utils/texting';
import Link from '../shared/Link';

const useStyles = createUseStyles((theme: any): any => ({
    linksContainer: {
        composes: 'flexRow spaceBetween center',
        [media.smDown]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyCenter: 'center',
        },
        [media.mdDown]: {
            marginTop: theme.spacing(6.2),
        },
    },
    links: {
        composes: 'flexRow font-Graphik-Medium',
        margin: -theme.spacing(2),
    },
    link: {
        margin: theme.spacing(2),
        fontSize: 14,
    },
    socialLink: {
        fontSize: 15,
        '&:hover': {
            opacity: 0.6,
        },
    },
}));

export type Props = {
    links: SocialLinkI[];
    rootClassName?: string;
    className?: string;
    animate?: boolean;
    color?: string;
    hoveredColor?: string;
};
const SocialLinks = ({ links, className, rootClassName, animate = true, color, hoveredColor }: Props) => {
    const classes: any = useStyles();

    return (
        <div className={clsx(classes.links, rootClassName)}>
            {links.map(
                (link: SocialLinkI): ReactNode => (
                    <Link
                        text={link.text}
                        key={link.text}
                        href={link.url}
                        color={color || '#fff'}
                        animate={animate}
                        hoveredColor={hoveredColor}
                        className={clsx(classes.link, className, animate && classes.socialLink)}
                        isExternalLink
                    />
                )
            )}
        </div>
    );
};

export default SocialLinks;
