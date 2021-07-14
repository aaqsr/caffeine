import * as React from 'react';
import { Col } from 'react-bootstrap';

import '../styles/image.scss';

interface ImageProps {
    image: string,
    colNum: number
}

export const Image: React.FC<ImageProps> = props => {

    return (
        <Col sm={props.colNum}>
            <span className="helper"></span>
            <img src={props.image} />
        </Col>
    );
};