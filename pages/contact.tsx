import React from 'react';
import { createUseStyles } from 'react-jss';
import Description from '../components/contact/Description';
import Infos from '../components/contact/infos/Infos';
import ContactForm from '../components/shared/ContactForm';
import Layout from '../components/shared/Layout';

import Page from '../components/shared/Page';
import { media } from '../utils/constants';

const useStyles = createUseStyles((theme: any) => ({
    contact: {
        paddingBottom: theme.spacing(29.7),
        [media.lgUp]: {
            flexDirection: 'column',
            width: 1200,
        },
        [media.mdDown]: {
            flexDirection: 'column',
        },
        [media.smDown]: {
            paddingBottom: theme.spacing(15),
        },
    },
    form: {
        composes: 'stretchSelf',
    },
    infos: {
        composes: 'stretchSelf',
        marginTop: theme.spacing(27),
        [media.smDown]: {
            marginTop: theme.spacing(11),
        },
    },
    description: {
        marginBottom: theme.spacing(5.5),
        [media.smDown]: {
            marginTop: theme.spacing(4.8),
        },
    },
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <Page
            metaTitle="Tiavina Michael Ralainirina Portfolio"
            metaDescription="FullStack Developer from Madagascar."
            pageTitle="DES PROJETS EN TETE?"
            pageSubtitle="N'hésitez pas à me contacter">
            <Layout className={classes.contact}>
                <Description className={classes.description} />
                <ContactForm className={classes.form} />
                <Infos className={classes.infos} />
            </Layout>
        </Page>
    );
};

export default Contact;
