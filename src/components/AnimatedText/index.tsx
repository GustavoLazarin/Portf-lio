"use client";

import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
    return (
        <TypeAnimation
            sequence={[" Frontend.", 2000, " Backend.", 2000, " FullStack.", 5000]}
            className="text-secondary"
            preRenderFirstString={true}
            speed={30}
            wrapper="span"
            repeat={Infinity}
        />
    )
};

export default AnimatedText;