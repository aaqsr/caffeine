import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { Navbar } from "react-bootstrap";
import { Slide } from "react-reveal";

import "../styles/navbar.scss";

export const NavBar: FC = () => {
    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            const changeVisibility = () => {
                setVisibility(!!(window.scrollY >= 100));
                setVisibility2(!!(window.scrollY >= 130));
            };

            window.addEventListener("scroll", changeVisibility);
        }
    }, []);

    // console.log(visibility);

    if (visibility) {
        return (
            <div className="NavBar">
                <Navbar fixed="top" bg="light" className="navbar">
                    <Slide left when={visibility2}>
                        <Navbar.Brand href="#home">
                            <h2>CAFFEINE</h2>
                        </Navbar.Brand>
                    </Slide>
                </Navbar>
            </div>
        );
    }
    return null;
};
