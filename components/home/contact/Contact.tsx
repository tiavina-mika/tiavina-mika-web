import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import BlockTitle from '../../Common/BlockTitle';
import { animate, itemVariants } from '../../../animations/cards';
import { media, lgScreenWidth } from '../../../utils/constants';
import { screenState } from '../../../reducers/appReducer';
import Button from '../../Common/Button';
import clsx from 'clsx';

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
            marginTop: theme.spacing(8),
        },
    },
    center: {
        composes: 'flexRow justifyCenter',
        paddingBottom: theme.spacing(6),
        [media.lgUp]: {
            width: lgScreenWidth - 200,
            marginTop: theme.spacing(4),
        },
        [media.lgDown]: {
            justifyContent: 'flex-start',
            flexDirection: 'column',
        },
        [media.mdLg]: {
            width: 600,
        },
        [media.mdDown]: {
            width: '90%',
        },
    },
    left: {
        composes: 'flexRow',
        '& h6': {
            fontSize: 20,
            lineHeight: 1.3,
            fontWeight: 300,
        },
        [media.lgUp]: {
            flex: 1,
        },
    },
    right: {
        composes: 'flexColumn',
        [media.lgDown]: {
            marginTop: theme.spacing(6),
        },
        [media.lgUp]: {
            flex: 1,
        },
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
    field: {
        composes: 'flexColumn',
        marginBottom: theme.spacing(3),
    },
    input: {
        border: `1px solid #fff`,
        backgroundColor: '#000',
        height: 60,
        borderRadius: 30,
        paddingLeft: 15,
        paddingRight: 15,
        fontFamily: 'Montserrat',
        color: '#fff',
        fontSize: 14,
        '&:focus': {
            outline: 'none',
        },
        [media.mdUp]: {
            width: 300,
        },
        [media.mdDown]: {
            width: '100%',
        },
    },
    errorInput: {
        border: '1px solid red',
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
    },
    textarea: {
        paddingTop: 10,
    },
    buttonContainer: {
        composes: 'flexRow flex1 stretchSelf',
    },
    button: {
        backgroundColor: theme.color.primary,
        color: '#fff',
        borderRadius: 30,
        height: 60,
        fontSize: 18,

        [media.mdDown]: {
            width: '100%',
        },
        [media.mdUp]: {
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
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

interface State {
    name: string;
    email: string;
    message: string;
}

const Contact: FC = () => {
    const classes = useStyles();
    const isMobile = useSelector(screenState);
    const [error, setError] = useState<State>({
        name: '',
        email: '',
        message: '',
    });

    const [values, setValues] = useState<State>({
        name: '',
        email: '',
        message: '',
    });

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { email, message } = values;
        if (!email) setError({ ...error, email: 'Veuillez entrer votre email' });
        if (message && message.length > 100) {
            setError({ ...error, message: 'Le message ne doit pas depasser 100 caractères' });
            return;
        }
    };

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
                    <form className={classes.right} onSubmit={onSubmit}>
                        <div className={classes.field}>
                            <input
                                placeholder="Votre nom"
                                className={clsx(classes.input, error.name ? classes.errorInput : null)}
                                onChange={handleChange('name')}
                                value={values.name}
                                required
                            />
                        </div>
                        <div className={classes.field}>
                            <input
                                placeholder="Votre email"
                                className={classes.input}
                                type="email"
                                onChange={handleChange('email')}
                                value={values.email}
                                required
                            />
                        </div>
                        <div className={classes.field}>
                            <textarea
                                placeholder="Votre message"
                                className={clsx(
                                    classes.input,
                                    classes.textarea,
                                    error.message ? classes.errorInput : null
                                )}
                                onChange={handleChange('message')}
                                value={values.message}
                                rows={20}
                                required></textarea>
                            {error.message && <span className={classes.errorMessage}>{error.message}</span>}
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button text="Envoyer" type="submit" className={classes.button} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
