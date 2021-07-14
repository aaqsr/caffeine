import * as React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

interface panelProps {
    content: { img: string; heading?: string; caption?: string }[];
}

export const ImagePanel: React.FC<panelProps> = (props) => (
    <>
        <Container>
            <Row>
                {props.content.map((val) => (
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src={val.img}
                                style={{ height: "12rem" }}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <em>{val.heading}</em>
                                </Card.Title>
                                <Card.Text>{val.caption}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
);