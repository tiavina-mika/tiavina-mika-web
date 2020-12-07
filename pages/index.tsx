import React from 'react';

import Competences from '../components/home/competences';
import Projects from '../components/home/projects';
import Knowledges from '../components/home/knowledges';
import Contact from '../components/home/contact';
import Page from '../components/shared/Page';

const headerDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Home = () => {
    return (
        <Page
            metaTitle="Tiavina Michael Ralainirina Portfolio"
            metaDescription="FullStack Developer from Madagascar."
            pageTitle="Tiavina Michael RALAINIRINA"
            pageSubtitle="FullStack Developer - UI / UX Designer"
            pageDescription={headerDescription}>
            <Competences />
            <Projects />
            <Knowledges />
            <Contact />
        </Page>
    );
};

export default Home;
