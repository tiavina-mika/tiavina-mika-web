import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import { useWindowSize } from '../hooks/useWindowSize';
import { getScreen } from '../reducers/appReducer';
import { media } from '../utils/constants';
import Header from '../components/shared/Header';
import Competences from '../components/home/competences';
import Projects from '../components/home/projects';

const useStyles = createUseStyles({
    window: {
        [media.mdDown]: {
            paddingLeft: 15,
            paddingRight: 15,
        },
    },
    root: {
        composes: 'flexColumn flexCenter alignCenter stretchSelf flex1',
    },
    main: {
        composes: 'flexColumn stretchSelf flex1',
        backgroundColor: '#000',
        color: '#fff',
        [media.lgDown]: {
            flexDirection: 'column',
        },
    },
    left: {
        composes: 'flexColumn',
        [media.lgUp]: {
            width: '80%',
        },
    },
    right: {
        composes: 'flexColumn',
        [media.lgUp]: {
            width: '20%',
        },
        [media.lgDown]: {
            order: -1,
            alignSelf: 'stretch',
        },
    },
});

const headerDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Home = () => {
    const size = useWindowSize();
    const classes = useStyles({ size });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getScreen(size.width));
    }, []);

    return (
        <div className={classes.root}>
            <Header
                title="Tiavina Michael RALAINIRINA"
                subtitle="FullStack Developer - UI / UX Designer"
                description={headerDescription}
            />
            <Competences />
            <Projects />
        </div>
    );
};

export default Home;
