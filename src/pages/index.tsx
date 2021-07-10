import * as React from "react";
import { FC } from "react";
import { NavBar } from "../components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/font.scss";

const IndexPage: FC = () => (
    <div>
        <NavBar />
        <h1>hi</h1>
    </div>
)

export default IndexPage;