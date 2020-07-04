import React from "react";

export function Online({ width = 16, height = 16, style = {}, className }) {
    return (
        <svg
            viewBox="0 0 16 16"
            style={{ enableBackground: "new 0 0 16 16", width, height, ...style }}
            className={className}
        >
            <circle style={{ fill: "#43B581" }}
                    cx="8"
                    cy="8"
                    r="8"
            />
        </svg>
    );
}
