import * as React from "react";
import { Col } from "react-bootstrap";
import { Fade, Slide } from "react-reveal";

import "../styles/image.scss";

interface ImageProps {
    image: string;
    colNum: number;
    isLeft?: boolean;
}

export const Image: React.FC<ImageProps> = (props) => {
    return (
        <Col className="d-flex justify-content-center" md={props.colNum}>
            <span className="helper"></span>
            {props.isLeft ? (
                <Fade left delay={500}>
                    <img src={props.image} />
                </Fade>
            ) : (
                <Fade right delay={500}>
                    <img src={props.image} />
                </Fade>
            )}
        </Col>
    );
};
Image.defaultProps = {
    isLeft: false
};
