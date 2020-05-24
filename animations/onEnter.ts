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
    exit: { opacity: 0 },
};

const variants = {
    hidden: { y: 50 },
    visible: {
        y: 0,
    },
};
const transition = {
    duration: 1,
};

export const onEnterAnimation = {
    initial: 'hidden',
    animate: 'visible',
    variants,
    transition,
};
