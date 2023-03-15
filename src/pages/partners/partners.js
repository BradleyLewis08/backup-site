import React, { useEffect } from "react";
import "./partners.scss";
//import cityscape from "./images/cityscape.png";
import BannerLeft from "shared/images/electric-banner-4.png";
import defaultImg from "./images/defaultImg.png";
import qifoods from "./images/qifoods.png";
import actualfood from "./images/actualfood.jpg"
import flamingle from "./images/flamingle.jpg";
import theBoardingSchool from "./images/TheBoardingSchool.jpg";
import standout from "./images/standout.jpg";
import zerotonarrative from "./images/zerotonarrative.png";
import Testimonials from "./components/testimonials";
import PartnersSubset from "./components/partners-subset";
import { withController } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
//import { PieChart } from "react-minimal-pie-chart";
import Timeline from "shared/components/timeline";
import { usePartners } from "shared/hooks"
import { fetchPartners } from "redux/actions"
import ScrollAnimation from "react-animate-on-scroll";
import store from "redux/store";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { NavLink } from "react-router-dom";

const classDist = [
  { title: "First-years", value: 103, color: "#f6f3f3" },
  { title: "Sophomores", value: 108, color: "#FE9000" },
  { title: "Juniors", value: 50, color: "#FF3C03" },
  { title: "Seniors", value: 19, color: "#338EF6" },
  { title: "Graduates", value: 8, color: "#4144d4" },
];

const testimonials = [
  {
    startup: "Flamingle",
    founder: "Natan Vidra",
    founderImg: flamingle,
    blurb:
      "The YES program was one of the best things that happened to Flamingle. We had the incredible opportunity to work with 4 amazing winter interns and learned so much from them in the process. I don't know where we would be now if it wasn't for the kindness and generosity of the YES program as well as the tremendous thought that goes into matching incredible interns with fabulous founders! ",
    founderLinkedIn: "https://www.linkedin.com/in/natan-vidra-314603126/",
    interns: [
      { name: "Raymond Suo", linkedin: "www.google.com", img: defaultImg },
      { name: "Alexandra Giorno", linkedin: "www.google.com", img: defaultImg },
      { name: "Zachary Wang", linkedin: "www.google.com", img: defaultImg },
      { name: "Sarah Wang", linkedin: "www.google.com", img: defaultImg },
    ],
  },
  {
    startup: "Qi Foods",
    founder: "Tiffany Leong",
    founderImg: qifoods,
    blurb:
      "To say I am impressed with my YES interns is an understatement. Each of my interns has the maturity and drive of interns/employees well beyond their years. I wouldn't have made as much progress the past few months without them and I am so grateful to have this program to help reach our company goals and more.",
    founderLinkedIn: "https://www.linkedin.com/in/tiffany-leong-4757263a/",
    interns: [
      { name: "Jerry Feng", linkedin: "www.google.com", img: defaultImg },
      { name: "Frankie She", linkedin: "www.google.com", img: defaultImg },
      { name: "Matt Kirschner", linkedin: "www.google.com", img: defaultImg },
    ],
  },
  {
    startup: "The Boarding School",
    founder: "Julia Huesa",
    founderImg: theBoardingSchool,
    blurb:
      "Having YES interns on the team has helped us build regularity, structure, and flow to our website updates, social media, educational programs, and community membership that we struggled to upkeep before! They've been quick learners, picking up and contributing gracefully to our work even as we endeavor to shape it ourselves. Five stars to the YES internship program.",
    founderLinkedIn: "https://www.linkedin.com/in/julia-h-961b58b8/",
    interns: [
      { name: "Catherine Liang ", linkedin: "www.google.com", img: defaultImg },
      { name: "Enio Andoni", linkedin: "www.google.com", img: defaultImg },
      { name: "Isabel Wu", linkedin: "www.google.com", img: defaultImg },
      { name: "Emily Hsu", linkedin: "www.google.com", img: defaultImg },
      { name: "Jasmine Rivers", linkedin: "www.google.com", img: defaultImg },
      { name: "Samantha Lee", linkedin: "www.google.com", img: defaultImg },
    ],
  },
  {
    startup: "ActualFood",
    founder: "Greg Grinberg",
    founderImg: actualfood,
    blurb:
      "“Happiness leads to success, not the other way around.” When it comes to hiring out of top schools, the question is rarely “is this person smart enough?” It’s “are they going to love working with us?” Students know other students better than any recruiter, so it’s no surprise that the YES team has introduced us to candidates we love working with too. Like us, they’re dedicated to ending the epidemic of chronic disease afflicting our global population, and they’ve blown away our expectations. João — who went from junior developer to product manager in under a year — is a perfect example. We’ve worked with a lot of recruiting firms, and YES has delivered by far the best results, all while charging a fraction of what the “professionals” do.\"",
    founderLinkedIn: "https://www.linkedin.com/in/greg-grinberg-7056786/",
    interns: [
      { name: "João Cardoso", linkedin: "www.google.com", img: defaultImg },
    ],
  },
];

