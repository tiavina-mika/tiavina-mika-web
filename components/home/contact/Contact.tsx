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
    columnStretch: {
        composes: '$fullColumn flex1',
    },
    root: {
        composes: '$fullColumn justifyCenter',
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        letterSpacing: '0.68px',
        color: '#fff',
        [media.lgDown]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            marginTop: theme.spacing(8),
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
            width: lgScreenWidth - 300,
            marginTop: theme.spacing(4),
        },
        [media.lgDown]: {
            justifyContent: 'flex-start',
            flexDirection: 'column',
        },
        [media.mdLg]: {
            width: 600,
        },
        [media.smMd]: {
            width: '90%',
        },
    },
    left: {
        composes: 'flexRow',
        '& h6': {
            fontSize: 20,
            lineHeight: 1.3,
            fontWeight: 300,
            [media.mdDown]: {
                fontSize: 18,
                lineHeight: 1.5,
            },
        },
        [media.lgUp]: {
            flex: 1,
        },
    },
    right: {
        composes: 'flexRow stretchSelf flex1 justifyCenter',
        [media.lgDown]: {
            marginTop: theme.spacing(6),
        },
        [media.lgUp]: {
            flex: 1,
        },
    },
    formContainer: {
        width: 400,
        [media.lgDown]: {
            width: '100%',
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
        marginRight: theme.spacing(2.5),
        [media.xsDown]: {
            marginRight: theme.spacing(1),
        },
    },
    contactDetail: {
        composes: 'flexColumn',
        [media.xsDown]: {
            marginRight: theme.spacing(1),
            flex: 1,
        },
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
        [media.smUp]: {
            width: 300,
        },
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
        composes: '$columnStretch',
        marginBottom: theme.spacing(3),
    },
    input: {
        composes: 'flexColumn stretchSelf',
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
        composes: '$columnStretch',
    },
    button: {
        backgroundColor: theme.color.primary,
        color: '#fff',
        borderRadius: 30,
        height: 60,
        fontSize: 18,
        width: '100%',
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
        threshold: 0.2,
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

    /** Components */
    const Div = isMobile ? 'div' : motion.div;

    /** Animation */
    const itemsAnimation = (inView) => (isMobile ? {} : animate(inView));
    const itemAnimation = isMobile ? {} : itemVariants;

    return (
        <div className={classes.root} id="contact">
            <BlockTitle title="Contact" subtitle="N'hésitez pas à me contacter" icon="passion" />
            <div className={classes.content} ref={ref}>
                <Div className={classes.center} {...itemsAnimation(inView)}>
                    <Div className={classes.left} {...itemAnimation}>
                        <h6>
                            Vous recherchez un designer ou un développeur ? Laissez-moi un message, je vous répondrai
                            rapidement !
                        </h6>
                        <Div className={classes.contactItems} {...itemsAnimation(inView)}>
                            {contacts.map((contact, index) => (
                                <Div className={classes.contactItem} key={index} {...itemAnimation}>
                                    <div className={classes.contactIcon}>
                                        <div className={classes.icon}>
                                            <img src={`images/icons/${contact.icon}.svg`} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.contactDetail}>
                                        <span className={classes.label}>{contact.label}</span>
                                        <span className={classes.value}>{contact.value}</span>
                                    </div>
                                </Div>
                            ))}
                        </Div>
                    </Div>
                    <motion.form className={classes.right} onSubmit={onSubmit} {...itemAnimation}>
                        <div className={classes.formContainer}>
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
                        </div>
                    </motion.form>
                </Div>
            </div>
        </div>
    );
};

export default Contact;
