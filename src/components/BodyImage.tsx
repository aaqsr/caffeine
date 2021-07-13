import * as React from 'react';
import { Col } from 'react-bootstrap';

import '../styles/image.scss';

interface ImageProps {
    Image: string
}

export const Image: React.FC<ImageProps> = props => {

    return (
        <Col sm={4}>
            <span className="helper"></span>
            <img src={props.Image} />
        </Col>
    );
};