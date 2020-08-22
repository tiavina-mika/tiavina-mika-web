import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import CompetencesBlock from './CompetencesBlock';
import WebIcon from './WebIcon';
import MobileIcon from './MobileIcon';
import DatabaseIcon from './DatabaseIcon';
import DesignIcon from './DesignIcon';
import PerformanceIcon from './PerformanceIcon';
import SecurityIcon from './SecurityIcon';

const bottomY = 645;
const topY = 125;

const useStyles = createUseStyles({
    compentencesRoot: {},
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
    cls12: { fill: '#def7eb', fillRule: 'evenod' },
    cls13: { fill: '#fff', fillRule: 'evenod' },
    cls14: { fill: '#fe0854' },
});

const CompetencesSvg: FC = () => {
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
                    <g id="shadow">
                        <g id="bl">
                            <image
                                className={classes.cls2}
                                width="198"
                                height="168"
                                transform="translate(0 523)"
                                xlinkHref="data:image/png;base64,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"
                            />
                            <rect
                                className={classes.fillWhite}
                                x="14"
                                y="537.78"
                                width="167.98"
                                height="137.12"
                                rx="8.8"
                            />
                        </g>
                        <g id="bm">
                            <image
                                className={classes.cls2}
                                width="199"
                                height="168"
                                transform="translate(204 523)"
                                xlinkHref="data:image/png;base64,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"
                            />
                            <rect
                                className={classes.fillWhite}
                                x="218.96"
                                y="537.78"
                                width="167.98"
                                height="137.12"
                                rx="8.8"
                            />
                        </g>
                        <g id="br">
                            <image
                                className={classes.cls2}
                                width="199"
                                height="168"
                                transform="translate(409 523)"
                                xlinkHref="data:image/png;base64,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"
                            />
                            <rect
                                className={classes.fillWhite}
                                x="423.92"
                                y="537.78"
                                width="167.98"
                                height="137.12"
                                rx="8.8"
                            />
                        </g>
                        <g id="tr">
                            <image
                                className={classes.cls2}
                                width="199"
                                height="168"
                                transform="translate(409)"
                                xlinkHref="data:image/png;base64,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"
                            />
                            <rect
                                className={classes.fillWhite}
                                x="423.92"
                                y="14"
                                width="167.98"
                                height="137.12"
                                rx="8.8"
                            />
                        </g>
                        <g id="tm">
                            <image
                                className={classes.cls2}
                                width="199"
                                height="168"
                                transform="translate(204)"
                                xlinkHref="data:image/png;base64,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"
                            />
                            <rect
                                className={classes.fillWhite}
                                x="218.96"
                                y="14"
                                width="167.98"
                                height="137.12"
                                rx="8.8"
                            />
                        </g>
                        <g id="tl">
                            <image
                                className={classes.cls2}
                                width="198"
                                height="168"
                                xlinkHref="data:image/png;base64,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"
                            />
                            <rect className={classes.fillWhite} x="14" y="14" width="167.98" height="137.12" rx="8.8" />
                        </g>
                    </g>
                    <CompetencesBlock
                        id="tl"
                        dotsPath="M92.21,166.46c0,51.62,176.89,47.45,176.89,128.09"
                        x={75}
                        y={topY}
                        text="Web"
                        icon={<WebIcon />}
                    />
                    <CompetencesBlock
                        id="tm"
                        dotsPath="M298.73,164.55v130"
                        x={275}
                        y={topY}
                        text="Mobile"
                        icon={<MobileIcon />}
                    />
                    <CompetencesBlock
                        id="tr"
                        dotsPath="M505.89,166.55c0,51.58-176.7,47.42-176.7,128"
                        x={435}
                        y={topY}
                        text="Base de données"
                        icon={<DatabaseIcon />}
                    />
                    <CompetencesBlock
                        id="br"
                        dotsPath="M509.09,524.55c0-52-178.91-47.79-178.91-129"
                        x={470}
                        y={bottomY}
                        text="Securité"
                        icon={<SecurityIcon />}
                    />
                    <CompetencesBlock
                        id="bm"
                        dotsPath="M299.39,526.55v-131"
                        x={250}
                        y={bottomY}
                        text="Performance"
                        icon={<PerformanceIcon />}
                    />
                    <CompetencesBlock
                        id="bl"
                        dotsPath="M88.45,524.62c0-52,177.82-47.81,177.82-129.07"
                        x={67}
                        y={bottomY}
                        text="Design"
                        icon={<DesignIcon />}
                    />

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
