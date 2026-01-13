import React, { useState, useEffect } from 'react';

const ReadingProgressBar = () => {
    const [width, setWidth] = useState(0);

    const scrollHeight = () => {
        const el = document.documentElement;
        const ScrollTop = el.scrollTop || document.body.scrollTop;
        const ScrollHeight = el.scrollHeight || document.body.scrollHeight;
        const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        setWidth(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeight);
        return () => window.removeEventListener('scroll', scrollHeight);
    }, []);

    return (
        <>
            <div className="reading-progress-bar" style={{ width: `${width}%` }}></div>
            {width > 2 && (
                 <div style={{ 
                     position: 'fixed', 
                     top: '5px', 
                     right: '10px', 
                     fontSize: '0.8rem', 
                     color: 'var(--primary-color)',
                     zIndex: 1001,
                     fontWeight: 'bold'
                 }}>
                     {Math.round(width)}%
                 </div>
            )}
        </>
    );
};

export default ReadingProgressBar;
