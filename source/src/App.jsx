import React, { useState } from "react";

import { Container, Row } from "react-bootstrap";

import { User } from "./components/User";
import { Minecraft } from "./components/Minecraft";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export function App() {
    const [emoji, setEmoji] = useState("❤️");

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
            <Row className="justify-content-center mb-3">
                <p onDoubleClick={() => setEmoji("💥")}>
                Сделано с { emoji } MrZillaGold
                </p>
            </Row>
        </Container>
    );
}
