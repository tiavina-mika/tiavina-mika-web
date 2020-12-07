import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import clsx from 'clsx';

import Info from './Info';
import { media } from '../../../utils/constants';
import SocialLinks from '../SocialLinks';
import { emailPerso, emailPro, emailRecrut, primaryPhone, socialLinks } from '../../../utils/texting';

const useStyles = createUseStyles((theme: any) => ({
    infos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridRowGap: theme.spacing(5),
        [media.smDown]: {
            flex: 1,
            marginLeft: 0,
            marginRight: 0,
            gridTemplateColumns: '1fr',
        },
        [media.smMd]: {
            flex: 1,
            gridTemplateColumns: '1fr 1fr',
        },
    },
    info: {},
    address: {
        marginTop: theme.spacing(2.1),
    },
    link: {
        fontSize: 17,
    },
}));

type Props = { className?: string };
const Infos = ({ className }: Props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={clsx(className, classes.infos)}>
            <Info title="Antananarivo." href="/" hovered={false} className={classes.info}>
                <address>
                    <div>Lot VN 50B, Ankazolava</div>
                    <div className={classes.address}>Ambohitsoa, Antananarivo</div>
                    <div className={classes.address}>Madagascar</div>
                </address>
            </Info>
            <Info title="Besoin d'une question ?" href={'mailto:' + emailPerso} className={classes.info}>
                {emailPerso}
            </Info>
            <Info title="Besoin d'une équipe ?" href={'mailto:' + emailRecrut} className={classes.info}>
                {emailRecrut}
            </Info>
            <Info title="Apellez nous." href={'tel:' + primaryPhone} className={classes.info}>
                {primaryPhone}
            </Info>
            <Info title="Travailler avec nous." href={'mailto:' + emailPro} className={classes.info}>
                {emailPro}
            </Info>
            <Info title="Social." className={classes.info}>
                <SocialLinks
                    links={socialLinks}
                    className={classes.link}
                    color={(theme as any).colors.primary}
                    hoveredColor={(theme as any).colors?.active}
                />
            </Info>
        </div>
    );
};

export default Infos;
