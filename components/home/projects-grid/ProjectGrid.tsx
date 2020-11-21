import React from 'react';
import { createUseStyles } from 'react-jss';
import Text from '../../shared/Text';
import Title from '../../shared/Title';

const useStyles = createUseStyles((theme: any) => ({
    block: {
        composes: 'flexRow',
        position: 'relative',
        borderRadius: 10,
        transition: 'all .5s cubic-bezier(.19,1,.4,1)',
        width: 580,
        height: 590,
        backgroundColor: '#d3b589',
        marginBottom: theme.spacing(6),
        color: '#fff',
    },
    center: {
        composes: 'stretchSelf flex1',
        padding: '10% 12%',
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
        '&:hover': {
            '& div:last-child div': {
                backgroundColor: '#fff',
                transform: `translate(${theme.spacing(0)}px,-${theme.spacing(2)}px)`,
                color: theme.color.secondary,
            },
            '& img:last-child': {
                visibility: 'visible',
            },
            '& img:nth(2)': {
                visibility: 'hidden',
            },
        },
    },
    subtitle: {
        fontSize: 18,
    },
    title: {
        fontSize: 26,
        width: '60%',
    },
    descriptionContainer: {
        width: '40%',
    },
    description: {},
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

type Props = {
    title: string;
    subtitle: string;
    url: string;
};

const ProjectGrid = () => {
    const classes = useStyles();

    return (
        <div className={classes.block}>
            <div className={classes.center}>
                <div className={classes.content}>
                    <a href="/" className={classes.cardLink} />
                    <div>
                        <Title text="Some card subtitle" level={4} className={classes.subtitle} />
                    </div>
                    <div className={classes.title}>
                        <Title text="Some card title, two line card title" level={3} />
                    </div>
                    <div className={classes.descriptionContainer}>
                        <Text
                            text="Some long, very very long card description, and very very long card description"
                            tagName="p"
                            className={classes.description}
                        />
                    </div>
                    <div className={classes.seeMore}>
                        <div className={classes.seeMoreButton}>
                            <Text text="Learn more" className={classes.seeMoreText} />
                            <img src="/images/icons/right-arrow-light.svg" alt="arrow right" />
                            <img src="/images/icons/right-arrow.svg" alt="arrow right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectGrid;
