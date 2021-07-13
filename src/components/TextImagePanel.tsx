import * as React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import { Text } from "./BodyText";
import { Image } from "./BodyImage";


export const Panel: React.FC = () => (
    <Container>
        <Row>
            <Text />
            <Image />
        </Row>
    </Container>
);