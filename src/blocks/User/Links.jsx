import React, { useContext } from "react";
import { Button } from "@vkontakte/vkui";
import { Icon28LogoVkColor, Icon28MoonOutline } from "@vkontakte/icons";

import { IconGithub } from "../../icons/icons";

import { SchemeContext } from "../../hooks/scheme";

import "./Links.css";

export function Links() {

    const { toggleScheme } = useContext(SchemeContext);

    return (
        <div className="Links">
            <Button mode="secondary"
                    className="Link-Button"
                    href="https://vk.com/id233731786"
                    target="_blank"
                    before={
                        <Icon28LogoVkColor/>
                    }
            />
            <Button mode="secondary"
                    className="Link-Button"
                    onClick={toggleScheme}
                    before={
                        <Icon28MoonOutline/>
                    }
            />
            <Button mode="secondary"
                    className="Link-Button"
                    href="https://github.com/MrZillaGold"
                    target="_blank"
                    before={
                        <IconGithub/>
                    }
            />
        </div>
    );
}
