import * as React from "react";

import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Title } from "../components/Title";
import { DummyText } from "../components/DummyText";
import { Panel } from "../components/TextImagePanel";
import { ImagePanel } from "../components/ImagePanel";

import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/general.scss";

import CaffeineMolecule from "../images/Caffeine_structure.svg";
import Xanthine from "../images/xanthine.svg";
import Purine from "../images/Purin_num2.svg";
import Pyramadine from "../images/Pyrimidine_2D_numbers.svg";
import Imadizole from "../images/Imidazole_2D_numbered.svg";
import CoffeeBeans from "../images/CaffeineInCoffeeBeans.jpeg"
import { ParallaxImg } from "../components/parallax";

const IndexPage: React.FC = () => (
    <>
        <Header />
        <NavBar />
        <Title />

        <Container>
            <p>
                Caffeine is a magical molecule given to us by sorcerers that
                more than half the world is addicted to, and I swear that list
                doesn’t include me, I can live without caffeine, I’m not
                addicted sips cup-
            </p>
            <p>
                It is no exaggeration to say that the world, for the most part,
                runs on Caffeine. It has become a huge part of pop-culture from
                the east to the west. Most people you meet nowadays seem to be
                unable to get through the day without their fix of Coffee or
                Tea. It’s even found in drinks such as Coca Cola and 7up. So
                basically Humans can’t get enough of the stuff.
            </p>
            <p>
                It is surprising that, despite its addictive properties being so
                widely known, it is barely regulated throughout the world. In
                fact, caffeine is the most used legal drug worldwide, despite
                its withdrawal symptoms of headaches, and irritability.
            </p>
        </Container>

        <Panel
            heading="What does caffeine even do?"
            subheading="I mean we're all kinda addicted to it so like"
            image={Xanthine}
        >
            <p>
                In the chemical world, Caffeine is more “famously” known as
                *clears throat* 1,3,7-Trimethylxanthine. As the organic
                compound’s name suggests, it is derived from Xanthine (image on
                left).
            </p>
            <p>
                As you can see, in caffeine, 3 methyl groups substitute the 1st,
                3rd and 7th hydrogens of Xanthine.
            </p>
            <p>
                Xanthine is also responsible for giving us the bitter molecule
                in chocolate and is itself is a purine base. And purines
                themselves are just an aromatic compound with two rings, namely
                Pyrimidine, and Imidazole.
            </p>
        </Panel>
        <ImagePanel
            content={[
                { img: Purine, heading: "Purine" },
                { img: Pyramadine, heading: "Pyramadine" },
                { img: Imadizole, heading: "Imadizole" }
            ]}
        />
        <Panel
            heading="test"
            subheading="test2"
            image={CaffeineMolecule}
            ImgOnRight={true}
        >
            <DummyText />
        </Panel>
        <ParallaxImg img={CoffeeBeans} />
        <Panel
            heading="test"
            subheading="test2"
            image={CaffeineMolecule}
            ImgOnRight={true}
        >
            <DummyText />
        </Panel>
    </>
);

// for break-up element
// carousel https://react-bootstrap-v4.netlify.app/components/carousel/
// jumbotron

// for images
// figure https://react-bootstrap-v4.netlify.app/components/figures/
// or use an animation slide in from left/right

export default IndexPage;
