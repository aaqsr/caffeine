import * as React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import { Text } from "./BodyText";
import { Image } from "./BodyImage";

interface PanelProps {
    heading: string,
    subheading?: string,
    children: any,
    Image: string
}

export const Panel: React.FC<PanelProps> = props => (
    <Container>
        <Row>
            <Text heading={props.heading} subheading={props.subheading}>
                {props.children}
            </Text>
            <Image Image={props.Image}/>
        </Row>
    </Container>
);