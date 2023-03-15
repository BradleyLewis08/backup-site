import "./about.scss";
import BannerLeft from "shared/images/electric-banner-4.png";

import { Parallax } from "react-scroll-parallax";
import { withController } from "react-scroll-parallax";

import Team from "pages/team";

import { Link, NavLink } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";
import { useEffect } from "react";

const About = withController((props) => {
  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = () => {
    props.parallaxController.update();
  };

  return (
    <div>
      <div className="about-container page-container">
        <div className="full-container">
          <div className="header-container">
            <h1 className="title" style={{marginLeft: 0}}>about us</h1>
            <h1 className="subtitle">we help students and start-ups grow</h1>
            <p>
              YES Internships gives undergraduates the opportunity to intern
              with our 150+ affiliated start-ups, who range from pre-seed
              companies to those currently financing a Series C. Through our
              program, students can help build a company from scratch while
              working with experienced entrepreneurs who are experts in their
              space. As they live and breathe the startup experience, our
              participants learn the ins-and-outs of building a product to
              scale while collaborating with a close-knit team.
            </p>

          </div>

          <Parallax y={[180, -20]} className="images-parallax-container">
            <ScrollAnimation
              animateIn="fadeIn"
              className="images-container"
              delay={400}
              animateOnce={true}
            >
              <div className="images-center-container">
                <img src={BannerLeft} onLoad={handleLoad} />
                <img src={BannerLeft} onLoad={handleLoad} />
                <h2 className="images-container-text">
                  a different kind of internship program
                </h2>
              </div>
            </ScrollAnimation>
          </Parallax>
        </div>

        <div className="content-container">
          <ScrollAnimation
            animateIn="fadeIn"
            className="full-container"
            animateOnce={true}
          >
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            className="full-container"
            animateOnce={true}
          >
            <div className="content-subcontainer">
              <div className="subcontent">
                <p className="content-title">start-ups.</p>
                <div className="content-subtitle">
                  <h3>you innovate.</h3>
                  <h3>we recruit.</h3>
                </div>
              </div>
              <div className="subcontent desc-block">
                <h2>join our start-up network</h2>
                <p>
                  If your start-up wants to help nurture the brightest
                  undergraduates minds from across the nation, join YES
                  Internships. Our affiliate start-ups receive interns who are not
                  only qualified and experienced but are also passionate about
                  your company’s mission and long-term goals.{" "}
                </p>
                <NavLink exact to="/join-us">
                  <div className="regular-button">Join our network</div>
                </NavLink>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            className="full-container"
            animateOnce={true}
          >
            <div className="content-subcontainer">
              <div className="subcontent">
                <p className="content-title">students.</p>
                <div className="content-subtitle">
                  <h3>you are talented.</h3>
                  <h3>we know.</h3>
                </div>
              </div>
              <div className="subcontent desc-block">
                <h2>for undergrads, by undergrads</h2>
                <h4>our team knows the struggle</h4>
                <p>
                  Let’s be honest — while landing an internship is hard, landing
                  the right internship is harder. Our mission is to help students
                  secure meaningful work experience by pairing them with
                  compatible and exciting start-ups in every industry. You apply
                  to us. We do the rest.
                </p>
                <p>
                  We started at Yale, but our team wants to help university
                  students nationwide. YES Internships serves
                  undergraduates from any post-secondary institution in the United
                  States.
                </p>

                <NavLink exact to="/apply">
                  <div className="regular-button">Apply</div>
                </NavLink>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <Team/>
    </div>
  );
});

export default About;