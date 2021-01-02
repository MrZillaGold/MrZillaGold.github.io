import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar, Card, SimpleCell, Spinner,Headline } from "@vkontakte/vkui";

import "./Friends.css";

export function Friends() {

    const [friends, setFriends] = useState(null);

    useEffect(() => {
        axios.get("https://stevecors.herokuapp.com/https://raw.githubusercontent.com/MrZillaGold/MrZillaGold.github.io/master/friends.json")
            .then(({ data }) => setFriends(data))
            .catch(() => setFriends("error"));
    }, []);

    return (
        <div>
            <h1>
                Спасибо ❤️
            </h1>
            <Card className="Friends"
                  mode="shadow"
                  id="friends-card"
            >
                {
                    friends !== "error" ?
                        friends ?
                            <div className="SimpleCell">
                                <div className="Friends-Container"
                                >
                                    {
                                        friends
                                            .sort(() => .5 - Math.random())
                                            .map(({ username, uuid, vk }, index) =>
                                                <SimpleCell before={
                                                    <Avatar src={`https://api.ashcon.app/mojang/v2/avatar/${uuid}`}
                                                            mode="image"
                                                    />
                                                }
                                                            key={index}
                                                            target="_blank"
                                                            href={`https://vk.com/id${vk}`}
                                                            rel="noopener noreferrer"
                                                >
                                                    { username }
                                                </SimpleCell>
                                            )
                                    }
                                </div>
                            </div>
                            :
                            <Spinner className="Friends-Loader"/>
                        :
                        <Headline className="Friends-Loader"
                                  weight="regular"
                        >
                            Произошла ошибка при загрузке списка друзей. Попробуйте позже.
                        </Headline>
                }
            </Card>
        </div>
    );
}
