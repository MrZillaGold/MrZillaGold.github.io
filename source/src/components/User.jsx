import axios from "axios";
import React, { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import { Media, Image } from "react-bootstrap";

import { VK, Github } from "../icons/icons";

import "./User.css";

const links = [
    {
        badge: VK,
        link: "https://vk.com/id233731786"
    },
    {
        badge: Github,
        link: "https://github.com/MrZillaGold"
    }
];

export function User() {
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://m.vk.com/mrzillagold")
            .then(({ data }) => {
                const parse = /<\s*img src="([^]+?)" class="pp_img" alt="[^]+?" style="[^]+?"[^>]*>/.exec(data);

                if (parse) {
                    const [, avatar] = parse;

                   setAvatar(avatar);
                } else {
                    setAvatar("https://sun6-16.userapi.com/ida8trPMuQhzg2BlWVAuE5IgCWDFs_XnbHrXOQ/NOaBSIIxjLw.jpg?ava=1");
                }
            })
            .catch(() => setAvatar("https://sun6-16.userapi.com/ida8trPMuQhzg2BlWVAuE5IgCWDFs_XnbHrXOQ/NOaBSIIxjLw.jpg?ava=1"))
    });


    return (
        <Media className="User">
            {
                avatar ?
                    <Image
                        className="Avatar"
                        roundedCircle
                        width={100}
                        height={100}
                        src={avatar}
                        alt="Пронин Егор"
                    />
                    :
                    <Skeleton width={100}
                              height={100}
                              circle={true}
                    />
            }
            <Media.Body>
                <div style={{ marginLeft: "15px" }}>
                    <h3>
                        <b>Пронин Егор</b>
                    </h3>
                    <h4>MrZillaGold</h4>
                    <div>
                    {
                        links.map(({ link, badge }, index) =>
                            <a target="_blank"
                               href={link}
                               rel="noopener noreferrer"
                               className="Project-Link_icon"
                               key={index}
                            >
                                <img src={badge}
                                     width={32}
                                     height={32}
                                     alt=""
                                />
                            </a>
                        )
                    }
                    </div>
                </div>
            </Media.Body>
        </Media>
    );
}
