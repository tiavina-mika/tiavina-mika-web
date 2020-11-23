import { useEffect, useState } from 'react';

import { useWindowSize } from 'react-use';

export const useResponsive = (screen: number): boolean => {
    const { width } = useWindowSize();
    const [isScreen, setIsScreen] = useState<boolean>(false);

    useEffect(() => {
        setIsScreen(width <= screen);
    }, [width]);

    return isScreen;
};
