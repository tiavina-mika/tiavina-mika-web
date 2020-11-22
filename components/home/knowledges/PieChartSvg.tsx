import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    inactiveBar: {
        fill: '#fff',
        stroke: '#eff4f9',
        strokeWidth: 20,
    },
    activeBar: {
        strokeWidth: 20,
        fill: 'none',
        // stroke: '#80ebff',
        strokeLinecap: 'round',
    },
    cls3: {
        fill: 'none',
        stroke: '#e7edf1',
        strokeWidth: 2,
    },
    text: {
        fontSize: 30,
        composes: 'font-ProximaNova-bold',
    },
});

interface ActiveBarAttrI {
    stroke: string;
    pathLength: 0 | 1;
}
interface ActiveBarI {
    hidden: ActiveBarAttrI;
    visible: ActiveBarAttrI;
}
const activeBar: ActiveBarI = {
    hidden: {
        stroke: '#eff4f9',
        pathLength: 0,
    },
    visible: {
        stroke: '#80ebff',
        pathLength: 1,
    },
};
type Props = { total: number; startAnimation: boolean };
const PieChartSvg: FC<Props> = ({ total, startAnimation }) => {
    const classes = useStyles();

    return (
        <motion.svg
            id="PieChartSvg_1"
            data-name="PieChartSvg 1"
            xmlns="http://www.w3.org/2000/svg"
            width="193"
            height="196.02"
            viewBox="0 0 193 196.02">
            <path
                id="inactive-bar"
                className={classes.inactiveBar}
                d="M183,98c0,48.75-38.87,88-86.5,88S10,146.76,10,98,48.87,10,96.5,10,183,49.25,183,98Z"
            />
            <motion.path
                id="active-bar"
                className={classes.activeBar}
                d="M96,12c46.39,0,84,38.28,84,85.5S142.39,183,96,183,12,144.72,12,97.5A86.41,86.41,0,0,1,22.33,56.38"
                variants={activeBar}
                initial="hidden"
                animate={startAnimation ? 'visible' : ''}
                transition={{
                    default: { duration: 2, ease: 'easeInOut' },
                    stroke: { duration: 0.2, ease: [1, 0, 0.8, 1] },
                }}
            />
            <path id="divider" className={classes.cls3} d="M61,100h69" />
            <text id="value" className={classes.text} transform="translate(82.79 85.21)">
                {total}
            </text>
            <text id="unit" className={classes.text} transform="translate(68.49 136)">
                100
            </text>
        </motion.svg>
    );
};

export default PieChartSvg;
