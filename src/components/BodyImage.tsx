import * as React from 'react';
import { Col } from 'react-bootstrap';

interface ImageProps {
    image: any
}

export const Image: React.FC<ImageProps> = props => {

    return (
        <Col sm={4}>{props.image}</Col>
    );
};