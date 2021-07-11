import * as React from "react";
import { FC } from "react";
import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/font.scss";

const IndexPage: FC = () => (
    <div>
        <NavBar />
        <Header />
    </div>
)

export default IndexPage;