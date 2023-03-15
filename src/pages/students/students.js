import "./students.scss";
import studentTestimonials from "./student-testimonials/studentTestimonialData"; /* array of student testimonials */
import StudentTestimonials from "./student-testimonials"; /* studentTestimonials js file */
import pairing from "./images/pairing-icon.png";
import rolling from "./images/rolling-icon.png";
import mentorship from "./images/mentorship-icon.png";
import standing from "./images/standing.png";
import group from "./images/meet_some_interns.png";
import jerry from "./images/jerry.png";
import karina from "./images/karina.png";

import Timeline from "shared/components/timeline";

import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from "react-router-dom";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default function Students() {
  return (
    <div className="students-container page-container">
      <div className="header-container">
        <div className="header-content-container">
          <h1 className="title">designed for students</h1>
          <h1 className="subtitle">by students</h1>
          <p className="first-content-desc">
            Let’s be honest — while landing an internship is hard, landing the
            right internship is harder. Our mission is to help students secure
            meaningful work experience by pairing them with compatible and
            exciting start-ups.
          </p>
          {/* <h1 className="subtitle apps-title">applications open march 8</h1> */}
        </div>
        <img src={standing} alt="standing"></img>
      </div>
      <div className="content-container full-container sub-header-container">
        <h1 className="title">summer applications</h1>
        <div className="subcontent-container">
          <div className="desc-block">
            <h2>join our summer 2023 cohort</h2>
            <div className="catalog-application-info">
              Applications to join our summer 2023 cohort are now open. 
              <a href="https://bit.ly/yesinternships-application">
                <div className="regular-button">Apply</div>
              </a>{" "}
              to join our community of 300+ YES Interns working at some of the most exciting companies in the startup space.
            </div>

            <div className="catalog-application-info">
              Students can view our 
              <NavLink exact to="/catalog">
                <div className="regular-button">catalog</div>
              </NavLink>
              {" "}
              to explore our network of startups and view positions we are offering this summer.
            </div>
            {/* <br/>
                        <a href="https://bit.ly/YES-Internships-Apply-S22" target="_blank" rel="noreferrer noopener"><div className="regular-button">apply here!</div></a> */}
          </div>
        </div>
      </div>
      {/* <div className="content-container full-container sub-header-container">
                <h1 className="title">summer applications</h1>
                <div className="subcontent-container">
                    <div className="desc-block">
                        <h2>i applied, what next?</h2>
                        <p>
                            YES Internships applications closed on March 22nd. We'll be reviewing applications through April 
                            so expect to hear back from us by early May!
                        </p>
                    </div>
                </div>
            </div> */}
      <ScrollAnimation
        animateIn="fadeIn"
        className="full-container"
        animateOnce={true}
      >
        <div className="content-container full-container">
          <div className="bg-darker-blue full-container statistics-search-container">
            <div className="statistic-container full-container">
              <div className="statistic">
                <h2 className="statistics-text">10+</h2>
                <h3 className="statistics-text">Campus Partners</h3>
              </div>
              <div className="statistic">
                <h2 className="statistics-text">300+</h2>
                <h3 className="statistics-text">YES Interns</h3>
              </div>
              <div className="statistic">
                <h2 className="statistics-text">500+</h2>
                <h3 className="statistics-text">Interviews</h3>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <div className="content-container full-container">
        <h1 className="title">referrals</h1>
        <div className="subcontent-container">
          <div className="desc-block">
            <h2>doing things differently</h2>
            <p>
              YES Interns gain access to a network of high-growth, flourishing
              start-ups. We refer our accepted applicants to start-ups in our
              network, who proceed with their own screening processes such as
              interviews or take-home assignments. Ultimately, our partners
              decide who joins their team.
            </p>
            <p>
              However, our network of start-ups not only values undergraduate
              talent, but also trusts our processes and decisions. In any case,
              we prep applicants for phone screens and technical interviews.
            </p>
          </div>
        </div>
      </div>
      <ScrollAnimation
        animateIn="fadeIn"
        className="student-testimonial-container"
        animateOnce={true}
      >
        <div className="content-container full-container">
          <h1 className="title">what our students say</h1>
          <StudentTestimonials studentTestimonials={studentTestimonials} />
        </div>
      </ScrollAnimation>
      {/* <div className="meet-the-interns-header-container">
                <ScrollAnimation animateIn="fadeInRight" className="full-container" animateOnce={true}>
                    <h1 className="title">meet some interns</h1>
                </ScrollAnimation>
                <img src={group} alt="group"></img>
            </div>
            <ScrollAnimation animateIn="fadeInUp" className="full-container" animateOnce={true}>
                <div className="meet-the-interns-container full-container">
                    <div className="intern-profile-container">
                        <div className="images-container">
                            <img src={jerry} alt="intern1"></img>
                        </div>
                        <div className="desc-container">
                            <h2 className="intern-name"><strong>jerry feng / qi foods</strong></h2>
                            <h3 className="intern-school"><strong>yale '24</strong></h3>
                            <p> My internship experience has been a great journey so far! I was a lil' freshie who
                            had no idea what he was doing, and this internship was very open to people of all
                            different levels of experience. I encourage anyone — whether or not you have lots
                        of technical skills — to apply and work for your interests.</p>
                        </div>
                    </div>
                    <div className="intern-profile-container">
                        <div className="images-container">
                            <img src={karina} alt="intern1"></img>
                        </div>
                        <div className="desc-container">
                            <h2 className="intern-name"><strong>karina minanov / evera</strong></h2>
                            <h3 className="intern-school"><strong>yale '22</strong></h3>
                            <p> Working with Michael and Nabeel at Evera has been a great experience. My work
                            as a marketing strategist feels meangingful, and the team values my feedback. My internship has given me
                            great hands-on experience helping brand a start-up from the ground-up.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollAnimation> */}
      <div className="content-container full-container final-container">
        <h1 className="title m-top">the process</h1>
        <div className="subcontent-container">
          <div className="info-container">
            <div className="about-img-container">
              <img src={pairing} alt="pairing img" className="about-img"></img>
            </div>
            <div className="info-container-desc">
              <h2>pairing</h2>
              <p>
                Applicants fill out a written application, and most are asked
                for interviews. Based on an applicant's interests,
                qualifications, and career aspirations, we pair them with one
                start-up from our network that we believe is the best fit. From
                there, an applicant may go through additional screening
                procedures, such as informal or technical interviews.
              </p>
            </div>
          </div>
          <div className="info-container">
            <div className="about-img-container">
              <img src={rolling} alt="rolling img" className="about-img"></img>
            </div>
            <div className="info-container-desc">
              <h2>rolling acceptance</h2>
              <p>
                Don't worry if you are not immediately connected with a
                start-up! The pairing process is rolling and feel free to{" "}
                <a href="mailto:internships@yesatyale.org">email us</a> with
                questions on your application's status.
              </p>
            </div>
          </div>
          <div className="info-container">
            <div className="about-img-container">
              <img
                src={mentorship}
                alt="mentorship img"
                className="about-img"
              ></img>
            </div>
            <div className="info-container-desc">
              <h2>resources</h2>
              <p>
                YES Internships team is comprised of around 20 undergraduates
                from Yale, Princeton, UC Berkeley, Stanford, and UPenn. We're
                writers, artists, athletes, coders, leaders, and entrepreneurs
                at heart. We'll always be in your corner, so reach-out if you're
                looking for internship guidance or just want to chat! Email us
                at{" "}
                <a href="mailto:internships@yesatyale.org">
                  internships@yesatyale.org
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <Timeline>
          <VerticalTimeline animate={false}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent" }}
              contentArrowStyle={{ display: "none" }}
              date="March"
              iconStyle={{ background: "#328ef6" }}
            >
              <h4 className="vertical-timeline-element-subtitle">
                Student Applications
              </h4>
              <p>
                Students apply to our program in March through a common
                application where applicants can talk about their past
                experiences, motivations, career aspirations, and start-up
                preferences.
                {/* <strong>Applications open on March 8th and close on March 22nd.</strong> The early application
                                deadline will be March 15th; students who submit their application by this date will have a better 
                                chance to intern with one of our more competitive, later-stage partners.  */}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent" }}
              contentArrowStyle={{ display: "none" }}
              date="Early April"
              iconStyle={{ background: "rgb(5,28,51)" }}
            >
              <h4 className="vertical-timeline-element-subtitle">
                Applicant Review
              </h4>
              <p>
                Our team reviews applications and conducts interviews to learn
                more about our applicants. In these conversations, we want to
                get to know what drives you and what you're good at. By the end
                of our chat, we should be able to imagine you making an impact
                at one of our partners.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent" }}
              contentArrowStyle={{ display: "none" }}
              date="Late April"
              iconStyle={{ background: "rgb(5,28,51)" }}
            >
              <h4 className="vertical-timeline-element-subtitle">
                Pairing and Intros
              </h4>
              <p>
                We introduce our accepted applicants to their paired start-ups.
                We help prepare applicants for interviews, coordinate
                introductory calls, and facilitate onboarding.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent" }}
              contentArrowStyle={{ display: "none" }}
              date="May — August"
              iconStyle={{ background: "rgb(5,28,51)" }}
            >
              <h4 className="vertical-timeline-element-subtitle">Internship</h4>
              <p>
                Summer internships tend to last from May to August; however,
                this timeline may differ from student to student.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Timeline>
      </div>
    </div>
  );
}
