import React, { FC, ReactNode } from 'react';

import Project from './Project';
import { createUseStyles } from 'react-jss';

const data = [
    {
        image: 'project-demo.svg',
        title: 'Some Project Title here',
        subtitle: 'Some Subtitle',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        link: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/',
    },
    {
        image: 'project-demo.svg',
        title: 'Some Project Title here',
        subtitle: 'Some Subtitle',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        link: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/',
    },

    // {
    //     image: 'mac.png',
    //     title: 'Some Project Title here 2',
    //     subtitle: 'Some Subtitle 2',
    //     description:
    //         'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    //     link: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/',
    // },
];

const useStyles = createUseStyles((theme: any) => ({
    projectsRoot: {
        composes: 'flexColumn stretchSelf justifyCenter',
        fontFamily: 'Prequelrough, sans-serif',
        paddingBottom: theme.spacing(15),
    },
}));

export type ProjectsProps = { image: string; title: string; description?: string; link?: string; subtitle?: string };
export type PageInfoProps = { title: string; subtitle: string; icon: string };

const Projects: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.projectsRoot} id="projects">
            {data.map(
                (item: ProjectsProps, index: number): ReactNode => (
                    <Project {...item} key={index} reverse={index % 2 !== 0} reverseIndex={data.length - index} />
                )
            )}
        </div>
    );
};

export default Projects;
