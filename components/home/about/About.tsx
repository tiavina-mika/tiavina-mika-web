import React, { FC, useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { motion, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import BlockTitle from '../../Common/BlockTitle';
import { media, lgScreenWidth } from '../../../utils/constants';
import { animate } from '../../../animations/about';
import { downloadButtonAnimation } from '../../../animations/app';
import { screenState } from '../../../reducers/appReducer';
import Button from '../../Common/Button';

const useStyles = createUseStyles((theme: any) => ({
    root: {
        composes: 'flexRow flex1 justifyCenter',
        fontFamily: 'Prequelrough, sans-serif',
        paddingBottom: theme.spacing(30),
        [media.lgUp]: {
            marginTop: theme.spacing(30),
        },
    },
    content: {
        composes: 'flexRow justifyCenter stretchSelf',
        width: lgScreenWidth - 400,
        marginTop: theme.spacing(20),
        // backgroundColor: 'red'
    },
    left: {
        composes: 'flexColumn center flex1',
        flex: 1,
        '& > img': {
            width: 300,
        },
    },
    right: {
        flex: 2,
        '& h3': {
            color: theme.color.grey,
            fontWeight: '400',
            lineHeight: 1.4,
            textTransform: 'uppercase',
            letterSpacing: 3.5,
        },
        '& h2': {
            color: '#fff',
            fontWeight: '400',
            lineHeight: 1.4,
            textTransform: 'uppercase',
            letterSpacing: 3.5,
            marginTop: 10,
            [media.mdUp]: {
                width: 650,
            },
        },
        [media.lgUp]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
    },
    descriptionText: {
        lineHeight: 1.8,
        marginTop: theme.spacing(3),
        fontSize: 20,
    },
    shortDescription: {
        color: theme.color.subtitle,
        fontFamily: 'Montserrat, sans-serif',

        [media.mdUp]: {
            width: 650,
        },
    },
    description: {
        fontFamily: 'Montserrat-Regular, sans-serif',
        color: '#fff',
    },
    button: {
        composes: 'flexRow justifyCenter stretchSelf',
        marginTop: theme.spacing(2),
    },
}));

const About: FC = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const isMobile = useSelector(screenState);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const { scrollYProgress } = useViewportScroll();

    useEffect(() => {
        scrollYProgress.onChange((latest) => setValue(latest));
    }, []);

    /** Components */
    const H3 = isMobile ? 'h3' : motion.h3;
    const H2 = isMobile ? 'h2' : motion.h2;
    const Div = isMobile ? 'div' : motion.div;
    const Img = isMobile ? 'img' : motion.img;

    /** Animation */
    const h3Animation = isMobile ? {} : animate(inView);
    const h2Animation = isMobile ? {} : animate(inView, 2);
    const shortDescriptionAnimation = isMobile ? {} : animate(inView, 3);
    const descriptionAnimation = isMobile ? {} : animate(inView, 3);

    return (
        <div className={classes.root} ref={ref}>
            <BlockTitle title="A propos de moi" subtitle="Qui suis-je" right startAnimation={inView} icon="setting" />
            <div className={classes.content}>
                <div className={classes.left}>
                    <Img
                        alt=""
                        src="/images/profile.jpg"
                        style={inView ? { opacity: value, scale: value } : {}}
                        // style={inView ? { scale: value ? value : 1, rotate: `${value ? value * 10 : 0}deg` } : {}}
                    />
                    <div className={classes.button}>
                        <Button text="Télécharger mon CV" icon="download" animation={downloadButtonAnimation(inView)} />
                    </div>
                </div>
                <div className={classes.right}>
                    <H3 {...h3Animation}>Tiavina Michael Ralainirina</H3>
                    <H2 {...h2Animation}>Développeur FullStack / Web Designer / Lead Developpeur</H2>
                    <Div
                        {...shortDescriptionAnimation}
                        className={clsx(classes.shortDescription, classes.descriptionText)}>
                        <span>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam
                        </span>
                    </Div>
                    <Div {...descriptionAnimation} className={clsx(classes.description, classes.descriptionText)}>
                        <span>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia
                        </span>
                    </Div>
                </div>
            </div>
        </div>
    );
};

export default About;
