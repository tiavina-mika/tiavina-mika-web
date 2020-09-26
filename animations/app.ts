export const openMenuAnimation = {
    // initial: 'hidden',
    // animate: 'visible',
    variants: {
        visible: { y: 0, opacity: 1 },
        hidden: { y: -30, opacity: 0 },
    },
    transition: {
        duration: 0.8,
    },
};
