import * as React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import { Text } from "./BodyText";
import { Image } from "./BodyImage";

interface PanelProps {
    heading: string,
    subheading?: string,
    body: string,
    children: any
    image: any
}

export const Panel: React.FC<PanelProps> = props => (
    <Container>
        <Row>
            <Text heading={props.heading} subheading={props.subheading}>
                {props.children}
            </Text>
            <Image image={props.image}/>
        </Row>
    </Container>
);