import React from "react";

import { Card } from "./Card";

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
        <div style={{ padding: "0 1em 1em 1em" }}>
            <h3 className="Group-Title">Знаю</h3>
            <Card className="List">
                <ul>
                    {
                        skills.map((skill, index) =>
                            <li key={index}>
                                { skill }
                            </li>
                        )
                    }
                </ul>
            </Card>
        </div>
    );
}
