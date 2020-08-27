import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    white: { fill: '#fff' },
    secondary: { fill: '#bdefd1' },
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
    active: { fill: theme.color.active },
}));

type Props = { active?: boolean };
const DesignIcon: FC<Props> = ({ active }) => {
    const classes = useStyles();

    return (
        <g id="img">
            <rect className={classes.secondary} x="74.73" y="568.77" width="39.11" height="44" rx="3.67" />
            <path
                className={classes.white}
                d="M79.62,573.65H109v33a1.22,1.22,0,0,1-1.22,1.23H80.84a1.23,1.23,0,0,1-1.22-1.23Z"
            />
            <path className={classes.cls7} d="M85.1,583.43H98.55" />
            <path className={classes.cls7} d="M85.1,589.54h18.34" />
            <path className={classes.cls7} d="M85.1,595.65h18.34" />
            <path
                className={active ? classes.secondary : classes.active}
                d="M103.51,603.55v4.39h4.39l14.74-14.74a2.44,2.44,0,0,0,0-3.46l-.93-.94a2.46,2.46,0,0,0-3.46,0Z"
            />
        </g>
    );
};

export default DesignIcon;
