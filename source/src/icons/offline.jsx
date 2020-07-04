import React from "react";

export function Offline({ width = 16, height = 16, style = {}, className }) {
    return (
        <svg
            viewBox="0 0 16 16"
            style={{ enableBackground: "new 0 0 16 16", width, height, ...style }}
            className={className}
        >
            <circle style={{ fill: "#2F3136", stroke: "#8D96A1", strokeWidth: "2", strokeMiterlimit: "10" }}
                    cx="8"
                    cy="8"
                    r="7"
            />
        </svg>
    );
}
