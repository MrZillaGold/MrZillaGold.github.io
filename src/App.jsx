import React, { useEffect, useState } from "react";
import { ConfigProvider, Panel, AdaptivityProvider, AppRoot, useAdaptivity, ViewWidth } from "@vkontakte/vkui";

import { SchemeContext, schemes } from "./hooks/hooks";

import { User } from "./blocks/User/User.jsx";
import { Minecraft } from "./blocks/Minecraft/Minecraft.jsx";
import { Projects } from "./blocks/Projects/Projects.jsx";
import { Skills } from "./blocks/Skills/Skills";
import { Friends } from "./blocks/Friends/Friends";
import { Footer } from "./blocks/Footer/Footer";

export function App() {

    const { viewWidth } = useAdaptivity();

    const getStorageScheme = () => {
        const storageScheme = localStorage.getItem("scheme");

        if (schemes.includes(storageScheme)) {
            return storageScheme;
        } else {
            return null;
        }
    };

    const [scheme, setScheme] = useState(getStorageScheme() || "space_gray");

    const toggleScheme = () => {
        const newScheme = scheme === "bright_light" ? "space_gray" : "bright_light";

        setScheme(newScheme);

        localStorage.setItem("scheme", newScheme);
    };

    useEffect(() => {
        document.getElementById("favicon").href = `https://api.ashcon.app/mojang/v2/avatar/MrZillaGold`;
    }, []);

    return (
        <SchemeContext.Provider value={{
            scheme,
            toggleScheme
        }}>
            <ConfigProvider scheme={scheme}>
                <AdaptivityProvider>
                    <AppRoot>
                        <Panel id="main">
                            <div style={{ padding: viewWidth > ViewWidth.MOBILE ? "0 48px" : 12 }}>
                                <User/>
                                <Minecraft/>
                                <Projects/>
                                <Skills/>
                                <Friends/>
                                <Footer/>
                            </div>
                        </Panel>
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
        </SchemeContext.Provider>
    );
}
