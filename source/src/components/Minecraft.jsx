import axios from "axios";
import React, { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import Skinview3d from "react-skinview3d";
import * as SkinView from "skinview3d";

import { Card } from "./Card";

import { getDate } from "../functions";

import { Offline, Online } from "../icons/icons.js";

import "./Minecraft.css";

export function Minecraft() {
    const [skin, setSkin] = useState("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");
    const [skinViewer, setSkinViewer] = useState(null);
    const [run, setRun] = useState(false);


    const [hypixel, setHypixel] = useState(null);

    useEffect(() => {
        axios.get("https://stevecors.herokuapp.com/https://api.ashcon.app/mojang/v2/user/MrZillaGold")
            .then(response => response.data)
            .then(({ textures }) => {
                setSkin(textures.skin.data)
            })
            .catch(console.log);

        axios.get("https://stevecors.herokuapp.com/https://api.slothpixel.me/api/players/MrZillaGold")
            .then(response => setHypixel(response.data))
            .catch(() => setHypixel("error"));
    })

    return (
        <div className="p-5">
            <h3 className="Group-Title">Играю в Minecraft</h3>
            <div className="Minecraft">
                <Card className="Minecraft-SkinViewer"
                      onDoubleClick={() => {
                          skinViewer.animation.handles.forEach((animation) => animation.remove())

                          if (run) {
                              skinViewer.animation.add(SkinView.WalkingAnimation)
                          } else {
                              skinViewer.animation.add(SkinView.RunningAnimation)
                          }

                          setRun(!run);
                      }}
                >
                    <Skinview3d
                        skinUrl={`data:image/png;base64,${skin}`}
                        height={300}
                        width={200}
                        onReady={skinViewer => {
                            setSkinViewer(skinViewer);

                            skinViewer.animation = new SkinView.CompositeAnimation();

                            skinViewer.animation.add(SkinView.WalkingAnimation);

                        }}
                    />
                </Card>
                <Card className="Minecraft-Info"
                      header="Hypixel"
                >
                    <div style={{ textAlign: "center" }}>
                    {
                        hypixel ?
                            hypixel !== "error" ?
                            <>
                                {
                                    hypixel.online ?
                                        <div>
                                            <Online className="Minecraft-StatusIcon"/> Онлайн
                                        </div>
                                        :
                                        <div>
                                            <Offline className="Minecraft-StatusIcon"/> Оффлайн
                                            <br/>
                                            Последний вход: <b>{getDate(hypixel.last_login)}</b>
                                        </div>
                                }
                                Первый вход: <b>{getDate(hypixel.first_login)}</b>
                                <br/>
                                <b>{Math.trunc(hypixel.level)}</b> Уровень
                                <br/>
                                Последняя игра: <b>{hypixel.last_game}</b>
                                <br/>
                                Очки достижений: <b>{hypixel.achievement_points.toLocaleString()}</b>
                                <br/>
                                Карма: <b>{hypixel.karma.toLocaleString()}</b>
                            </>
                                :
                                <>
                                    Произошла ошибка при загрузке данных :(
                                </>
                            :
                            <>
                                <Skeleton style={{ display: "flex", marginTop: "5px" }}
                                          height={18.75}
                                          count={9}
                                />
                            </>
                    }
                    </div>
                </Card>
            </div>
        </div>
    );
}
