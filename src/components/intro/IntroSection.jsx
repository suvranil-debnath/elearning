import React from 'react';
import './IntroSection.css';
import introImage from './intro-image.png'; // Assuming you have the image
import Typed from 'typed.js';

const IntroSection = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['<h2>Hi! We Are <span>L</span>ear<span>N</span>ovara</h2>'],
        typeSpeed: 50,
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    return (
        <div className="row intro-section">
            <div className="col-lg-5 col-md-7 col-sm-12 intro-text">
                <h3 ref={el}></h3>
            </div>
            
            <div className="col-lg-7 col-md-12 col-sm-12 intro-image">
                <img src={introImage} alt="Intro" />
            </div>
        </div>
    );
}

export default IntroSection;
