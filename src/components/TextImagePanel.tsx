import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

import { Text } from "./BodyText";
import { Image } from "./BodyImage";

interface PanelProps {
    heading: string;
    subheading?: string;
    children: any;
    image: string;
    ImgOnLeft?: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
    return (
        <Container>
            <Row>
                {props.ImgOnLeft ? (
                    // on left
                    <>
                        <Image image={props.image} colNum={4} isLeft={true}/>
                        <Text
                            heading={props.heading}
                            subheading={props.subheading}
                            colNum={8}
                        >
                            {props.children}
                        </Text>
                    </>
                ) : (
                    // on right
                    <>
                        <Text
                            heading={props.heading}
                            subheading={props.subheading}
                            colNum={8}
                        >
                            {props.children}
                        </Text>
                        <Image image={props.image} colNum={4} />
                    </>
                )}
            </Row>
        </Container>
    );

};

Panel.defaultProps = {
    ImgOnLeft: false
};
