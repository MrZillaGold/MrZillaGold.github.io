import React from "react";

export function IconGithub({ width = 28, height = 28, style = {}, className = "" }) {
    return (
        <svg viewBox="0 0 32 32"
             width={width}
             height={height}
             style={style}
             className={`Icon ${className}`}
        >
            <path fillRule="evenodd" fill="#24292e" d="M16,2.46c-7.66,0-13.87,6.21-13.87,13.88c0,6.13,3.97,11.33,9.49,13.16c0.69,0.12,0.95-0.3,0.95-0.67c0-0.33-0.01-1.2-0.02-2.36c-3.86,0.84-4.67-1.86-4.67-1.86C7.24,23,6.33,22.58,6.33,22.58c-1.26-0.86,0.09-0.84,0.09-0.84c1.39,0.09,2.13,1.43,2.13,1.43c1.24,2.12,3.24,1.5,4.04,1.15c0.12-0.9,0.48-1.5,0.88-1.85c-3.08-0.35-6.32-1.54-6.32-6.86c0-1.51,0.54-2.75,1.43-3.73c-0.15-0.34-0.63-1.76,0.12-3.67c0,0,1.16-0.37,3.82,1.42c1.11-0.3,2.29-0.45,3.47-0.46c1.18,0.01,2.36,0.16,3.47,0.46c2.65-1.8,3.81-1.42,3.81-1.42c0.76,1.91,0.28,3.32,0.14,3.67c0.89,0.97,1.43,2.21,1.43,3.73c0,5.33-3.24,6.51-6.34,6.85c0.5,0.43,0.95,1.28,0.95,2.57c0,1.85-0.02,3.35-0.02,3.81c0,0.37,0.25,0.8,0.96,0.67c5.51-1.83,9.49-7.04,9.49-13.16C29.87,8.68,23.66,2.46,16,2.46z"/>
        </svg>
    );
}
