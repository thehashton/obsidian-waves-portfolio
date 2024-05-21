import React from 'react';

const DotsPattern = () => {
    const createDots = () => {
        const dots = [];
        const rows = 6;  // Adjust the number of rows as needed
        const cols = 40; // Adjust the number of columns as needed
        const spacing = 20; // Adjust the spacing between dots
        const radius = 2;   // Adjust the radius of each dot

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dots.push(
                    <circle
                        key={`${row}-${col}`}
                        cx={col * spacing}
                        cy={row * spacing}
                        r={radius}
                        fill="var(--maincolor)" // Adjust the color of the dots
                    />
                );
            }
        }
        return dots;
    };

    return (
        <svg width="400" height="120" style={{ background: '#1a1a2e', opacity: '0.5' }}>
            {createDots()}
        </svg>
    );
};

export default DotsPattern;
