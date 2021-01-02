import React from "react";
import { AppRoot, Panel, SplitCol, SplitLayout, useAdaptivity, ViewWidth } from "@vkontakte/vkui";

import { User } from "./blocks/User/User";
import { Minecraft } from "./blocks/Minecraft/Minecraft";
import { Projects } from "./blocks/Projects/Projects";
import { Skills } from "./blocks/Skills/Skills";
import { Friends } from "./blocks/Friends/Friends";
import { Footer } from "./blocks/Footer/Footer";

export function Layout() {

    const { viewWidth } = useAdaptivity();

    const width = viewWidth === ViewWidth.DESKTOP ? "1024px" : "100%";

    return (
        <AppRoot>
            <SplitLayout style={{ justifyContent: "center" }}>
                <SplitCol width={width}
                          maxWidth={width}
                >
                    <Panel id="main">
                        <div style={{ padding: viewWidth > ViewWidth.MOBILE ? "0 48px" : 12 }}>
                            <User/>
                            <Minecraft/>
                            <Projects/>
                            <Skills/>
                            <Friends/>
                            <Footer/>
                        </div>
                    </Panel>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
}