export const Partners = withController((props) => {
  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = () => {
    props.parallaxController.update();
  };

  return (
    <div className="partners-container page-container final-container">
      <div className="header-container">
        <h1 className="title" style={{marginLeft: 0}}>designed for start-ups</h1>
        <h1 className="subtitle">built by entrepreneurs</h1>
        <p className="first-content-desc">
          YES Internships is an undergraduate network of
          founders and entrepreneurs. We're here to help you recruit the best
          and brightest students from Yale, Harvard, Stanford and other top
          schools. Why? Because we love to see our partners grow.
        </p>
        <NavLink exact to="/join-us">
          <div className="regular-button">Join our network</div>
        </NavLink>
        <NavLink exact to="/our-network">
          <div className="regular-button" style={{marginLeft: '10px'}}>View our network</div>
        </NavLink>

        <div className="scroll-container">
        <Parallax  y={[100, -20]} className="images-parallax-container">
              <ScrollAnimation
                animateIn="fadeIn"
                className="images-container"
                delay={50}
                animateOnce={true}
              >
                <div className="images-center-container">
                  <img src={BannerLeft} onLoad={handleLoad} />
                  <img src={BannerLeft} onLoad={handleLoad} />
                  <div className="statistic-container" style={{padding: 0, margin: 0, flexDirection: "row"}}>
                    <div className="statistic">
                      <h2 className="statistics-text">1250+</h2>
                      <h3 className="statistics-text">Applicants</h3>
                    </div>
                    <div className="statistic">
                      <h2 className="statistics-text">150+</h2>
                      <h3 className="statistics-text">Startups</h3>
                    </div>
                    <div className="statistic">
                      <h2 className="statistics-text">300+</h2>
                      <h3 className="statistics-text">Interns</h3>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </Parallax>
      </div>
      </div>
      {/*<div className="full-container cityscape-container">
        <img src={cityscape} alt="cityscape"></img>
  </div>*/}
      {/*</div><div className="full-container cityscape-info-container">
        <div className="statistic-container full-container">
          <div className="statistic">
            <h2 className="statistics-text">1,250+</h2>
            <h3 className="statistics-text">Applicants</h3>
          </div>
          <div className="statistic">
            <h2 className="statistics-text">150+</h2>
            <h3 className="statistics-text">Start-ups</h3>
          </div>
          <div className="statistic">
            <h2 className="statistics-text">300+</h2>
            <h3 className="statistics-text">YES Interns</h3>
          </div>
</div>*/}
        {/*<ScrollAnimation
          animateIn="fadeInUp"
          className="full-container"
          animateOnce={true}
        >
          <div className="applicant-info-container">
            <h1 className="title">Our Applicants</h1>
            <div className="class-dist-container">
              <PieChart
                data={classDist}
                radius={PieChart.defaultProps.radius - 6}
                lineWidth={40}
                segmentsStyle={{ transition: "stroke .3s" }}
                label={({ dataEntry }) =>
                  Math.round(dataEntry.percentage) + "%"
                }
                labelPosition={80}
                labelStyle={{
                  fill: "#000",
                  pointerEvents: "none",
                  fontSize: "5px",
                }}
              />
              </div>
            <div>
              <ul>
                {classDist.map((classStat, index) => (
                  <li className="class-stat" key={index}>
                    <div style={{ backgroundColor: classStat.color }}></div>
                    {classStat.title}
                  </li>
                ))}
              </ul>
                </div>
                </div>
                </ScrollAnimation>*/}
        {/*<ScrollAnimation
          animateIn="fadeInUp"
          className="full-container"
          animateOnce={true}
        >
          <div className="applicant-info-container">
            <div className="role-container">
              <h3>Software Engineers</h3>
              <p>
                Our applicants come from Facebook and Amazon and have taken
                coursework at some of the best computer science schools in the
                world. Software engineering? We got you covered.
              </p>
            </div>
            <div className="role-container">
              <h3>Marketing Strategists</h3>
              <p>
                Our students are passionate about growing brands, creating
                content, and driving growth. Some have managed social media
                accounts with tens of thousands of users and others have
                optimized SEO, ROAS, and CPA with impressive results.
              </p>
            </div>
            <div className="role-container">
              <h3>Business Developers</h3>
              <p>
                Our applicants are data-driven, hard-working, and interested in
                entrepreneurship. Financial modeling, sales, and product
                management are their game. And they rock.
              </p>
            </div>
          </div>
          <div className="applicant-info-container">
            <div className="role-container">
              <h3>UI/UX Designers</h3>
              <p>
                Students never fail to surprise us with their full-scale
                mock-ups designed with Figma or Adobe XD. Their keen aesthetic
                eye, attention to detail, and clean style renders beautiful and
                user-friendly websites, mobile apps, and graphics.
              </p>
            </div>
            <div className="role-container">
              <h3>Data Scientists</h3>
              <p>
                Our applicants love data. A lot. And with tools such as Python,
                R, and MATLAB, our interns can leverage data to improve your
                product, identify key audiences, and provide valuable insights
                into key performance indicators.
              </p>
            </div>
            <div className="role-container">
              <h3>And More...</h3>
              <p>
                By no means is this list comprehensive. Our applicants are
                diverse and up for any challenge. Let us know who you're looking
                for, and we'll find them.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>*/}
      <ScrollAnimation
        animateIn="fadeIn"
        className="full-container"
        animateOnce={true}
        style={{marginTop: 300}}
      >
         <div className="partners-subset-container">
          <h1 className="title">Our Summer 2022 Startups</h1>
          <PartnersSubset/>
         </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        className="full-container"
        animateOnce={true}
        style={{marginTop: 50}}
      >
        <div className="content-container full-container">
          <h1 className="title">how it works</h1>
          <div className="subcontent-container">
            <div className="desc-block">
              <h2>candidacy spots</h2>
              <p>
                A Candidacy Spot is allocated project work, mentorship, and
                budget for students referred by YES Internships. We ask all our
                start-ups to reserve a set number of Candidacy Spots for each
                recruitment cohort.{" "}
              </p>
              <h2 className="next-header">referrals</h2>
              <p>
                We refer the best students from schools such as Yale, Harvard,
                and Stanford to work at your start-up. Your interns will not
                only be qualified and experienced, but also passionate about
                achieving your start-up's goals and working by its values. You
                can always screen our referrals, and you ultimately decide who
                joins the team!
              </p>
              <h2 className="next-header">our process</h2>
              <p>
                By collaborating with student and faculty organizations at
                schools such as Yale, Harvard, and Stanford, YES Internships
                curates a talent pool unlike any other.
              </p>
              <p>
                Our screening is comprehensive, including written applications
                and a series of technical and non-technical interviews. We look
                for cultural fit, appropriate qualifications, enthusiasm, and
                drive in our reviewal process. All YES Interns are exceptional.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <Timeline>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent" }}
            contentArrowStyle={{ display: "none" }}
            date="January — February"
            iconStyle={{ background: "rgb(5,28,51)" }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Start-up Applications
            </h4>
            <p>
              Start-ups interested in joining our network should complete{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://forms.gle/jjyR29XpgKhF58xK7"
              >
                this form
              </a>
              . We'll get in touch once you complete the form. This step usually
              involves 1 to 2 calls with the start-up founder as well as 1 call
              with current or past student interns.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent" }}
            contentArrowStyle={{ display: "none" }}
            date="March"
            iconStyle={{ background: "rgb(5,28,51)" }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Student Applications
            </h4>
            <p>Students applications will be open in early March.</p>
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
              Our team reviews written applications and conducts interviews to
              learn more about our applicants.
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
              We introduce our start-ups to their paired applicants. We help
              prepare applicants for interviews, coordinate introductory calls,
              and facilitate onboarding.
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
              Summer internships tend to last from May to August; however, this
              timeline may differ from student to student. After we introduce
              applicants with start-ups, our start-ups have full authority over
              internship duration, projects, and timeline. We conduct brief
              check-ins with our interns from time to time to make sure they are
              having an impact at your start-up.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Timeline>
      <ScrollAnimation
        animateIn="fadeIn"
        className="full-container"
        animateOnce={true}
      >
        <div className="content-container full-container partner-testimonials-container">
          <h1 className="title">what our founders say</h1>
          <Testimonials testimonials={testimonials} />
        </div>
      </ScrollAnimation>
      {/*<ScrollAnimation
        animateIn="fadeIn"
        className="full-container third-party-partners"
        animateOnce={true}
      >
        <h1 className="title">other resources</h1>
        <div className="content-container-row full-container">
          <div className="subcontent-row-container">
            <div className="desc-block">
              <h2>earlier talent</h2>
              <p>Looking to hire high school students on top of undergrads?</p>
              <p>
                StandOut Search is a startup funded by the University of Chicago
                that provides a free resource matching top high schoolers with
                internships at startups. Most of their students are looking for
                virtual and unpaid internships. They rock at social media
                (TikTok), graphic design, and business development research.
                Some even have coding and financial modeling skills. Apply and
                learn more{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.standoutsearch.com/host-an-intern"
                >
                  here
                </a>
                !
              </p>
              <img
                className="standout-image"
                src={standout}
                alt="standout"
              ></img>
            </div>
          </div>
          <div className="subcontent-row-container">
            <div className="desc-block">
              <h2>growing your brand</h2>
              <p>Looking to grow your start-up's narrative?</p>
              <img
                className="zerotonarrative-image"
                src={zerotonarrative}
                alt="zerotonarrative"
              ></img>
              <p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="http://www.zerotonarrative.com/"
                >
                  Zero To Narrative
                </a>{" "}
                helps early-stage startup founders create foundational company
                narratives for fundraising, recruiting, and growth. Founded by
                Kyle Hietala (YC '18), Zero To Narrative supports fundraising
                through deliverables like interactive, in-depth memos in Notion;
                accelerates recruiting through deliverables like employer brand
                webpages and cultural storytelling; and enables marketing &#38;
                sales through deliverables like messaging toolkits, sales decks,
                and outreach campaigns. Kyle focuses on doing end-to-end
                strategy, advisory, and execution work, intensively
                concentrating
              </p>
            </div>
          </div>
        </div>
    </ScrollAnimation>*/}
    </div>
  );
});
