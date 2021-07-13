import * as React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import { Text } from "./BodyText";
import { Image } from "./BodyImage";


export const Panel: React.FC = props => (
    <Container>
        <Row>
            <Text>
                {props.children}
            </Text>
            <Image />
        </Row>
    </Container>
);