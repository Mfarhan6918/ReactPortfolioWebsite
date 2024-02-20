import React from "react";
import { MdRoundaboutRight } from "react-icons/md";
import PageHeaderContent from "../../pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiSass, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const personalDetails = [
  {
    label: "Name:",
    value: "Muhammad Farhan",
  },
  {
    label: "Age:",
    value: "27 years",
  },
  {
    label: "Address:",
    value: "Pakistan",
  },
  {
    label: "Email:",
    value: "mohammadfarhan6918@gmail.com",
  },
  {
    label: "Contact No:",
    value: "+92-304-7167688",
  },
];
const jobSummary = `Seasoned and independent Front End Developer with 8-months of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that we provide a thorough and professional approach to your resume. As a Front End Developer we'll be judged by your ability to use UX and UI concepts and follow design guideline. It's about expressing your attention to detail and how we can help implement design ideas for your future employer. `;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<MdRoundaboutRight  size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.8}
            // delay={0.5}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.8}
            // delay={0.5}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.8}
            // delay={0.5}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaReact size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiJavascript1 size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiTailwindcss size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiSass size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
