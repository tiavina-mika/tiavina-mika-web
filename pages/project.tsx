import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import { useWindowSize } from '../hooks/useWindowSize';
import { getScreen } from '../reducers/appReducer';
import { media } from '../utils/constants';
// import Menu from '../components/menu/Menu';
import Header from '../components/project/Header';
import Content from '../components/project/Content';

const useStyles = createUseStyles({
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
});

const Project = () => {
    const size = useWindowSize();
    const classes = useStyles({ size });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getScreen(size.width));
    }, []);

    return (
        <div className={classes.root}>
            {/* <Menu /> */}
            <Header />
            <div className={classes.main}>
                <Content />
            </div>
        </div>
    );
};

export default Project;
