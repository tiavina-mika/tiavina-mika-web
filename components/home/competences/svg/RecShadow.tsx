import React, { FC } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { isTop } from '../../../../utils/utils';

const useStyles = createUseStyles({
    blendMode: { mixBlendMode: 'multiply' },
    shadow: { composes: '$blendMode', opacity: 0.1 },
});

type Props = { id: string; transform?: string; xlinkHref: string; x: string; isCurrent: boolean };
const RecShadow: FC<Props> = ({ id, transform, xlinkHref, x, isCurrent }) => {
    const theme = useTheme();

    const classes = useStyles();
    return (
        <g id={id}>
            <image className={classes.shadow} width="199" height="168" transform={transform} xlinkHref={xlinkHref} />
            <rect
                fill={isCurrent ? (theme as any).color.active : '#fff'}
                x={x}
                y={isTop(id) ? '14' : '537.78'}
                width="167.98"
                height="137.12"
                rx="8.8"
            />
        </g>
    );
};

export default RecShadow;
