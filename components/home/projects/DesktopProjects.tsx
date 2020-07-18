import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { useInView } from 'react-intersection-observer';
import PlxLayout from './PlxLayout';

import BlockTitle from '../../Common/BlockTitle';
import { media } from '../../../utils/constants';
import { ProjectsProps, PageInfoProps } from './Projects';

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexRow stretchSelf justifyCenter',
        fontFamily: 'Prequelrough, sans-serif',
        // width: '100%',
        paddingBottom: theme.spacing(30),
        [media.lgDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingBottom: theme.spacing(0),
        },
    },
}));

type Props = { data: ProjectsProps[]; pageInfo: PageInfoProps };
const DesktopProjects: FC<Props> = ({ data, pageInfo }) => {
    const classes = useStyles();

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    return (
        <div className={classes.root} ref={ref} id="projects">
            <BlockTitle {...pageInfo} startAnimation={inView} />
            {data.map(
                (item: ProjectsProps, index: number): ReactNode => (
                    <PlxLayout {...item} key={index} reverse={index % 2 !== 0} />
                )
            )}
        </div>
    );
};

export default DesktopProjects;
