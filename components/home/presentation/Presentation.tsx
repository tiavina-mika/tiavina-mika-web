import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import About from './About';
import PlxComponent from '../../Common/PlxComponent';

const useStyles = createUseStyles({
    presentation: {
        composes: 'flexRow flexEnd stretchSelf',
        height: '100vh',
        // background: `linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(0,0,0,0.2) 20.29%, rgba(0,0,0,0.1) 80.89%, rgba(0,0,0,0) 99.93%)`,
        // backgroundColor: '#171717',
        // backgroundImage: `url(images/bg.svg)`,
    },
});

const triggerClass = 'presentationHeader-trigger';

const Presentation: FC = () => {
    const classes = useStyles();

    const parallaxData = [
        {
            start: `.${triggerClass}`,
            duration: '40vh',
            easing: 'easeInSine',
            properties: [
                {
                    startValue: '#fff',
                    endValue: '#000',
                    property: 'backgroundColor',
                },
            ],
        },
    ];

    return (
        <PlxComponent
            className={classes.presentation}
            parallaxData={parallaxData}
            triggerClass={triggerClass}
            id="presentation"
            trigger={20}>
            <About />
        </PlxComponent>
    );
};

export default Presentation;
