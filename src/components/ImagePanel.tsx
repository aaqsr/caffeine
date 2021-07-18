import * as React from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import   HeadShake  from 'react-reveal/Tada';

import '../styles/image.scss';

interface panelProps {
    content: { img: string; heading?: string; caption?: string }[];
}

export const ImagePanel: React.FC<panelProps> = (props) => (
    <>
        <Jumbotron>
            <Container>
                <Row>
                    {props.content.map((val, index) => (
                        <Col className="d-flex justify-content-center">
                            <Card
                                style={{
                                    width: "18rem",
                                    verticalAlign: "middle"
                                }}
                            >
                                <HeadShake delay={index*500 + 100}>
                                    <Card.Img
                                        variant="top"
                                        src={val.img}
                                        style={{ height: "12rem" }}
                                    />
                                </HeadShake>
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