import React, { useEffect, useState } from "react";
import { ConfigProvider, AdaptivityProvider } from "@vkontakte/vkui";

import { Layout } from "./Layout";

import { SchemeContext, schemes } from "./hooks/hooks";

export function App() {

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
                    <Layout/>
                </AdaptivityProvider>
            </ConfigProvider>
        </SchemeContext.Provider>
    );
}
