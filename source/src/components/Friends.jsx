import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

import { Card } from "./Card";

import { randomInteger } from "../functions";

import "./Friends.css";

export function Friends() {

    const [friends, setFriends] = useState(null);

    useEffect(() => {
        axios.get("https://stevecors.herokuapp.com/https://raw.githubusercontent.com/MrZillaGold/MrZillaGold.github.io/master/source/friends.json")
            .then(({ data }) => setFriends(data))
            .catch(() => setFriends("error"));
    }, []);

    return (
        <div style={{ padding: "0 3em 3em 3em" }}>
            <h3 className="Group-Title">
                Спасибо ❤️
            </h3>
                {
                    friends !== "error" ?
                    <Card className="Friends">
                        <div className="Friends-Container">
                            {
                                friends ?
                                    friends.map(({ username, uuid, vk }, index) =>
                                        <a className="Friend"
                                           key={index}
                                           target="_blank"
                                           href={`https://vk.com/id${vk}`}
                                           rel="noopener noreferrer"
                                        >
                                            <img src={`https://api.ashcon.app/mojang/v2/avatar/${uuid}`}
                                                 className="Friend-Head"
                                                 alt=""
                                            />
                                            <h5 className="Friend-Name">
                                                { username }
                                            </h5>
                                        </a>
                                    )
                                    :
                                    [...Array(6)].map(() =>
                                        <div className="Friend"
                                             key={Math.random()}
                                        >
                                            <Skeleton className="Friend-Head"
                                                      height={24}
                                                      width={24}
                                            />
                                            <Skeleton className="Friend-Name"
                                                      style={{ marginTop: "2px" }}
                                                      height={20}
                                                      width={80 + randomInteger(10, 70)}
                                            />
                                        </div>
                                    )
                            }
                        </div>
                    </Card>
                        :
                        <Card header="Упс..."
                              className="Project-Animation"
                        >
                            <p style={{ textAlign: "center" }}>
                                Произошла ошибка при загрузке списка друзей.
                                <br/>
                                Попробуйте позже.
                            </p>
                        </Card>
                }
        </div>
    );
}
