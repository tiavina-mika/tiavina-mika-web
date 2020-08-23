import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { activeColor } from '../../../../utils/constants';

const useStyles = createUseStyles({
    fillWhite: { fill: '#fff' },
    cls5: { fill: '#bdefd1' },
    cls8: { fill: activeColor },
    cls9: { fill: activeColor, stroke: activeColor },
});

const SecurityIcon: FC = () => {
    const classes = useStyles();
    return (
        <g id="img-3" data-name="img">
            <rect className={classes.cls5} x="480.46" y="568.65" width="50.86" height="44.23" rx="4.01" />
            <path
                className={classes.cls8}
                d="M483.48,576.54a2,2,0,1,0-2-2A2,2,0,0,0,483.48,576.54Z"
                transform="translate(2.95 -0.55)"
            />
            <path
                className={classes.cls8}
                d="M489.41,576.54a2,2,0,1,0-2-2A2,2,0,0,0,489.41,576.54Z"
                transform="translate(2.95 -0.55)"
            />
            <path
                className={classes.fillWhite}
                d="M503.06,605.12h-7.15a2.75,2.75,0,0,1-2.76-2.13,3.87,3.87,0,0,1-.09-.9c0-2.79,0-5.59,0-8.38a3,3,0,0,1,1.12-2.52.36.36,0,0,0,.14-.33,9.05,9.05,0,0,1,1.35-6.38A8.61,8.61,0,0,1,502,580.4a8.79,8.79,0,0,1,9,5,9.27,9.27,0,0,1,.81,5.41.42.42,0,0,0,.15.35,3.12,3.12,0,0,1,.88,3.64,12.27,12.27,0,0,0,.09,6.39c.55,2.25-.76,3.89-2.8,3.89Zm5.48-14.48h0a6,6,0,0,0-2.44-6.12,5.41,5.41,0,0,0-6.22.11,6,6,0,0,0-2.27,6h10.93Zm-6.7,9.3h0c0,.3,0,.6,0,.91a1.22,1.22,0,1,0,2.44-.08c0-.55,0-1.1,0-1.64a.45.45,0,0,1,.21-.39,2.53,2.53,0,1,0-3.16-3.93,2.47,2.47,0,0,0,0,3.64,1.32,1.32,0,0,1,.52,1.31Z"
                transform="translate(2.95 -0.55)"
            />
        </g>
    );
};

export default SecurityIcon;
