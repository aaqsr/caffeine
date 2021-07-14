import * as React from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

import '../styles/image.scss';

interface panelProps {
    content: { img: string; heading?: string; caption?: string }[];
}

export const ImagePanel: React.FC<panelProps> = (props) => (
    <>
        <Jumbotron>
            <Container>
                <Row>
                    {props.content.map((val) => (
                        <Col className="d-flex justify-content-center">
                            <Card
                                style={{
                                    width: "18rem",
                                    verticalAlign: "middle"
                                }}
                            >
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
        </Jumbotron>
    </>
);