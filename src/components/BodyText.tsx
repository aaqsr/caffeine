import * as React from "react";
import { Col } from "react-bootstrap";

export const Text: React.FC = props => (
    <Col sm={8}>
        {props.children}
    </Col>
);