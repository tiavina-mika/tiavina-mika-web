import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { activeColor } from '../../../../utils/constants';

const useStyles = createUseStyles({
    fillWhite: { fill: '#fff' },
    cls5: { fill: '#bdefd1' },
    cls6: {
        fill: 'none',
        stroke: activeColor,
        strokeWidth: 4.01,
    },
});

const WebIcon: FC = () => {
    const classes = useStyles();
    return (
        <g id="img-6" data-name="img">
            <rect className={classes.cls5} x="72.56" y="47.89" width="50.86" height="44.23" rx="4.01" />
            <path
                id="fill-white"
                className={classes.fillWhite}
                d="M74.27,59.49h41.54v27.3a1.35,1.35,0,0,1-1.34,1.35H75.6a1.34,1.34,0,0,1-1.33-1.35Z"
                transform="translate(2.95 -0.55)"
            />
            <path id="line-t" className={classes.cls6} d="M80.32,68.75h22.75" transform="translate(2.95 -0.55)" />
            <path id="line-b" className={classes.cls6} d="M80.32,75.52H95" transform="translate(2.95 -0.55)" />
            <path
                id="dot-l"
                className={classes.fillWhite}
                d="M75.58,55.78a2,2,0,1,0-2-2A2,2,0,0,0,75.58,55.78Z"
                transform="translate(2.95 -0.55)"
            />
            <path
                id="dot-r"
                className={classes.fillWhite}
                d="M81.51,55.78a2,2,0,1,0-2-2A2,2,0,0,0,81.51,55.78Z"
                transform="translate(2.95 -0.55)"
            />
        </g>
    );
};

export default WebIcon;
