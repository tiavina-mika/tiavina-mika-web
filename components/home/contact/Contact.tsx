import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import BlockTitle from '../../Common/BlockTitle';
import { animate, itemVariants } from '../../../animations/cards';
import { media, lgScreenWidth } from '../../../utils/constants';
import { screenState } from '../../../reducers/appReducer';

const useStyles = createUseStyles((theme: any) => ({
    fullColumn: {
        composes: 'flexColumn stretchSelf',
    },
    centered: {
        composes: 'flexRow justifyCenter alignCenter',
    },
    root: {
        composes: '$fullColumn justifyCenter',
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        // lineHeight: 1.8,
        letterSpacing: '0.68px',
        color: '#fff',
        [media.mdDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    },
    content: {
        composes: '$fullColumn center',
        [media.mdUp]: {
            marginTop: theme.spacing(6),
        },
    },
    center: {
        composes: 'flexRow justifyCenter',
        [media.lgUp]: {
            width: lgScreenWidth + 100,
            marginTop: theme.spacing(4),
        },
        [media.lgDown]: {
            justifyContent: 'flex-start',
        },
    },
    left: {
        composes: 'flexRow flex1',
        '& h6': {
            fontSize: 20,
            lineHeight: 1.3,
            fontWeight: 300,
        },
        // backgroundColor: 'blue',
    },
    middle: {
        composes: 'flexRow flex1',
        backgroundColor: 'green',
    },
    right: {
        composes: 'flexRow flex1',
        backgroundColor: 'yellow',
    },
    contactItems: {
        composes: 'flexColumn',
        marginTop: theme.spacing(6),
    },
    contactItem: {
        composes: '$centered',
        marginBottom: theme.spacing(5),
    },
    contactIcon: {
        // composes: '$center'
        marginRight: theme.spacing(2.5),
    },
    contactDetail: {
        composes: 'flexColumn',
    },
    icon: {
        composes: 'flexRow justifyCenter center',
        border: '1px solid #fff',
        height: 50,
        width: 50,
        borderRadius: '50%',
    },
    label: {},
    value: {
        fontSize: 18,
        opacity: 0.6,
        fontWeight: 300,
        marginTop: theme.spacing(1),
        width: 300,
    },
    items: {
        composes: 'flexColumn flexStart',
        marginBottom: theme.spacing(8),
        '& span': {
            marginLeft: 10,
        },
    },
    item: {
        composes: 'flexColumn justifyCenter center',
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: 90,
        [media.smDown]: {
            marginBottom: 0,
        },
    },
}));

const contacts = [
    {
        label: 'Téléphone',
        icon: 'phone',
        value: '+261341865749',
    },
    {
        label: 'Email',
        icon: 'mail',
        value: 'tiavinamika@gmail.com',
    },
    {
        label: 'Adresse',
        icon: 'home',
        value: 'Lot VN 50B Ankazolava, Ambohitsoa, Antananarivo, Madagascar',
    },
];

const Contact: FC = () => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });
    // /** Components */
    // const Div = isMobile ? 'div' : motion.div;

    // /** Animation */
    // const itemsAnimation = (inView) => (isMobile ? {} : animate(inView));
    // const itemAnimation = isMobile ? {} : itemVariants;

    return (
        <div className={classes.root}>
            <BlockTitle
                title="Contact"
                subtitle="N'hésitez pas à me contacter"
                startAnimation={inView}
                icon="passion"
            />
            <div className={classes.content} ref={ref}>
                <div className={classes.center}>
                    <div className={classes.left}>
                        <h6>
                            Vous recherchez un designer ou un développeur ? Laissez-moi un message, je vous répondrai
                            rapidement !
                        </h6>
                        <div className={classes.contactItems}>
                            {contacts.map((contact, index) => (
                                <div className={classes.contactItem} key={index}>
                                    <div className={classes.contactIcon}>
                                        <div className={classes.icon}>
                                            <img src={`images/icons/${contact.icon}.svg`} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.contactDetail}>
                                        <span className={classes.label}>{contact.label}</span>
                                        <span className={classes.value}>{contact.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.middle}>
                        <h1>Middle</h1>
                    </div>
                    <div className={classes.right}>
                        <h1>Right</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
