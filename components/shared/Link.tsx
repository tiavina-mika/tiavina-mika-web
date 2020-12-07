import React, { ElementType, Fragment, ReactNode } from 'react';
import NextLink from 'next/link';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

type StyleProps = { color?: string; hoveredColor?: string; underlineHeight?: number };
const useStyles = createUseStyles((theme: any) => ({
    button: {
        backgroundColor: 'transparent',
        cursor: 'pointer',
        border: 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    link: {
        composes: 'font-Poppins-regular',
        display: 'inline-block',
        position: 'relative',
        textDecoration: 'none',
        overflow: 'hidden',
        lineHeight: 1,
        color: ({ color }: StyleProps) => color || theme.colors.primary,
        fontSize: 18,
        '&:hover': {
            color: ({ color, hoveredColor }: StyleProps) => hoveredColor || color || theme.colors.primary,
        },
    },
    animatedLink: {
        /** distance between the text and the line */
        paddingBottom: 5,
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '0',
            width: '100%',
            backgroundColor: ({ color }: StyleProps) => color || theme.colors.primary,
            opacity: '.6',
            height: ({ underlineHeight }: StyleProps) => underlineHeight,
            transition: 'left .5s cubic-bezier(.555,.205,.295,.975)',
            boxSizing: 'border-box',
            border: '0 solid #e2e8f0',
        },
        '&:hover::after': {
            left: '100%',
        },
    },
}));

type LinkProps = {
    href?: string;
    className?: string;
    text?: string;
    animate?: boolean;
    isExternalLink?: boolean;
    children?: ReactNode;
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
    isButton?: boolean;
};

export type Props = LinkProps & StyleProps;
const Link = ({
    isButton = false,
    text,
    href,
    className,
    color,
    hoveredColor,
    animate = true,
    children,
    isExternalLink = false,
    underlineHeight = 1,
    onClick,
}: Props) => {
    const classes = useStyles({ color, hoveredColor, underlineHeight });

    const classNamesProps: (string | boolean | undefined)[] = [
        classes.link,
        animate && classes.animatedLink,
        className,
    ];

    if (isButton) {
        return (
            <button className={clsx([...classNamesProps], classes.button)} type="button" onClick={onClick}>
                {children || text}
            </button>
        );
    }
    const LinkComponent: ElementType = isExternalLink && href ? Fragment : NextLink;
    const otherProps = isExternalLink && href ? {} : { href, passHref: true };

    return (
        <LinkComponent {...otherProps}>
            <a className={clsx([...classNamesProps])} href={href} onClick={onClick}>
                {children || text}
            </a>
        </LinkComponent>
    );
};

export default Link;
