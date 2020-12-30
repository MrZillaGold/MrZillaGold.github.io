import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardGrid, Placeholder, Spinner, useAdaptivity, ViewWidth } from "@vkontakte/vkui";

import { ProjectCard } from "./ProjectCard";

export function Projects() {

    const [projects, setProjects] = useState(null);

    const { viewWidth } = useAdaptivity();

    useEffect(() => {
        axios.get("https://stevecors.herokuapp.com/https://raw.githubusercontent.com/MrZillaGold/MrZillaGold.github.io/master/source/projects.json")
            .then(({ data }) => setProjects(data))
            .catch(() => setProjects("error"));
    }, []);

    return (
        <div style={{ padding: viewWidth <= ViewWidth.MOBILE ? 12 : "0 48px" }}>
            <h1>
                Пишу
            </h1>
            <CardGrid size={projects && projects !== "error" && viewWidth > ViewWidth.MOBILE  ? "m" : "l"}>
                {
                    projects ?
                        projects !== "error" ?
                            projects.map((project, index) =>
                                <ProjectCard key={index}
                                             {...project}
                                />
                            )
                            :
                            <ProjectCard title="Упс...">
                                <Placeholder>
                                    Произошла ошибка при загрузке проектов.
                                    <br/>
                                    Попробуйте позже.
                                </Placeholder>
                            </ProjectCard>
                        :
                        <ProjectCard>
                            <Spinner/>
                        </ProjectCard>
                }
            </CardGrid>
        </div>
    );
}
