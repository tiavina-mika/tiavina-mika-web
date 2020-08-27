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

type Props = { selected?: boolean; isCurrent?: boolean };
const WebIcon: FC<Props> = ({ selected, isCurrent }) => {
    const classes = useStyles();

    /** ---------------------------------------------------------------------------------------------------- */
    /** ---------------------------------- to show in the card --------------------------------------------- */
    /** ---------------------------------------------------------------------------------------------------- */
    if (selected && isCurrent) {
        return (
            <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="50.86"
                height="44.23"
                viewBox="0 0 50.86 44.23">
                <g id="img-6">
                    <rect className={classes.cls5} width="50.86" height="44.23" rx="4.01" />
                    <path
                        id="fill-white"
                        className={classes.fillWhite}
                        d="M4.66,11.05H46.2v27.3a1.36,1.36,0,0,1-1.34,1.35H6a1.34,1.34,0,0,1-1.33-1.35h0Z"
                    />
                    <path id="line-t" className={classes.cls6} d="M10.71,20.31H33.46" />
                    <path id="line-b" className={classes.cls6} d="M10.71,27.08H25.39" />
                    <path id="dot-l" className={classes.fillWhite} d="M6,7.34a2,2,0,1,0-2-2A2,2,0,0,0,6,7.34Z" />
                    <path id="dot-r" className={classes.fillWhite} d="M11.9,7.34a2,2,0,1,0-2-2A2,2,0,0,0,11.9,7.34Z" />
                </g>
            </svg>
        );
    }
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
