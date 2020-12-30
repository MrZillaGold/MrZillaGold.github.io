import React from "react";
import { useAdaptivity, ViewWidth } from "@vkontakte/vkui";

import { Skin } from "./Skin/Skin";
import { Hypixel } from "./Hypixel/Hypixel";

import "./Minecraft.css";

export function Minecraft() {

    const { viewWidth } = useAdaptivity();

    return (
        <div className="Minecraft" style={viewWidth <= ViewWidth.MOBILE ? { display: "block", height: "auto" } : {}}>
            <h1>
                Играю в Minecraft
            </h1>
            <div style={viewWidth >= ViewWidth.SMALL_TABLET ? { display: "flex", justifyContent: "center", alignItems: "center" } : {}}>
                <Skin/>
                <Hypixel/>
            </div>
        </div>
    );
}
