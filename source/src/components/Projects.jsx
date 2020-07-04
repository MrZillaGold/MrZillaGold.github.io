import React from "react";

import { Media, Image } from "react-bootstrap";

import { Card } from "./Card";

import { VK, Discord, Github } from "../icons/icons";
import NameMC from "../assets/NameMC.png";
import VimeWorld from "../assets/VimeWorld.png";
import vk from "../assets/VK.png";
import steve from "../assets/steve.png"
import discord from "../assets/Discord.png";


import "./Projects.css";

const projects = [
    {
        avatar: steve,
        title: "Steve - Minecraft Бот",
        description: "Бот для ВКонтакте и Discord с различными инструментами для упрощения игры Minecraft",
        links: [
            {
                badge: VK,
                link: "https://vk.com/club175914098"
            },
            {
                badge: Discord,
                link: "https://discord.com/oauth2/authorize?client_id=714391808976617512&permissions=388160&scope=bot"
            }
        ]
    },
    {
        avatar: steve,
        title: "Steve - Minecraft Помощник",
        description: "Сервис на платформе VKMiniApps с различными инструментами для упрощения игры Minecraft",
        links: [
            {
                badge: VK,
                link: "https://vk.com/app7078246"
            }
        ]
    },
    {
        avatar: discord,
        title: "VK2Discord",
        description: "Автоматическая публикация записей из группы или профиля ВКонтакте в канал Discord",
        links: [
            {
                badge: Github,
                link: "https://github.com/MrZillaGold/VK2Discord"
            }
        ]
    },
    {
        avatar: NameMC,
        title: "NameMCWrapper",
        description: "ES6 библиотека для получения данных с сайта NameMC.com",
        links: [
            {
                badge: Github,
                link: "https://github.com/MrZillaGold/NameMCWrapper"
            }
        ]
    },
    {
        avatar: vk,
        title: "RconVK",
        description: "Бот для удалённого управления сервером через Rcon для ВКонтакте",
        links: [
            {
                badge: Github,
                link: "https://github.com/MrZillaGold/RconVK"
            }
        ]
    },
    {
        avatar: VimeWorld,
        title: "VimeWidget",
        description: "Виджет с информацией о гильдии VimeWorld для группы ВКонтакте",
        links: [
            {
                badge: Github,
                link: "https://github.com/MrZillaGold/VimeWidget"
            }
        ]
    }
];

export function Projects() {
    return (
        <div style={{ padding: "0 1em 1em 1em" }}>
            <h3 className="Group-Title">Пишу проекты</h3>
            <div className="Projects">
                {
                    projects.map(({ avatar, title, description, links }, index) =>
                        <Card header={title}
                              className="Project"
                              key={index}
                        >
                            <Media style={{ alignItems: "center" }}>
                                <Image className="Project-Avatar"
                                       rounded
                                       width={80}
                                       height={80}
                                       src={avatar}
                                       alt=""
                                />
                                <Media.Body className="Project-Description">
                                    { description }
                                    {
                                        links ?
                                            <div style={{ marginTop: "10px" }}>
                                                <b>Ссылки:</b>
                                                <br/>
                                                <div style={{ display: "flex" }}>
                                                {
                                                    links.map(({ badge, link }, index) =>
                                                        <a target="_blank"
                                                           href={link}
                                                           rel="noopener noreferrer"
                                                           className="Project-Link_icon"
                                                           key={index}
                                                        >
                                                            <img src={badge}
                                                                 width={32}
                                                                 height={32}
                                                                 alt=""
                                                            />
                                                        </a>
                                                    )
                                                }
                                                </div>
                                            </div>
                                            :
                                            null
                                    }
                                </Media.Body>
                            </Media>
                        </Card>
                    )
                }
            </div>
        </div>
    );
}
