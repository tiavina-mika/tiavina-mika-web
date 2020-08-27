import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    fillWhite: { fill: '#fff' },
    cls5: { fill: '#bdefd1' },
    cls6: {
        fill: 'none',
        stroke: theme.color.active,
        strokeWidth: 4.01,
    },

    cls7: {
        fill: 'none',
        stroke: theme.color.active,
        strokeWidth: 3,
    },
    cls4: { fill: '#13bb70' },
}));

type Props = { selected?: boolean; current?: boolean };
const DesignIcon: FC<Props> = ({ selected, current }) => {
    const classes = useStyles();

    /** ---------------------------------------------------------------------------------------------------- */
    /** ---------------------------------- to show in the card --------------------------------------------- */
    /** ---------------------------------------------------------------------------------------------------- */
    if (selected && current) {
        return (
            <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="48.63"
                height="44"
                viewBox="0 0 48.63 44">
                <g>
                    <rect className={classes.cls5} width="39.11" height="44" rx="3.67" />
                    <path
                        className={classes.fillWhite}
                        d="M4.89,4.89H34.22v33A1.22,1.22,0,0,1,33,39.11H6.11a1.22,1.22,0,0,1-1.22-1.22Z"
                    />
                    <path className={classes.cls7} d="M10.37,14.67H23.81" />
                    <path className={classes.cls7} d="M10.37,20.78H28.7" />
                    <path className={classes.cls7} d="M10.37,26.89H28.7" />
                    <path
                        className={classes.cls4}
                        d="M28.77,34.78v4.39h4.4L47.91,24.43a2.46,2.46,0,0,0,0-3.46L47,20a2.43,2.43,0,0,0-3.45,0Z"
                    />
                </g>
            </svg>
        );
    }
    return (
        <g id="img">
            <rect className={classes.cls5} x="74.73" y="568.77" width="39.11" height="44" rx="3.67" />
            <path
                className={classes.fillWhite}
                d="M79.62,573.65H109v33a1.22,1.22,0,0,1-1.22,1.23H80.84a1.23,1.23,0,0,1-1.22-1.23Z"
            />
            <path className={classes.cls7} d="M85.1,583.43H98.55" />
            <path className={classes.cls7} d="M85.1,589.54h18.34" />
            <path className={classes.cls7} d="M85.1,595.65h18.34" />
            <path
                className={classes.cls4}
                d="M103.51,603.55v4.39h4.39l14.74-14.74a2.44,2.44,0,0,0,0-3.46l-.93-.94a2.46,2.46,0,0,0-3.46,0Z"
            />
        </g>
    );
};

export default DesignIcon;
