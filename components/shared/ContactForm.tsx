import clsx from 'clsx';
import React, { ChangeEvent, FC, FormEvent, ReactNode, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { useResponsive } from '../../hooks/useResponsive';
import { media, sm } from '../../utils/constants';

const INPUT_SPACING = 1.8;
const useStyles = createUseStyles((theme: any) => ({
    fullWidth: {
        composes: 'flexColumn stretchSelf flex1',
    },
    form: {
        position: 'relative',
        composes: 'flexRow',
    },
    left: {
        composes: '$fullWidth',
        marginRight: theme.spacing(INPUT_SPACING / 2),
    },
    right: {
        composes: '$fullWidth',
        marginLeft: theme.spacing(INPUT_SPACING / 2),
    },
    input: {
        boxShadow: 'none',
        borderStyle: 'none',
        backgroundColor: 'rgba(240,243,247,1)',
        border: '1px solid transparent',
        fontSize: 16,
        [media.smDown]: {
            fontSize: 14,
        },
    },
    textInput: {
        marginBottom: theme.spacing(INPUT_SPACING),
    },
    defaultSize: {
        height: 74,
        [media.smDown]: {
            height: 61,
        },
    },
    spacing: {
        composes: 'stretchSelf font-Poppins-regular',
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        borderRadius: 1,
        '&:focus': {
            outline: 'none',
        },
    },
    textArea: {
        composes: 'stretchSelf flex1',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        [media.smDown]: {
            marginBottom: theme.spacing(INPUT_SPACING),
        },
    },
    button: {
        composes: 'font-Poppins-regular',
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 3,
        border: '1px solid #000',
        cursor: 'pointer',
        color: '#000',
        transition: 'background-color .2s,color .2s,border-color .2s',
        '&:hover': {
            backgroundColor: theme.colors.active,
            color: '#fff',
            border: `1px solid ${theme.colors.active}`,
        },
        [media.smDown]: {
            marginTop: theme.spacing(INPUT_SPACING),
        },
    },
    errorInput: {
        color: 'red',
        border: '1px solid red',
    },
}));

interface State {
    name: string;
    email: string;
    company: string;
    message: string;
}
type Props = { className?: string };
const ContactForm: FC<Props> = ({ className }) => {
    const classes = useStyles();
    const isTablet: boolean = useResponsive(sm);
    const [error, setError] = useState<State>({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [values, setValues] = useState<State>({
        name: '',
        company: '',
        email: '',
        message: '',
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

    const inputProps: string[] = [classes.input, classes.textInput, classes.spacing, classes.defaultSize];

    const textArea: ReactNode = (
        <textarea
            className={clsx(
                classes.input,
                classes.textArea,
                classes.spacing,
                error.message ? classes.errorInput : null
            )}
            value={values.message}
            placeholder={error.message || 'Entrez votre message'}
            onChange={handleChange('message')}
            required
        />
    );
    return (
        <form className={clsx(classes.form, className)} onSubmit={onSubmit}>
            {/* ---------------------------------- textarea ---------------------------------- */}
            {!isTablet && <div className={classes.left}>{textArea}</div>}
            {/* ---------------------------------- text input ---------------------------------- */}
            <div className={classes.right}>
                <input
                    className={clsx([...inputProps, error.name ? classes.errorInput : null])}
                    value={values.name}
                    placeholder={error.name || 'Votre nom'}
                    onChange={handleChange('name')}
                    required
                />
                <input
                    className={clsx([...inputProps, error.email ? classes.errorInput : null])}
                    value={values.email}
                    placeholder={error.email || 'Votre email'}
                    onChange={handleChange('email')}
                    required
                    type="email"
                />
                <input
                    className={clsx([...inputProps, error.company ? classes.errorInput : null])}
                    value={values.company}
                    placeholder={error.company || 'Votre entreprise'}
                    onChange={handleChange('company')}
                />
                {isTablet && textArea}
                <button className={clsx(classes.button, classes.spacing, classes.defaultSize)} type="submit">
                    Envoyer
                </button>
            </div>
        </form>
    );
};
export default ContactForm;
