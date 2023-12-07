import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function MarginSidebar({children, isOpen}) {
    const [open, setOpen] = useState(isOpen);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        setOpen(isOpen);
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, [isOpen]);

    const handleMediaQueryChange = (mediaQuery) => {
        setIsSmallScreen(mediaQuery.matches);
    };

    const styles = useSpring({
        marginLeft: open ? (isSmallScreen ? '0' : '18rem') : (isSmallScreen ? '0' : '4rem'),
        marginRight: open ? '0' : (isSmallScreen ? '0' : '4rem'),
        config: { duration: 300 },
    });

    return (
        <animated.div style={styles} className='overflow-x-hidden mt-24'>
            {children}
        </animated.div>
    )
}
