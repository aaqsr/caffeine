import * as React from "react";
import { FC } from "react";
import { Jumbotron } from "react-bootstrap";
import { Fade } from "react-reveal";

import "../styles/header.scss";
import Caffeine_structure from "../images/Caffeine_structure.svg";

export const Header: FC = () => (
    <div className="header">
        <Jumbotron fluid>
            <h1 className="center">
                <Fade bottom cascade>
                    CAFFEINE
                </Fade>
            </h1>
            <Fade bottom delay={1000}>
                <div className="center">
                    <img src={Caffeine_structure} className="img" alt="Caffeine Skeletal Formula"/>
                </div>
            </Fade>
        </Jumbotron>
    </div>
);