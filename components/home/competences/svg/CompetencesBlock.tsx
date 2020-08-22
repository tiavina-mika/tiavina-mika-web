import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
    dots: {
        fill: 'none',
        isolation: 'isolate',
        stroke: '#63bf91',
        strokeWidth: 3.39,
        strokeDasharray: 5.08,
        opacity: 0.4,
    },
    rect: { fill: '#bdefd1' },
    text: {
        composes: 'font-ProximaNova-regular',
        fill: theme.color.secondary,
        fontSize: 18,
        fontWeight: 'bold',
    },
}));
type Props = { rect?: any; id: string; dotsPath: string; text: string; icon: ReactNode; x: number; y: number };
const CompetencesBlock: FC<Props> = ({ id, x, y, dotsPath, icon, text }) => {
    const classes = useStyles();
    return (
        <g id={id + '-2'} data-name={id}>
            <path id={id + '-p'} className={classes.dots} d={dotsPath} transform="translate(2.95 -0.55)" />
            <g id={id + '-content'}>
                {icon}
                <g id="text-container" transform="translate(2.95 -0.55)">
                    <text className={classes.text} x={x} y={y} id="text-path">
                        {text}
                    </text>
                </g>
            </g>
        </g>
    );
};

export default CompetencesBlock;
