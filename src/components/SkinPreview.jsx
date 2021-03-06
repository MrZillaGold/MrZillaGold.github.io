import React, { useReducer } from "react";
import { Button, useAdaptivity, ViewWidth } from "@vkontakte/vkui";
import { Icon28Play, Icon28Pause, Icon28DownloadOutline } from "@vkontakte/icons";

import { SkinViewer } from "./components";
import { IconRun, IconWalk } from "../icons/icons";

import "./SkinPreview.css";

export function SkinPreview({ skin, cape, isSlim, username = "", ...rest }) {

    const { viewWidth } = useAdaptivity();

    const [{ paused, walk }, setPreview] = useReducer((currentState, updates) => ({
        ...currentState,
        ...updates
    }), {
        paused: false,
        walk: true
    });

    const togglePreviewAnimation = (action) => {
        switch(action) {
            case "animation":
                return setPreview({
                    walk: !walk
                });
            case "pause":
                return setPreview({
                    paused: !paused
                });
        }
    };

    return (
        <div className="SkinPreview" {...rest}>
            <div className="SkinPreview-Buttons"
                 style={{ padding: viewWidth > ViewWidth.MOBILE ? 20 : 10 }}
            >
                <Button mode="secondary"
                        className="SkinPreview-Button"
                        onClick={() => togglePreviewAnimation("pause")}
                        before={
                            paused ?
                                <Icon28Play/>
                                :
                                <Icon28Pause/>
                        }
                />
                <Button mode="secondary"
                        className="SkinPreview-Button"
                        onClick={() => togglePreviewAnimation("animation")}
                        before={
                            walk ?
                                <IconRun/>
                                :
                                <IconWalk/>
                        }
                />
            </div>
            <div className="SkinPreview-Render">
                <SkinViewer skin={skin}
                            cape={cape}
                            isSlim={isSlim}
                            height={
                                viewWidth > ViewWidth.MOBILE ?
                                    450
                                    :
                                    300
                            }
                            width={
                                viewWidth > ViewWidth.SMALL_TABLET ?
                                    350
                                    :
                                    300
                            }
                            zoom={viewWidth > ViewWidth.MOBILE}
                            onReady={
                                (skinViewer) => setPreview({
                                    skinViewer
                                })
                            }
                            animation={walk ? "walk" : "run"}
                            paused={paused}
                />
            </div>
        </div>
    )
}
