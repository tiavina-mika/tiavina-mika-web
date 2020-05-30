export const cardItemsAnimation = {
    container: {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2,
                delay: 0.4,
            },
        },
    },
    transition: {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.2,
    },
    exit: { opacity: 0 },
};

export const itemVariants = {
    variants: {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    },
    transition: {
        duration: 0.5,
    },
};

export const animate = (start) => ({
    animate: start ? 'visible' : 'hidden',
    variants: cardItemsAnimation.container,
    transition: cardItemsAnimation.transition,
});
