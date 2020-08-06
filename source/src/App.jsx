import React, { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";

import { User } from "./components/User.jsx";
import { Minecraft } from "./components/Minecraft.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";
import { Friends } from "./components/Friends";

import { randomInteger } from "./functions";

export function App() {
    useEffect(() => {
        document.getElementById("favicon").href = `https://api.ashcon.app/mojang/v2/avatar/MrZillaGold`;
    }, []);

    const [emoji, setEmoji] = useState(["❤️", "😭", "✨"][randomInteger(0, 2)]);

    return (
        <Container fluid="sm" className="pt-5">
            <Row>
                <User/>
            </Row>
            <Row className="justify-content-center">
                <Minecraft/>
            </Row>
            <Row className="justify-content-center">
                <Projects/>
            </Row>
            <Row className="justify-content-center">
                <Skills/>
            </Row>
            <Row className="justify-content-center">
                <Friends/>
            </Row>
            <Row className="justify-content-center mb-3">
                <p onDoubleClick={() => setEmoji("💥")}
                   className="Footer"
                >
                    Сделано с { emoji } MrZillaGold
                    <img className="Footer-Icon"
                         src={"https://api.ashcon.app/mojang/v2/avatar/MrZillaGold"}
                         alt=""
                    />
                </p>
            </Row>
        </Container>
    );
}
