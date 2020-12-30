import React from "react";
import { Card, Div } from "@vkontakte/vkui";

import "./Skills.css";

const skills = [
    "JavaScript",
    "NodeJS",
    "React",
    "Как правильно составлять Google запросы",
    "Все крафты в Minecraft"
];

export function Skills() {

    return (
        <div>
            <h1>
                Знаю
            </h1>
            <Card mode="shadow">
                <Div>
                    <ul>
                        {
                            skills.map((skill, index) =>
                                <li key={index}>
                                    { skill }
                                </li>
                            )
                        }
                    </ul>
                </Div>
            </Card>
        </div>
    );
}
