import * as React from "react";
import { FC } from "react";
import { Jumbotron } from "react-bootstrap";
import { Fade } from "react-reveal";

import "../styles/header.scss";

export const Header: FC = () => (
    <div className="Header">
        <Jumbotron fluid>
            <h1 className="center">
                <Fade bottom cascade>
                    CAFFEINE
                </Fade>
            </h1>
        </Jumbotron>
    </div>
);