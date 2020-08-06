import React from "react";

import "./Card.css";

export function Card({ children, header, className = "", ...props }) {
    return (
      <div className={`Card ${className}`}
           {...props}
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
