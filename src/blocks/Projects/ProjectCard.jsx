import React from "react";
import { Group, Card, Header, RichCell, Avatar, Button } from "@vkontakte/vkui";
import { Icon28LogoVkColor } from "@vkontakte/icons";

import { IconGithub, IconDiscord } from "../../icons/icons";

const icons = new Map([
    ["Github", <IconGithub/>],
    ["VK", <Icon28LogoVkColor/>],
    ["Discord", <IconDiscord/>]
]);

export function ProjectCard({ avatar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=", title = "", description = "", links = null, children }) {

    return (
        <Card mode="shadow">
            <Group mode="plain"
                   header={
                       title && <Header style={{ justifyContent: "center", display: "flex" }}>
                           {
                               title
                           }
                       </Header>
                   }
            >
                <RichCell before={
                    !children &&
                    <Avatar src={avatar}
                            size={72}
                            mode="image"
                    />
                }
                          disabled={true}
                          multiline={true}
                          style={{ padding: 0 }}
                          actions={
                              links?.map(({ badge, link }) =>
                                  <Button before={
                                      icons.get(badge)
                                  }
                                          key={link}
                                          target="_blank"
                                          href={link}
                                          mode="secondary"
                                          style={{ padding: 0 }}
                                  />
                              )
                          }
                          key={title}
                >
                    {
                        description || children
                    }
                </RichCell>
            </Group>
        </Card>
    );
}
