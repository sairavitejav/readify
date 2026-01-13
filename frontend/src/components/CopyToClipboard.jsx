import React, { useState } from 'react';
import { FaCopy, FaLink } from 'react-icons/fa';

const CopyToClipboard = ({ text, isLink = false }) => {
    const [showToast, setShowToast] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000); // Toast disappears after 3 seconds
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <>
            <button className="copy-btn" onClick={handleCopy} title="Copy to Clipboard">
                {isLink ? <FaLink /> : <FaCopy />}
                {isLink ? 'Copy Link' : 'Copy'}
            </button>
            
            {showToast && (
                <div className="toast">
                    Copied to clipboard!
                </div>
            )}
        </>
    );
};

export default CopyToClipboard;
