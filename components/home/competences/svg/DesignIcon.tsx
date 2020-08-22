import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    fillNone: { fill: 'none' },
    fillWhite: { fill: '#fff' },
    cls5: { fill: '#bdefd1' },
    cls6: {
        composes: '$fillNone',
        stroke: '#13bb70',
        strokeWidth: 4.01,
    },
});

const DesignSvg: FC = () => {
    const classes = useStyles();
    return (
        <g id="img">
            <rect className={classes.cls5} x="71.86" y="568.65" width="50.86" height="44.23" rx="4.01" />
            <path
                className={classes.fillWhite}
                d="M73.57,580.25h41.54v27.3a1.35,1.35,0,0,1-1.34,1.35H74.91a1.35,1.35,0,0,1-1.34-1.35Z"
                transform="translate(2.95 -0.55)"
            />
            <path className={classes.cls6} d="M83,602.59,99,586.51" transform="translate(2.95 -0.55)" />
            <path className={classes.cls6} d="M96.44,603.14l10.41-10.41" transform="translate(2.95 -0.55)" />
            <path
                className={classes.fillWhite}
                d="M106.06,576.54a2,2,0,1,0-2-2A2,2,0,0,0,106.06,576.54Z"
                transform="translate(2.95 -0.55)"
            />
            <path
                className={classes.fillWhite}
                d="M114.06,576.54a2,2,0,1,0-2-2A2,2,0,0,0,114.06,576.54Z"
                transform="translate(2.95 -0.55)"
            />
        </g>
    );
};

export default DesignSvg;
