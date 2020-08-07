import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

import { ProjectCard } from "./ProjectCard";
import { Card } from "./Card";

import { randomInteger } from "../functions";

import "./Projects.css";

export function Projects() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get("https://stevecors.herokuapp.com/https://raw.githubusercontent.com/MrZillaGold/MrZillaGold.github.io/master/source/projects.json")
            .then(({ data }) => setProjects(data))
            .catch(() => setProjects("error"));
    }, []);

    return (
        <div style={{ padding: "0 1em 1em 1em" }}>
            <h3 className="Group-Title">
                Пишу
            </h3>
            <div className="Projects" style={projects === "error" ? { display: "block" } : {} }>
                {
                    projects ?
                        projects !== "error" ?
                            projects.map((project, index) =>
                                <ProjectCard key={index}
                                             className="Project-Animation"
                                             {...project}
                                />
                            )
                            :
                            <Card header="Упс..."
                                  className="Project-Animation"
                            >
                                <p style={{ textAlign: "center" }}>
                                    Произошла ошибка при загрузке проектов.
                                    <br/>
                                    Попробуйте позже.
                                </p>
                            </Card>
                        :
                        [...Array(6)].map(() =>
                            <ProjectCard key={Math.random()}
                                         title={
                                             <Skeleton height={18.75}/>
                                         }
                                         description={
                                             <div style={{ flexWrap: "wrap" }}>
                                                 {[...Array(randomInteger(4, 7))].map(() =>
                                                     <Skeleton style={{ marginTop: "5px", display: "flex" }}
                                                               height={18.75}
                                                               width={100 + randomInteger(30, 100)}
                                                               key={Math.random()}
                                                     />
                                                 )}
                                             </div>
                                         }
                            />
                        )
                }
            </div>
        </div>
    );
}
