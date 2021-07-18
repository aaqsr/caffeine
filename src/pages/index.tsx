import * as React from "react";

import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Title } from "../components/Title";
import { DummyText } from "../components/DummyText";
import { Panel } from "../components/TextImagePanel";
import { ImagePanel } from "../components/ImagePanel";
import { ParallaxImg } from "../components/Parallax";
import { Footer } from "../components/Footer";

import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/general.scss";
import "../styles/theme.scss";

// @ts-ignore
import CaffeineMolecule from "../images/Caffeine_structure.svg";
// @ts-ignore
import Xanthine from "../images/xanthine.svg";
// @ts-ignore
import Purine from "../images/Purin_num2.svg";
// @ts-ignore
import Pyramadine from "../images/Pyrimidine_2D_numbers.svg";
// @ts-ignore
import Imadizole from "../images/Imidazole_2D_numbered.svg";
// @ts-ignore
import Adensosine from "../images/Adenosin.svg";
// @ts-ignore
import CoffeeBeans from "../images/CaffeineInCoffeeBeans.jpeg";

const IndexPage: React.FC = () => (
    <>
        <Header />
        {/* <NavBar /> */}
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
                left or bottom).
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
            heading="Function of Caffeine"
            subheading="Fancy looking molecule, but what does it even do?"
            image={Adensosine}
            ImgOnRight={true}
        >
            <p>
                Caffeine does many things, mainly acting as a Central Nervous
                System stimulant. Its main job is to help you cram all night for
                that test you forgot about because Lyceum's test timetable is a
                complete mes- Sorry I meant, the primary function of Caffeine is
                to reversibly block the action of adenosine on its receptors.
                (image on right or top).
            </p>
            <p>
                Caffeine has a chemical structure similar to Adenosine, which
                allows it to bind to its receptors instead, thus “blocking” it.
                After entering the body, it is absorbed through the small
                intestine and dissolved into the bloodstream after. And since the
                molecule is both water and fat-soluble, it’s able to penetrate
                the blood-brain barrier and enter the brain.
            </p>
            <p>
                Turns out our neurons are embedded with these adenosine
                receptors. When adenosine binds to them, it releases proteins
                that inhibit neurons, thus making you feel sleepy. By reducing
                the concentration of available receptors, by binding to them,
                caffeine slows down the rate of this reaction, allowing you to
                feel less drowsy.
            </p>
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
        <Footer/>
    </>
);

// for break-up element
// carousel https://react-bootstrap-v4.netlify.app/components/carousel/
// jumbotron

// for images
// figure https://react-bootstrap-v4.netlify.app/components/figures/
// or use an animation slide in from left/right

export default IndexPage;
