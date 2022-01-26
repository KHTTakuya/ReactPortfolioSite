import React, {useState} from 'react';
import {useSpring, animated} from "react-spring";

import './Contact.scss'
import {config} from "@react-spring/web";

export const ContactTop = () => {
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
            <animated.h1 id="contact" className="contact-top" style={props}>Contact</animated.h1>
        </div>
    );
}