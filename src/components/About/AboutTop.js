import React, {useState} from 'react';
import {useSpring, animated} from "react-spring";

import './About.scss'
import {config} from "@react-spring/web";

export const AboutTop = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1},
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 300,
        config: config.molasses,
    })
    return (
        <div>
            <animated.h1 id="about" className="about-top" style={props}>About me</animated.h1>
        </div>
    );
}