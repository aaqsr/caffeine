import * as React from "react";
import { FC } from "react";
import { Navbar } from "react-bootstrap";


export const NavBar: FC = () => (
    <Navbar bg="light" className="navbar">
        <Navbar.Brand href="#home">
            <h2>CAFFEINE</h2>
        </Navbar.Brand>
    </Navbar>
);