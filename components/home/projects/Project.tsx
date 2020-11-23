import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { media, projectCardWidth } from '../../../utils/constants';

import Text from '../../shared/Text';
import Title from '../../shared/Title';
import { ProjectI } from './Projects';

interface ResponsiveCardWidthI {
    lgXl: string;
    mdLg: string;
}
export const RESPONSIVE_CARD_WIDTH: ResponsiveCardWidthI = {
    lgXl: '42vw',
    mdLg: '45vw',
};
const useStyles = createUseStyles((theme: any) => ({
    block: {
        composes: 'flexRow',
        position: 'relative',
        borderRadius: 10,
        transition: 'all .5s cubic-bezier(.19,1,.4,1)',
        width: projectCardWidth,
        height: 590,
        backgroundColor: ({ color }: Pick<ProjectI, 'color'>) => '#' + color,
        marginBottom: theme.spacing(6),
        color: ({ isDark }) => (isDark ? '##54575a' : '#fff'),
        [media.lgXl]: {
            width: RESPONSIVE_CARD_WIDTH.lgXl,
            height: '43vw',
        },
        [media.mdLg]: {
            width: RESPONSIVE_CARD_WIDTH.mdLg,
            height: '47vw',
        },
        [media.smMd]: {
            width: '46vw',
            height: '48vw',
        },
        [media.smDown]: {
            width: '100%',
            height: 366,
        },
    },
    center: {
        composes: 'stretchSelf flex1',
        padding: '10% 12%',
        [media.mdLg]: {
            padding: '6% 8%',
        },
    },
    cardLink: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
    content: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'repeat(3, auto) 1fr',
        gridGap: theme.spacing(3),
        [media.smUp]: {
            '&:hover': {
                // the see more button
                '& div:last-child div': {
                    backgroundColor: '#fff',
                    transform: `translate(${theme.spacing(0)}px,-${theme.spacing(2)}px)`,
                    color: theme.colors.secondary,
                },
                // grey right arrow
                '& img:last-child': {
                    visibility: 'visible',
                },
                // white right arrow
                '& img:first-child': {
                    visibility: 'hidden',
                },
                // description block animation
                '& div:nth-child(3)': {
                    opacity: 1,
                },
            },
        },
        [media.mdDown]: {
            gridGap: theme.spacing(1),
        },
        [media.smDown]: {
            gridTemplateRows: 'repeat(2, auto) 1fr',
        },
    },
    subtitle: {
        fontSize: 18,
        [media.smMd]: {
            fontSize: 16,
            fontWeight: 300,
        },
        [media.xsMd]: {
            fontSize: 16,
        },
    },
    title: {
        fontSize: 26,
        width: '60%',
        [media.smMd]: {
            fontSize: 20,
            width: '80%',
        },
        [media.xsMd]: {
            width: '40%',
        },
        [media.mdDown]: {
            fontSize: 18,
        },
    },
    descriptionContainer: {
        width: '40%',
        lineHeight: 1.43,
        opacity: 0,
        transition: 'opacity .5s cubic-bezier(.19,1,.4,1)',
        [media.smMd]: {
            width: '60%',
        },
        [media.smDown]: {
            // visibility: 'hidden',
            display: 'none',
        },
    },
    description: {
        [media.xsMd]: {
            fontSize: 14,
        },
    },
    seeMore: {
        composes: 'flexRow flexEnd',
    },
    seeMoreButton: {
        transition: 'all .5s cubic-bezier(.19,1,.4,1)',
        padding: [theme.spacing(2), theme.spacing(4)],
        transform: `translate(-${theme.spacing(4)}px,-${theme.spacing(2)}px)`,
        borderRadius: 999,
        '& img:last-child': {
            visibility: 'hidden',
        },
    },
    seeMoreText: {
        fontSize: 14,
        marginRight: theme.spacing(2),
    },
}));

const Project: FC<ProjectI> = ({ title, subtitle, url, color, description }) => {
    const classes = useStyles({ color: color.color, isDark: color.dark });

    return (
        <div className={classes.block}>
            <div className={classes.center}>
                <div className={classes.content}>
                    <a href={url} className={classes.cardLink} />
                    <div>
                        <Title text={subtitle} level={4} className={classes.subtitle} />
                    </div>
                    <div className={classes.title}>
                        <Title text={title} level={3} />
                    </div>
                    <div className={classes.descriptionContainer}>
                        <Text text={description} tagName="p" className={classes.description} />
                    </div>
                    <div className={classes.seeMore}>
                        <div className={classes.seeMoreButton}>
                            <Text text="Learn more" className={classes.seeMoreText} />
                            <img src={`/images/icons/right-arrow${color.dark ? '' : '-light'}.svg`} alt="arrow right" />
                            <img src={`/images/icons/right-arrow${color.dark ? '-light' : ''}.svg`} alt="arrow right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Project;
