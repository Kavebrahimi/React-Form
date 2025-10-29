import React from 'react';

const Stars = () => {
    return (
        <>
            <div className="stars text-blue-400">
                {Array.from({ length: 35 }).map((_, i) => (
                    <div className="star" key={i}></div>
                ))}
            </div>
        </>
    
    );
};

export default Stars;