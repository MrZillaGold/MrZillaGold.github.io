import React, { useState } from "react";

import { randomInteger } from "../../functions";

import "./Footer.css";

const emojis = ["❤️", "😭", "✨", "💥"];

export function Footer() {
    const getRandomEmoji = () => {
        return emojis[randomInteger(0, emojis.length - 1)];
    };

    const [emoji, setEmoji] = useState(getRandomEmoji());

    return (
        <div className="Footer">
            <p onClick={() => setEmoji(getRandomEmoji())}
               className="Footer-Text"
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
