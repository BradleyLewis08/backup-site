import React from "react";
import "./timeline.scss";

import ScrollAnimation from 'react-animate-on-scroll';

import 'react-vertical-timeline-component/style.min.css';

export const Timeline = (props) => {
    return (
        <React.Fragment>
            <h1 className="timeline-title title">summer timeline</h1>
            {/* <h4 className="timeline-subtitle">(summer timeline tbd)</h4> */}
            <ScrollAnimation animateIn="fadeIn" className="full-container" animateOnce={true}>
                {props.children}
            </ScrollAnimation>
        </React.Fragment>
    );
}