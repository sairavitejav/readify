import React from 'react';
import { FaClock } from 'react-icons/fa';

const ReadingTimeEstimator = ({ content }) => {
    if (!content) return null;

    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return (
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '0.9em' }}>
            <FaClock /> Estimated reading time: {minutes} min
        </span>
    );
};

export default ReadingTimeEstimator;
