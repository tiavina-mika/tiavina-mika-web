import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import Text from '../shared/Text';
import { media } from '../../utils/constants';
import Link from '../shared/Link';

const useStyles = createUseStyles((theme: any) => ({
    description: {
        composes: 'flexRow center flex1 stretchSelf',
        [media.smDown]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            color: theme.colors.primary,
        },
    },
    link: {
        marginLeft: theme.spacing(1.4),
        marginTop: theme.spacing(0.75),
        [media.smDown]: {
            marginLeft: 0,
            fontSize: 15,
        },
    },
}));

type Props = { className?: string };
const Description = ({ className }: Props) => {
    const classes = useStyles();

    return (
        <div className={clsx(className, classes.description)}>
            <Text text="Remplissez le formulaire, " />
            <Link
                href="mailto:service@increzia.com"
                text="ou envoyez nous un email"
                className={classes.link}
                isExternalLink
            />
        </div>
    );
};

export default Description;
