import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { media } from '../../../utils/constants';
import Text from '../../shared/Text';

const useStyles = createUseStyles((theme: any) => ({
    centered: {
        composes: 'flexRow justifyCenter center',
    },
    details: {
        composes: 'flexColumn',
        fontSize: 20,
        letterSpacing: 0.68,
    },
    title: {
        fontSize: 24,
        lineHeight: 1.4,
        width: '80%',
    },
    contactItems: {
        composes: 'flexColumn',
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
        border: '1px solid #000',
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
}));

interface Contact {
    id: number;
    label: string;
    icon: string;
    value: string;
}
const contacts: Contact[] = [
    {
        id: 1,
        label: 'Téléphone',
        icon: 'phone',
        value: '+261341865749',
    },
    {
        id: 2,
        label: 'Email',
        icon: 'mail',
        value: 'tiavinamika@gmail.com',
    },
    {
        id: 3,
        label: 'Adresse',
        icon: 'home',
        value: 'Lot VN 50B Ankazolava, Ambohitsoa, Antananarivo, Madagascar',
    },
];

type Props = { className?: string };
const Details: FC<Props> = ({ className }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.details, className)}>
            <div className={classes.contactItems}>
                {contacts.map(
                    (contact: Contact): ReactNode => (
                        <div className={classes.contactItem} key={contact.id}>
                            <div className={classes.contactIcon}>
                                <div className={classes.icon}>
                                    <img src={`images/icons/${contact.icon}.svg`} alt="" />
                                </div>
                            </div>
                            <div className={classes.contactDetail}>
                                <Text className={classes.label} text={contact.label} />
                                <Text className={classes.value} text={contact.value} />
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Details;
