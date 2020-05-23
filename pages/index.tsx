import React, { useEffect } from 'react';
// import Head from 'next/head';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import { useWindowSize } from '../hooks/useWindowSize';
import { getScreen } from '../reducers/appReducer';
import Presentation from '../components/presentation/Presentation';
import Block2 from '../components/domain/Domain';

const useStyles = createUseStyles({
    root: {
        composes: 'flexColumn flexCenter alignCenter stretchSelf flex1',
    },
});

const Home = () => {
    const classes = useStyles();
    const size = useWindowSize();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getScreen(size.width));
    });

    return (
        <div className={classes.root}>
            <Presentation />
            <Block2 />
        </div>
    );
};

export default Home;
