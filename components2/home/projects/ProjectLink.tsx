import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles({
    linkContainer: {
        composes: 'flexRow justifyCenter',
    },
    link: {
        composes: 'flexRow alignCenter justifyCenter',
        color: '#fff',
        textDecoration: 'none',
        width: 250,
    },
    rightArrowIcon: {
        marginLeft: 10,
    },
});

type Props = { url: string; text?: string; className?: string; linkClassName?: string };
const ProjectLink: FC<Props> = ({ url, text, className, linkClassName }) => {
    const classes = useStyles();

    return (
        <div className={clsx(className, classes.linkContainer)}>
            <a href={url || '#'} className={clsx(classes.link, linkClassName)}>
                <span>{text || 'Voir le projet'}</span>
                <img src="/images/icons/enter.svg" alt="" className={classes.rightArrowIcon} />
            </a>
        </div>
    );
};

export default ProjectLink;
