import React from "react";
import { Image, Media } from "react-bootstrap";

import { Card } from "./Card";

import "./ProjectCard.css";

export function ProjectCard({ avatar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=", title = "", description = "", links = null, ...props }) {
    return (
        <Card header={title}
              className="Project"
             {...props}
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
    );
}
