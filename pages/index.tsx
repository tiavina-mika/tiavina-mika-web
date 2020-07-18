import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import { useWindowSize } from '../hooks/useWindowSize';
import { getScreen } from '../reducers/appReducer';
import { media } from '../utils/constants';
import Competences from '../components/home/Competences';
import About from '../components/home/about/About';
import Presentation from '../components/home/presentation/Presentation';
import Projects from '../components/home/projects/Projects';
import Skills from '../components/home/Skills';
import Interests from '../components/home/Interests';
import Contact from '../components/home/Contact';
import Menu from '../components/menu/Menu';

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

const Home = () => {
    const size = useWindowSize();
    const classes = useStyles({ size });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getScreen(size.width));
    }, []);

    return (
        <div className={classes.root}>
            <Menu />
            <Presentation />
            <div className={classes.main}>
                {/* <div className={clsx(classes.left, classes.window)}> */}
                <Competences />
                <About />
                <Projects />
                <Skills />
                <Interests />
                <Contact />
                {/* </div> */}
                {/* <div className={clsx(classes.right, classes.window)}>
                    <AboutSidebar />
                </div> */}
            </div>
        </div>
    );
};

export default Home;
