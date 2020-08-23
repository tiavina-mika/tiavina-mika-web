import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import CompetencesBlock from './CompetencesBlock';
import RecShadow from './RecShadow';

const useStyles = createUseStyles({
    compentencesRoot: {
        composes: 'flexRow justifyCenter flex1',
    },
    isolate: { isolation: 'isolate' },
    blendMode: { mixBlendMode: 'multiply' },
    fillNone: { fill: 'none' },
    cls1: { composes: '$isolate' },
    cls2: { composes: '$blendMode', opacity: 0.1 },
    fillWhite: { fill: '#fff' },
    cls4: {
        composes: '$isolate $fillNone',
        stroke: '#63bf91',
        strokeWidth: 3.39,
        strokeDasharray: 5.08,
        opacity: 0.4,
    },
    cls5: { fill: '#bdefd1' },
    cls6: {
        composes: '$fillNone',
        stroke: '#13bb70',
        strokeWidth: 4.01,
    },
    cls7: { stroke: '#5e709d' },
    cls8: { fill: '#13bb70' },
    cls9: { fill: '#13bb70', stroke: '#13bb70' },
    cls10: {
        composes: '$fillNone',
        stroke: '#13bb70',
        strokeWidth: 4.41,
    },
    cls11: { opacity: 0.15, composes: '$blendMode' },
    cls12: { fill: '#bcffde', fillRule: 'evenod' },
    cls13: { fill: '#fff', fillRule: 'evenod' },
    cls14: { fill: '#fe0854' },
});

type Props = { current: string; items: any };
const CompetencesSvg: FC<Props> = ({ current, items }) => {
    const classes = useStyles();
    return (
        <div className={classes.compentencesRoot}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="608"
                height="691"
                viewBox="0 0 608 691">
                <g className={classes.cls1}>
                    {/* ------------------------------ Shadows ---------------------------------------- */}
                    <g id="shadow">
                        {items.map((item, i) => (
                            <RecShadow id={item.id} {...item.container} key={i} isCurrent={item.name === current} />
                        ))}
                    </g>
                    {/* ------------------------------ Block ---------------------------------------- */}
                    {items.map((item, i) => (
                        <CompetencesBlock {...item} key={i} isCurrent={item.name === current} />
                    ))}

                    {/* ------------------------------ Center Icon ---------------------------------------- */}
                    <g id="center">
                        <g id="bg-int-ext">
                            <image
                                className={classes.cls11}
                                width="200"
                                height="201"
                                transform="translate(203 242)"
                                xlinkHref="data:image/png;base64,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"
                            />
                            <path
                                className={classes.cls12}
                                d="M299.23,426.69a84.77,84.77,0,1,0-84.76-84.77A84.77,84.77,0,0,0,299.23,426.69Z"
                                transform="translate(2.95 -0.55)"
                            />
                        </g>
                        <g id="bg-int-path">
                            <image
                                className={classes.cls2}
                                width="142"
                                height="142"
                                transform="translate(232 271)"
                                xlinkHref="data:image/png;base64,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"
                            />
                            <path
                                className={classes.cls13}
                                d="M299.23,403.55a61.63,61.63,0,1,0-61.64-61.63A61.64,61.64,0,0,0,299.23,403.55Z"
                                transform="translate(2.95 -0.55)"
                            />
                        </g>
                        <g id="logo">
                            <g id="logo-shadow">
                                <path
                                    className={classes.cls14}
                                    d="M317.58,314.83h4.13a1.16,1.16,0,0,1,1.26,1v36.43a1.16,1.16,0,0,1-1.26,1h-4a1.15,1.15,0,0,1-1.25-1V324.48l.33,1.7-11.26,21.15a1.31,1.31,0,0,1-1.15.61h-3a1.27,1.27,0,0,1-1.14-.6L289,326.7l.32-2.22v27.78a1.16,1.16,0,0,1-1.25,1h-4a1.15,1.15,0,0,1-1.25-1V315.83a1.15,1.15,0,0,1,1.25-1h4.16a1.31,1.31,0,0,1,1.15.61l12.39,22.68a1.37,1.37,0,0,0,1.91.37,1.34,1.34,0,0,0,.38-.37l12.39-22.68A1.27,1.27,0,0,1,317.58,314.83Z"
                                    transform="translate(2.95 -0.55)"
                                />
                            </g>
                            <g id="logo-text">
                                <path
                                    className={classes.cls8}
                                    d="M314.8,314.83h4.14a1.16,1.16,0,0,1,1.25,1v36.43a1.16,1.16,0,0,1-1.25,1h-4a1.15,1.15,0,0,1-1.25-1V324.48l.33,1.7-11.26,21.15a1.31,1.31,0,0,1-1.15.61h-3a1.27,1.27,0,0,1-1.14-.6L286.19,326.7l.32-2.22v27.78a1.16,1.16,0,0,1-1.25,1h-4a1.15,1.15,0,0,1-1.25-1V315.83a1.15,1.15,0,0,1,1.29-1h4.14a1.3,1.3,0,0,1,1.14.61L299,338.12a1.37,1.37,0,0,0,1.91.37,1.34,1.34,0,0,0,.38-.37l12.39-22.68A1.27,1.27,0,0,1,314.8,314.83Z"
                                    transform="translate(2.95 -0.55)"
                                />
                                <path
                                    className={classes.cls8}
                                    d="M294.72,358.34h1.41V368.9h-1.46V361l.07.46-2.63,6h-1.06l-2.6-5.85.07-.61v7.91h-1.47V358.34h1.4l3.13,7Z"
                                    transform="translate(2.95 -0.55)"
                                />
                                <path
                                    className={classes.cls8}
                                    d="M298.62,358.34h1.49v1.49h-1.49Zm0,3h1.49v7.54h-1.49Z"
                                    transform="translate(2.95 -0.55)"
                                />
                                <path
                                    className={classes.cls8}
                                    d="M302.39,358.34h1.49V368.9h-1.49ZM303,366l3.92-4.68h1.76l-5.77,6.47Zm1.77-1.49,1-1,3.25,5.35h-1.59Z"
                                    transform="translate(2.95 -0.55)"
                                />
                                <path
                                    className={classes.cls8}
                                    d="M310.66,368.43a2.15,2.15,0,0,1-.7-1.75,2.08,2.08,0,0,1,.64-1.68,2.89,2.89,0,0,1,1.93-.56h2.16l.11,1.19h-2.26a1.31,1.31,0,0,0-.88.26,1.17,1.17,0,0,0,.1,1.64,2,2,0,0,0,1.17.28,3.29,3.29,0,0,0,1.28-.19.61.61,0,0,0,.42-.56l.15,1.06a2.07,2.07,0,0,1-.48.5,2.41,2.41,0,0,1-.68.29,3.53,3.53,0,0,1-.85.1A3.23,3.23,0,0,1,310.66,368.43Zm4-4.31a1.61,1.61,0,0,0-.4-1.15,1.54,1.54,0,0,0-1.13-.41,3,3,0,0,0-.9.14,2.41,2.41,0,0,0-.77.38l-1.09-.74a2.78,2.78,0,0,1,1.14-.8,4.25,4.25,0,0,1,1.54-.29,3.65,3.65,0,0,1,1.62.33,2.41,2.41,0,0,1,1,1,3.29,3.29,0,0,1,.38,1.48v4.84h-1.42Z"
                                    transform="translate(2.95 -0.55)"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default CompetencesSvg;
