import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Text } from "./BodyText";
import { Image } from "./BodyImage";

interface PanelProps {
    heading: string;
    subheading?: string;
    children: any;
    image: string;
    ImgOnRight?: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
    return (
        <Container>
            <Row>
                {props.ImgOnRight ? (
                    <>
                        <Image image={props.image} colNum={4} />
                        <Text
                            heading={props.heading}
                            subheading={props.subheading}
                            colNum={8}
                        >
                            {props.children}
                        </Text>
                    </>
                ) : (
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
    ImgOnRight: false
};
