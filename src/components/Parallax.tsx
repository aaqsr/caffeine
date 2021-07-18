import * as React from 'react'

import '../styles/parallax.scss'

interface props {
    img: string
}

export const ParallaxImg: React.FC<props> = props => (
    <>
        <div className="parallax" style={{ backgroundImage: `url("${props.img}")` }}>
            <div className="text">
                <h1></h1>
            </div>
        </div>
    </>
)