import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import BlockTitle from '../../Common/BlockTitle';
import { media, lgScreenWidth } from '../../../utils/constants';
import PlxComponent from '../../Common/PlxComponent';
import DownloadButton from './DownloadButton';

const useStyles = createUseStyles((theme: any) => ({
    rowStretch: {
        composes: 'flexRow justifyCenter stretchSelf',
    },
    root: {
        composes: 'flexRow flex1 justifyCenter',
        fontFamily: 'Prequelrough, sans-serif',
        paddingBottom: theme.spacing(15),
        [media.lgDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            marginTop: theme.spacing(8),
            paddingBottom: theme.spacing(10),
        },
    },
    content: {
        composes: '$rowStretch',
        [media.lgDown]: {
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: theme.spacing(5),
        },
        [media.lgUp]: {
            width: lgScreenWidth - 400,
            marginTop: theme.spacing(20),
        },
    },
    center: {
        composes: '$rowStretch',
        [media.smLg]: {
            width: '60%',
        },
    },
    left: {
        composes: 'flexColumn center flex1',
        [media.smUp]: {
            '& > img': {
                width: 300,
            },
            flex: 1,
        },
        [media.xsSm]: {
            '& > img': {
                width: '60%',
            },
        },
        [media.xsDown]: {
            '& > img': {
                width: '100%',
            },
        },
        [media.lgUp]: {
            width: 350,
            opacity: 0,
        },
    },
    right: {
        [media.lgUp]: {
            width: 500,
            opacity: 0,
        },
        [media.lgDown]: {
            marginTop: theme.spacing(8),
        },
    },
    name: {
        color: theme.colors.grey,
        fontWeight: '400',
        lineHeight: 1.4,
        textTransform: 'uppercase',
        letterSpacing: 3.5,
    },
    post: {
        color: '#fff',
        fontWeight: '400',
        lineHeight: 1.4,
        textTransform: 'uppercase',
        letterSpacing: 3.5,
        marginTop: 10,
        [media.lgUp]: {
            width: 650,
        },
    },
    descriptionText: {
        lineHeight: 1.8,
        marginTop: theme.spacing(3),
        fontSize: 20,
        [media.mdDown]: {
            fontSize: 16,
        },
    },
    shortDescription: {
        color: theme.colors.subtitle,
        fontFamily: 'Montserrat, sans-serif',
    },
    description: {
        fontFamily: 'Montserrat-Regular, sans-serif',
        color: '#fff',
    },
    buttonContainer: {
        composes: 'flexRow justifyCenter stretchSelf',
        marginTop: theme.spacing(20),
        [media.mdDown]: {
            marginTop: theme.spacing(1.2),
        },
    },
    button: {
        flex: 1,
    },
}));

const textTriggerClass = 'about-text-trigger';

const About: FC = () => {
    const classes = useStyles();

    const textParallaxData = [
        {
            start: `.${textTriggerClass}`,
            duration: '50vh',
            properties: [
                {
                    startValue: 10,
                    endValue: 0,
                    unit: 'vw',
                    property: 'translateX',
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                },
            ],
        },
    ];

    const imageParallaxData = [
        {
            start: `.${textTriggerClass}`,
            duration: '50vh',
            properties: [
                {
                    startValue: -22,
                    endValue: -5,
                    unit: 'vw',
                    property: 'translateX',
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                },
            ],
        },
    ];

    return (
        <div className={classes.root} id="about">
            <BlockTitle title="A propos de moi" subtitle="Qui suis-je" right icon="setting" />
            <div className={classes.content}>
                <div className={classes.center}>
                    <PlxComponent className={classes.left} parallaxData={imageParallaxData}>
                        <img alt="" src="/images/profile2.jpg" />
                        <div className={classes.buttonContainer}>
                            <DownloadButton text="Télécharger mon CV" icon="download" className={classes.button} />
                        </div>
                    </PlxComponent>
                    <PlxComponent
                        className={classes.right}
                        parallaxData={textParallaxData}
                        triggerClass={textTriggerClass}>
                        <h2 className={classes.name}>Tiavina Michael Ralainirina</h2>
                        <h3 className={classes.post}>Développeur FullStack / Web Designer / Lead Developpeur</h3>
                        <div className={clsx(classes.shortDescription, classes.descriptionText)}>
                            <span>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam
                            </span>
                        </div>
                        <div className={clsx(classes.description, classes.descriptionText)}>
                            <span>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                amet, consectetur, adipisci velit, sed quia
                            </span>
                        </div>
                    </PlxComponent>
                </div>
            </div>
        </div>
    );
};

export default About;
