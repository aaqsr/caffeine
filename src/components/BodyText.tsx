import * as React from "react";
import { Col } from "react-bootstrap";

interface TextProps {
    children: any,
    heading: string,
    subheading?: string,
    colNum: number
}

export const Text: React.FC<TextProps> = props => (
    <Col md={props.colNum}>
        <h1>{props.heading}</h1>
        <h4>{props.subheading}</h4>
        {props.children}
    </Col>
);