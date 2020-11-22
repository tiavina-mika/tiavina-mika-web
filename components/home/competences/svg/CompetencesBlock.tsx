import React, { FC, ReactNode } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import clsx from 'clsx';

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
    dotsActive: {
        stroke: theme.colors.active,
        opacity: 1,
    },
    dotsInactive: {
        stroke: '#63bf91',
        opacity: 0.4,
    },
    rect: { fill: '#bdefd1' },
    text: {
        composes: 'font-ProximaNova-regular',
        fontSize: 18,
        fontWeight: 'bold',
    },
}));
type Props = {
    rect?: any;
    id: string;
    dotsPath: string;
    label: string;
    icon: (value?: boolean) => ReactNode;
    x: number;
    isCurrent: boolean;
};
const CompetencesBlock: FC<Props> = ({ id, x, dotsPath, icon, label, isCurrent }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <g id={id + '-2'} data-name={id}>
            <path
                id={id + '-p'}
                className={clsx(classes.dots, isCurrent ? classes.dotsActive : classes.dotsInactive)}
                d={dotsPath}
                transform="translate(2.95 -0.55)"
            />
            <g id={id + '-content'}>
                {icon(isCurrent)}
                <g id="text-container" transform="translate(2.95 -0.55)">
                    <text
                        fill={isCurrent ? '#fff' : (theme as any).colors.secondary}
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
