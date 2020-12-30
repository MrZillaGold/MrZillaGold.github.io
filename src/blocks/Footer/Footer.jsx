import React, { useState } from "react";

import { randomInteger } from "../../functions";

export function Footer() {
    const [emoji, setEmoji] = useState(["❤️", "😭", "✨"][randomInteger(0, 2)]);

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p onDoubleClick={() => setEmoji("💥")}
               className="Footer"
            >
                Сделано с { emoji } MrZillaGold
                <img className="Footer-Icon"
                     src={"https://api.ashcon.app/mojang/v2/avatar/MrZillaGold"}
                     alt=""
                />
            </p>
        </div>
    );
}
