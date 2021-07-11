import * as React from "react";
import { useState } from "react";
import { FC } from "react";
import { Navbar } from "react-bootstrap";

import "../styles/navbar.scss";

export const NavBar: FC = () => {
    const [visibility, setVisibility] = useState(false);

    const changeVisibility = () => {
        setVisibility(!!(window.scrollY >= 80))
    }

    window.addEventListener('scroll', changeVisibility)

    if (visibility) {
        return (
            <div className="NavBar">
                <Navbar bg="light" className="navbar">
                    <Navbar.Brand href="#home">
                        <h2>CAFFEINE</h2>
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
    return null;
}
