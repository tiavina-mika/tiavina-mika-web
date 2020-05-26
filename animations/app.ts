export const downloadButtonAnimation = (start: boolean) => ({
    animate: start ? 'in' : 'out',
    variants: {
        in: { y: 30, opacity: 0 },
        out: { y: 0, opacity: 1 },
    },
    transition: {
        duration: 1,
        delay: 0.5,
    },
});

export const turnIndefinetily = (start: boolean) => {
    if (!start) return {};
    return {
        transition: {
            loop: Infinity,
            ease: 'linear',
            duration: 2,
        },
        animate: {
            rotate: 360,
        },
    };
};
