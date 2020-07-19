import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { screenState } from '../../../reducers/appReducer';
import MobileProjects from './MobileProjects';
import DesktopProjects from './DesktopProjects';

const pageInfo = {
    title: 'Projets',
    subtitle: "Projets sur lesquels j'ai travaille",
    icon: 'projects',
};

const data = [
    {
        image: 'mac.png',
        title: 'Some Project Title here',
        subtitle: 'Some Subtitle',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        link: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/',
    },
    {
        image: 'mac.png',
        title: 'Some Project Title here 2',
        subtitle: 'Some Subtitle 2',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        link: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/',
    },
];
export type ProjectsProps = { image: string; title: string; description?: string; link?: string; subtitle?: string };
export type PageInfoProps = { title: string; subtitle: string; icon: string };
const Projects: FC = () => {
    const isMobile = useSelector(screenState);

    return isMobile ? (
        <MobileProjects data={data} pageInfo={pageInfo} />
    ) : (
        <DesktopProjects data={data} pageInfo={pageInfo} />
    );
};

export default Projects;
