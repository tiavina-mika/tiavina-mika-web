import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { screenState } from '../../../reducers/appReducer';
import MobileProjects from './MobileProjects';
import DesktopProjects from './DesktopProjects';

const data = [
    {
        image: 'mac.png',
        title: 'Some Project Title here',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        link: 'htttps://www.facebook.com',
    },
    {
        image: 'mac.png',
        title: 'Some Project Title here 2',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        link: 'htttps://www.facebook.com',
    },
];
export type ProjectsProps = { image: string; title: string; description?: string; link?: string };

const Projects: FC = () => {
    const isMobile = useSelector(screenState);

    return isMobile ? <MobileProjects data={data} /> : <DesktopProjects data={data} />;
};

export default Projects;
