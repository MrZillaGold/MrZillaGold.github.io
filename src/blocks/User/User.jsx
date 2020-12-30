import React from "react";
import { Avatar } from "@vkontakte/vkui";
import { Icon28ArrowDownOutline } from "@vkontakte/icons";

import { Links } from "./Links";

import avatar from "../../assets/avatar.jpg";

import "./User.css";

export function User() {

    return (
        <div className="User">
            <Avatar src={avatar}
                    size={200}
            />
            <h1 className="User-Name">
                Пронин Егор
            </h1>
            <span className="User-Nickname">
                MrZillaGold
            </span>
            <Links/>
            <div className="User-ScrollDown">
                <Icon28ArrowDownOutline height={32} width={32}/>
            </div>
        </div>
    );
}
