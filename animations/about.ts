const variants = (i: number) => ({
    hidden: { y: 50 * i, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
});
const transition = (i: number) => ({
    duration: 0.5 * i,
    delay: 0.1 * i,
});

export const animate = (start: boolean, i?: number) => ({
    animate: start ? 'visible' : 'hidden',
    variants: variants(i || 1),
    transition: transition(i || 1),
});
