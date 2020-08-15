import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import animateScrollTo from 'animated-scroll-to';

import { media } from '../../utils/constants';

const useStyles = createUseStyles({
    link: {
        composes: 'flexRow center',
        color: '#fff',
        textDecoration: 'none',
        cursor: 'pointer',
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
});

export type LinkProps = { text: string; icon?: string; id: string };
const Link: FC<LinkProps> = ({ text, icon, id }) => {
    const classes = useStyles();

    const handleScroll = (id: string): void => {
        const element = document.getElementById(id);
        animateScrollTo(element.offsetTop, {
            easing: (t: number): number => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
        });
    };

    return (
        <a className={classes.link} onClick={() => handleScroll(id)}>
            <img src={`/images/icons/${icon}.svg`} alt="" className={classes.icon} />
            <span>{text}</span>
        </a>
    );
};

export default Link;
