import * as React from "react";
import { Helmet } from "react-helmet";

// @ts-ignore
import img from "../images/CaffeineInCoffeeBeans.jpeg";
// @ts-ignore
import favicon from "../images/coffee.svg";

const metaData = {
    title: "Caffeine",
    desc: "Caffeine, its chemical structure, what it does, and addiction to it. A simple website made to accompany the video presentation for a chemistry class.",
    url: "aaqsr.github.io/caffeine"
};

export const Header: React.FC = () => (
    <Helmet>
        <title>{metaData.title}</title>
        <link rel="icon" href={favicon}/>
        <meta name="title" content={metaData.title} />
        <meta name="description" content={metaData.desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.desc} />
        <meta property="og:image" content={img} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaData.url} />
        <meta property="twitter:title" content={metaData.title} />
        <meta property="twitter:description" content={metaData.desc} />
        <meta property="twitter:image" content={img} />

        <meta
            name="keywords"
            content="caffeine, coffee, chemistry, tea, chai, adenosine, sleep, caffeine addiction"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Awab Q" />
    </Helmet>
);
