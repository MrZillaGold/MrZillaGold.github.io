import React from "react";
import { SimpleCell } from "@vkontakte/vkui";

import { getRatio } from "../../../../functions";

export function MurderMystery({ user }) {

    const MurderMystery = user.stats.MurderMystery;

    return (
        <div>
            <div className="Info-List">
                <SimpleCell description="Монет"
                      disabled
                >
                    { MurderMystery.coins.toLocaleString() }
                </SimpleCell>
            </div>
            <div className="Info-List">
                <SimpleCell description="Побед"
                      disabled
                >
                    { MurderMystery.wins.toLocaleString() }
                </SimpleCell>
                <SimpleCell description="Поражений"
                      disabled
                >
                    { (MurderMystery.games_played - MurderMystery.wins).toLocaleString() }
                </SimpleCell>
                <SimpleCell description="П/П"
                      disabled
                >
                    { getRatio(MurderMystery.wins, MurderMystery.games_played - MurderMystery.wins) }
                </SimpleCell>
            </div>
            <div className="Info-List">
                <SimpleCell description="Убийств"
                      disabled
                >
                    { MurderMystery.kills.toLocaleString() }
                </SimpleCell>
                <SimpleCell description="Смертей"
                      disabled
                >
                    { MurderMystery.deaths.toLocaleString() }
                </SimpleCell>
                <SimpleCell description="У/С"
                      disabled
                >
                    { MurderMystery.kill_death_ratio }
                </SimpleCell>
            </div>
        </div>
    )
}
