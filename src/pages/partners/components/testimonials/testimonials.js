import React, { useState, useEffect } from 'react';
import "./testimonials.scss";
import quote from "../../images/quote-left.png"
import linkedin from "../../images/linkedin.svg";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive'

/**
 * Testimonials section for the startups page
 */
export const Testimonials = (props) => {

    const showInterns = false

    const renderStartup = (testimonial, index) => (
        <div className="card testimonial" key={index}>
            <div className="founderSide">
                <img src={testimonial.founderImg} className="img" alt="founder-img" />
                <h3 className="name">{testimonial.founder + ` `}
                    <a href={testimonial.founderLinkedIn} target="_blank">
                        <img src={linkedin} alt="linkedin-logo" />
                    </a>
                </h3>
                <p className="bio">Founder of {testimonial.startup}</p>
            </div>
            <div className="rightSide">
                <div className="blurb">
                    <img src={quote} alt="left-quote" />
                    <p className="text">{testimonial.blurb}</p>
                    <img src={quote} className="rightQuote" alt="left-quote" />
                </div>
                {!showInterns ? <></> :
                    <React.Fragment>
                        <h3 className="heading">{testimonial.startup}'s Interns</h3>
                        <div className="interns">
                            {testimonial.interns.map((intern, index) => renderIntern(intern, index))}
                        </div>
                    </React.Fragment>
                }
            </div>
        </div>
    )

    const renderIntern = (intern, index) => (
        <div className="intern" key={index}>
            <img src={intern.img} className="img" alt="intern-img" />
            <p className="name">{intern.name + ` `}
            </p>
        </div>
    )

    const offsetWidth = Math.min(80, window.innerWidth * 0.1)

    const [ carouselWidth, setCarouselWidth ] = useState(0.7 * window.innerWidth)

    useEffect(() => {
        var listener = window.addEventListener("resize", () => {
            setCarouselWidth(Math.min(1000, window.innerWidth * 0.7))
        })
        return () => {
            window.removeEventListener("resize", listener)
        }
    })

    return (
        <div className="testimonial-container">
            <Carousel
                slidesPerPage={1}
                centered
                infinite
                autoPlay={4500}
                animationSpeed={1000}
                stopAutoPlayOnHover
                offset={offsetWidth}
                clickToChange
                itemWidth={carouselWidth}
            >
                {props.testimonials.map((testimonial, index) => renderStartup(testimonial, index))}
            </Carousel>
        </div>
    )
};
