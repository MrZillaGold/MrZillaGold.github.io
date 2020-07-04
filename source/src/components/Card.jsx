import React from "react";

import "./Card.css";

export function Card({ children, header, className = "", onDoubleClick = () => null }) {
    return (
      <div className={`Card ${className}`}
           onDoubleClick={onDoubleClick}
      >
          {
              header ?
                  <div className="Card-Header">
                      <b>{ header }</b>
                      <hr className="Card-Header_horizontal"/>
                  </div>
                  :
                  null
          }
          {
              children
          }
      </div>
    );
}
