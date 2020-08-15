import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import PlxLayout from './PlxLayout';

import BlockTitle from '../../Common/BlockTitle';
import { media } from '../../../utils/constants';
import { ProjectsProps, PageInfoProps } from './Projects';

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexRow stretchSelf justifyCenter',
        fontFamily: 'Prequelrough, sans-serif',
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

    return (
        <div className={classes.root} id="projects">
            <BlockTitle {...pageInfo} />
            {data.map(
                (item: ProjectsProps, index: number): ReactNode => (
                    <PlxLayout {...item} key={index} reverse={index % 2 !== 0} />
                )
            )}
        </div>
    );
};

export default DesktopProjects;
