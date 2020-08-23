import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { competenseSvgTopY, competenseSvgBottomY } from '../../../../utils/constants';
import { isTop } from '../../../../utils/utils';

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
type Props = { rect?: any; id: string; dotsPath: string; label: string; icon: ReactNode; x: number };
const CompetencesBlock: FC<Props> = ({ id, x, dotsPath, icon, label }) => {
    const classes = useStyles();

    return (
        <g id={id + '-2'} data-name={id}>
            <path id={id + '-p'} className={classes.dots} d={dotsPath} transform="translate(2.95 -0.55)" />
            <g id={id + '-content'}>
                {icon}
                <g id="text-container" transform="translate(2.95 -0.55)">
                    <text
                        className={classes.text}
                        x={x}
                        y={isTop(id) ? competenseSvgTopY : competenseSvgBottomY}
                        id={'text-path' + id}>
                        {label}
                    </text>
                </g>
            </g>
        </g>
    );
};

export default CompetencesBlock;
