import React, {useState} from 'react';
import {useSpring, animated} from "react-spring";

import '../About/About.scss'
import {config} from "@react-spring/web";

export const PortfolioTop = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1},
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 700,
        config: config.molasses,
    })
    return (
        <div>
            <animated.h1 id="portfolio" className="portfolio-top" style={props}>PortFolio</animated.h1>
        </div>
    );
}