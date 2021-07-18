import * as React from "react";
import { Row, Container, Jumbotron } from "react-bootstrap";

import "../styles/footer.scss";

export const Footer: React.FC = () => (
    <Jumbotron fluid className="footer">
        <Container>
            <Row>
                <em>&copy; Awab Q. 2021. Made for a Chem class project.</em>
            </Row>
            <Row>
                <em>
                    Also checkout: <a target="_blank" href="https://aaqsr.github.io/mathematika/">mathematika.site</a>
                </em>
            </Row>
        </Container>
    </Jumbotron>
);
