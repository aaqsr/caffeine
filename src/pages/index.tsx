import * as React from "react";

import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Title } from "../components/Title";
import { DummyText } from "../components/DummyText"

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/general.scss";

const IndexPage: React.FC = () => (
    <>
        <Header />
        <NavBar />
        <Title />
        <DummyText />
    </>
)

export default IndexPage;