import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    dots: {
        composes: '$isolate $fillNone',
        stroke: '#63bf91',
        strokeWidth: 3.39,
        strokeDasharray: 5.08,
        opacity: 0.4,
    },
    rect: { fill: '#bdefd1' },
});
type Props = { id: string; paths: any; x: string; y: string; dotPath: string; text: string };
const CompetencesBlock: FC<Props> = ({ id, x, y, dotPath, paths, text }) => {
    const classes = useStyles();
    return (
        <g id={id + '-2'} data-name={id}>
            <path id={id + '-p'} className={classes.dots} d={dotPath} transform="translate(2.95 -0.55)" />
            <g id={id + '-content'}>
                <g id="img">
                    <rect className={classes.rect} x={x} y={y} width="50.86" height="44.23" rx="4.01" />
                    {paths.map(({ path, className }, index) => (
                        <path key={index} className={className} d={path} transform="translate(2.95 -0.55)" />
                    ))}
                </g>
                <g id="text-container" transform="translate(2.95 -0.55)">
                    <text fill="#000" x={x} y={y} id="text-path">
                        {text}
                    </text>
                </g>
            </g>
        </g>
    );
};

export default CompetencesBlock;
