import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Group, Header, Placeholder, Spinner, useAdaptivity, ViewWidth } from "@vkontakte/vkui";

import { UserCard } from "./UserCard";
import { TabSelect } from "../../../components/TabSelect";
import { Main } from "./modes/Main";
import { BedWars } from "./modes/BedWars";
import { BuildBattle } from "./modes/BuildBattle";
import { Duels } from "./modes/Duels";
import { UHC } from "./modes/UHC";
import { SkyWars } from "./modes/SkyWars";
import { MurderMystery } from "./modes/MurderMystery";
import { TNT } from "./modes/TNT";

import "./Hypixel.css";

export function Hypixel() {

    const { viewWidth } = useAdaptivity();

    const [user, setUser] = useState();
    const [activeTab, setActiveTab] = useState("base");

    const modes = new Map([
        ["base", ["Основная информация", <Main user={user}/>]],
        ["bedwars", ["BedWars", <BedWars user={user}/>]],
        ["skywars", ["SkyWars", <SkyWars user={user}/>]],
        ["buildbattle", ["BuildBattle", <BuildBattle user={user}/>]],
        ["murdermystery", ["Murder Mystery", <MurderMystery user={user}/>]],
        ["tnt", ["TNT Games", <TNT user={user}/>]],
        ["duels", ["Duels", <Duels user={user}/>]],
        ["uhc", ["UHC", <UHC user={user}/>]]
    ]);

    useEffect(() => {
        axios.get("https://api.slothpixel.me/api/players/MrZillaGold")
            .then(({ data }) => setUser(data))
            .catch(() => setUser("error"));
    }, []);

    return (
        <div style={{ padding: 12, width: viewWidth >= ViewWidth.SMALL_TABLET ? 350 : "auto" }}>
            <Card className="Hypixel"
                  mode="shadow"
                  id="hypixel-card"
            >
                <Group mode="plain"
                       header={
                           <Header style={{ textAlign: "center" }}>
                               Статистика Hypixel
                           </Header>
                       }
                       id="hypixel-group"
                >
                    {
                        user ?
                            user !== "error" ?
                                <>
                                    <UserCard user={user}/>
                                    <TabSelect activeTab={activeTab}
                                               setActiveTab={setActiveTab}
                                               tabs={modes}
                                    />
                                    <div style={{ overflowY: "scroll", height: 277 }}>
                                        {
                                            modes.get(activeTab)[1]
                                        }
                                    </div>
                                </>
                                :
                                <Placeholder>
                                    Произошла ошибка при загрузке статистики. Попробуйте позже.
                                </Placeholder>
                            :
                            <Spinner style={{ marginTop: 20, textAlign: "center", height: "auto" }}/>
                    }
                </Group>
            </Card>
        </div>
    );
}
