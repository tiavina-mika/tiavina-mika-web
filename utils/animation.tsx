export const cardItemsAnimation = {
    container: {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
                delay: 0.2,
            },
        },
    },
    transition: {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.2,
    },
};

export const textItemAnimation = {
    variants: {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
        },
    },
};

export const textItemsAnimation = {
    initial: 'hidden',
    animate: 'visible',
    variants: cardItemsAnimation.container,
    transition: cardItemsAnimation.transition,
};

export const postAnimation = {
    initial: 'hidden',
    animate: 'visible',
    variants: {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    },
    transition: {
        duration: 0.5
    },
};
