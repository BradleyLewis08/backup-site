import React from "react";
import "./footer.scss";
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <p>YES Internships</p>
                    <p>Yale University</p>
                    <p>New Haven, CT</p>

                    <div className="social-container">
                        <h4>Connect With Us</h4>
                        <SocialIcon target="_blank" className="social-icon" style={{ height: 30, width: 30 }} bgColor="white" url="https://www.instagram.com/yesinternships/" />
                        {/*<SocialIcon target="_blank" className="social-icon" style={{ height: 30, width: 30 }} bgColor="white" url="https://www.facebook.com/yesatyale/" />
                        <SocialIcon target="_blank" className="social-icon" style={{ height: 30, width: 30 }} bgColor="white" url="https://twitter.com/yaleatyes" />*/}
                        <SocialIcon target="_blank" className="social-icon" style={{ height: 30, width: 30 }} bgColor="white" url="https://www.linkedin.com/company/yes-internship-program/" />
                        <SocialIcon target="_blank" className="social-icon" style={{height: 30, width: 30}} bgColor="white" url="mailto:internships@yesatyale.org"/>
                    </div>
                </div>
                <div className="footer-right">
                    <p>Learn More</p>
                    <div><Link to="/students">Students</Link></div>
                    <div><Link to="/partners">Startups</Link></div>
                    <div><Link to="/about">About</Link></div>
                </div>
            </div>
            <div className="copy-container">
                <hr></hr>
                <p>© YES Internships 2021</p>
            </div>
        </div >
    )
}