import * as React from "react";

import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Title } from "../components/Title";
import { DummyText } from "../components/DummyText"
import { Panel } from "../components/TextImagePanel";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/general.scss";

import CaffeineMolecule from "../images/Caffeine_structure.svg";

const IndexPage: React.FC = () => (
    <>
        <Header />
        <NavBar />
        <Title />
        <DummyText />

        <Panel heading="test" subheading="test2" Image={CaffeineMolecule}>
            <DummyText />
        </Panel>
    </>
)

export default IndexPage;