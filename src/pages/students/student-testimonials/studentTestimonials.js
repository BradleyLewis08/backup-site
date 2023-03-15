import React, { useState, useEffect } from 'react';
import "./studentTestimonials.scss"; /* the style sheet for this file */
import "../../../styles/styles.scss"
import quote from "../student-testimonials/images/quote-left.png" /* quote mark */
// import linkedin from "../student-testimonials/images/linkedin.svg"; /* LinkedIn logo */
import Carousel from '@brainhubeu/react-carousel'; /* carousel */
import '@brainhubeu/react-carousel/lib/style.css'; /* carousel style sheet */

/* Testimonials section for the students page */

/****** CLASS NAMES need to be changed from studentSide to student-side */

export const StudentTestimonials = (props) => {

    const renderStudent = (testimonial, index) => (
        <div className="card testimonial" key={index}>
            {/* side of the card that contains student pic, name, description, partner */}
            <div className="studentSide">
                <img src={testimonial.studentImg} className="img" alt="student-img" /> {/* student pic */}
                <div className="bio">
                    <h3 className="name">{testimonial.student + ` `} {/* name + space for linkedin logo */}
                        {/* <a href={testimonial.studentLinkedIn} target="_blank">
                            <img src={linkedin} alt="linkedin-logo" />
                        </a> */}
                    </h3>
                    <div className="studentInfo">
                        <span>
                            {testimonial.class} | {/* student's class */}
                            {testimonial.position} Intern {/* student's position at company */}
                        </span>
                    </div>
                    <div className="partnerInfo"> {/* partner name + logo */}
                        <div onClick={() => window.open(testimonial.partnerSite, "_blank")}>
                            <img src={testimonial.studentPartnerImg} className="partner-img" alt="partner-logo" />
                        </div>
                        {/* <a className="partnerName" onClick={() => window.open(testimonial.partnerSite, "_blank")}> {testimonial.studentPartner}</a> */}
                    </div>
                </div>
            </div>
            {/* side of the card that contains quote and short description of what student did */}
            <div className="rightSide">
                <div className="blurb"> {/* student's quote */}
                    <img src={quote} alt="left-quote" />
                    <p className="text">{testimonial.blurb}</p>
                    <img src={quote} className="rightQuote" alt="right-quote" />
                </div>
                <div className="blue-box"> {/* student's description of what they did */}
                    <h4 className="blue-box-title"><b>Work &#38; Accomplishments</b></h4>
                    <p className="text"> {testimonial.workedOn}</p>
                </div>
            </div>
        </div>

    )

    const offsetWidth = Math.min(80, window.innerWidth * 0.1)
    const [carouselWidth, setCarouselWidth] = useState(0.7 * window.innerWidth)
    const handleResize = () => {
        setCarouselWidth(Math.min(1000, window.innerWidth * 0.7))
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
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
                itemWidth={carouselWidth}>
                {props.studentTestimonials.map((testimonial, index) => renderStudent(testimonial, index))}
            </Carousel>
        </div>
    )
}