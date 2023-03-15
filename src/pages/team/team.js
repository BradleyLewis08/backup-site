import "./team.scss";

import { withController } from "react-scroll-parallax";
import ScrollAnimation from "react-animate-on-scroll";

import {
  founders,
  directors,
  leadership,
  recruiting,
  design,
  development,
  marketing,
} from "./team-data/bios";

const Team = withController(() => {
  return (
    <div className="team-container page-container">
      <div className="full-container">
        <div className="header-container">
          <h1 className="title" style={{ marginLeft: '0px' }}>team</h1>
          <h1 className="subtitle">who we are</h1>
          <p className="who-we-are-desc">
            We are a team of students who are entrepreneurs, developers, recruiters, designers, and so much more.
            But no matter who we are, each one of us are invested in the same thing -- growing the mission and each other.
          </p>
          <p className="who-we-are-desc">
            Interested in joining us? Applications for joining our team for Fall 2022 have closed, but reach out via email
            if you have questions or are interested.
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:internships@yesatyale.org"
          >
            <div className="regular-button">Contact Us</div>
          </a>
          {/*<div className="desc-block">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://bit.ly/joinyesinternshipsf22"
            >
              <div className="regular-button">Join Us</div>
            </a>
            <div className="universities-represented-container">
              <h4>Universities represented</h4>
              <div className="universities-represented-container-img-container">
                <img src={yale} />
                <img src={harvard} />
                <img src={princeton} />
                <img src={stanford} />
                <img src={upenn} />
                <img src={uchicago} />
                <img src={ucb} />
              </div>
            </div>
          </div>*/}
        </div>
      </div>

      <div className="content-container bios-sections-container">
        <div className="founders-directors-container">
          <BioSection
            section={founders}
            name="founders"
            description=""
            halfSized
          />
          <BioSection
            section={directors}
            name="directors"
            description=""
            halfSized
          />
        </div>
        <BioSection
          section={leadership}
          name="leadership"
          description=""
        />
        <BioSection
          section={recruiting}
          name="recruiters"
          description="Our team of recruiters represents a wide range of skills, interests, and 
                        expertise. Their responsibilities include building relationships with start-up founders,
                        identifying gaps in our partners' recruiting needs, and connecting with students
                        to help provide meaningful internship experiences."
        />
        <BioSection
          section={development}
          name="development"
          description="To support our recruiting processes, YES Internships requires 
                        robust infrastructure to operate. We utilize React and Amazon Web Services to build recruiting
                        software that securely manages start-up and applicant information."
        />
        <BioSection
          section={design}
          name="design"
          description="This website, marketing material, and (upcoming) software products all need to be
                        designed. Who by? These amazing designers who have strong capacities to visually communicate 
                        information in a way that's not just functional but also beautiful."
        />
        <BioSection
          section={marketing}
          name="marketing"
          description="Our marketing team specializes in engaging start-ups and students interested in
                        participating in YES Internships."
        />
      </div>
    </div>
  );
});

const BioSection = ({ section, name, description, halfSized, ...rest }) => {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      className={"bio-section-container " + (halfSized ? "half-container" : "full-container")}
      animateOnce={true}
      {...rest}
    >
      <h1 className={"subtitle " + (name === 'directors' ? "subtitle-shift" : "")}>{name}</h1>
      <p className="bio-section-description">{description}</p>
      <div className={"bios-container " + (halfSized ? "column" : "")}>
        {section.map((bio, index) => (
          <Bio bio={bio} key={index} halfSized={halfSized} name={name}></Bio>
        ))}
      </div>
    </ScrollAnimation>
  );
};

const Bio = ({ bio, halfSized, name }) => {
  return (
    <div
      className={"bio-container " + (halfSized ? "" : "half-column-width") + (name === "directors" ? "spaced-column" : "")}
      onClick={() => window.open(bio.linkedin, "_blank")}
    >
      <div className="img-container">
        <img src={bio.img} alt="" />
      </div>
      <div className="info-container">
        <h4 className="bio-name">{bio.name}</h4>
        <h5 className="bio-pos">{bio.position}</h5>
        <div className="bio-desc-container">
          {bio.education ? (
            <p className="bio-desc">📚 {bio.education}</p>
          ) : (
            <></>
          )}
          {bio.work ? <p className="bio-desc">💼 {bio.work}</p> : <></>}
          {bio.interests ? (
            <p className="bio-desc">💡 {bio.interests}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
