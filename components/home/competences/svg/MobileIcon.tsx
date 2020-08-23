import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { activeColor } from '../../../../utils/constants';

const useStyles = createUseStyles({
    fillWhite: { fill: '#fff' },
    cls5: { fill: '#bdefd1' },
    cls10: {
        fill: 'none',
        stroke: activeColor,
        strokeWidth: 4.41,
    },
});

const MobileIcon: FC = () => {
    const classes = useStyles();
    return (
        <g id="img-5" data-name="img">
            <rect className={classes.cls5} x="286.77" y="43.27" width="32.36" height="49.3" rx="4.41" />
            <path
                className={classes.fillWhite}
                d="M288.23,81.17h23.54V51.29a1.48,1.48,0,0,0-1.47-1.49H289.7a1.48,1.48,0,0,0-1.47,1.49Z"
                transform="translate(2.95 -0.55)"
            />
            <path className={classes.cls10} d="M291.18,57.27h14.71" transform="translate(2.95 -0.55)" />
            <path className={classes.cls10} d="M291.18,64.74H300" transform="translate(2.95 -0.55)" />
            <path
                className={classes.fillWhite}
                d="M300,90.14a3,3,0,1,0-2.94-3A3,3,0,0,0,300,90.14Z"
                transform="translate(2.95 -0.55)"
            />
        </g>
    );
};

export default MobileIcon;
