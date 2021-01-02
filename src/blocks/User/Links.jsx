import React, { useContext } from "react";
import { Button } from "@vkontakte/vkui";
import { Icon28LogoVkColor, Icon28MoonOutline, Icon28SunOutline } from "@vkontakte/icons";

import { IconGithub } from "../../icons/icons";

import { SchemeContext } from "../../hooks/scheme";

import "./Links.css";

export function Links() {

    const { scheme, toggleScheme } = useContext(SchemeContext);

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
                        scheme === "bright_light" ?
                            <Icon28MoonOutline/>
                            :
                            <Icon28SunOutline/>
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
