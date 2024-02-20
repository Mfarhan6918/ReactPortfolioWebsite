import React from "react";
import { IoIosContact } from "react-icons/io";
import PageHeaderContent from "../../pageHeaderContent";
import "./style.scss";
import { Animate } from "react-simple-animate";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="contact Me"
        icon={<IoIosContact size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div className="nameWrapper">
                <input required type={"text"} name="name" className="inputName" />
                <label htmlFor="name" className="nameLable">Name</label>
              </div>
              <div className="emailWrapper">
                <input required type={"email"} name="email" className="inputEmail" />
                <label htmlFor="email" className="emailLable">Email</label>
              </div>
              <div className="descriptionWrapper">
                <textarea rows="5" required name="description" className="inputDescription"/>
                <label htmlFor="description" className="descriptionLable">Description</label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
