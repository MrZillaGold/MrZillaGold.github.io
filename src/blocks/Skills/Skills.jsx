import React from "react";
import { Card, useAdaptivity, ViewWidth, Div } from "@vkontakte/vkui";

import "./Skills.css";

const skills = [
    "JavaScript",
    "NodeJS",
    "React",
    "Как правильно составлять Google запросы",
    "Все крафты в Minecraft"
];

export function Skills() {

    const { viewWidth } = useAdaptivity();

    return (
        <div style={{ padding: viewWidth <= ViewWidth.MOBILE ? 12 : "0 48px" }}>
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
