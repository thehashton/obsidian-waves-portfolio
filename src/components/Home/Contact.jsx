"use client";

import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 2, // Delay starts 2 seconds after the typing animation
      duration: 1,
    },
  }),
};

function Contact() {
  const [startTyping, setStartTyping] = useState(false);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const typingTimer = setTimeout(() => {
              setStartTyping(true);
            }, 1000); // Delay of 2 seconds for typing animation

            const elementsTimer = setTimeout(() => {
              setShowElements(true);
            }, 1000); // Delay of 4 seconds for showing other elements

            return () => {
              clearTimeout(typingTimer);
              clearTimeout(elementsTimer);
            };
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const section = document.querySelector("#contact");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const typingSteps = ["Let's work together"];

  return (
    <section
      className="contact section-padding bord-thin-top min-h-[500px]"
      data-scroll-index="6"
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 contact-item">
            <div className="sec-head md-mb80">
              <h6 className="dot-titl mb-10">Get In Touch</h6>
              <h2 className="fz-50">
                {startTyping && (
                  <Typical
                    steps={typingSteps}
                    wrapper="span"
                    loop={1}
                    className="main-color font-bold"
                  />
                )}
              </h2>
              {showElements && (
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <p className="fz-15 mt-10">
                    If you would like to work with us or just want to get in
                    touch, we’d love to hear from you!
                  </p>
                  <div className="phone fz-30 fw-600 mt-30 underline">
                    <a href="#0" className="main-color">
                      +1 840 841 25 69
                    </a>
                  </div>
                  <ul className="rest social-text d-flex mt-60">
                    <li className="mr-30">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mr-30">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mr-30">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
          {showElements && (
            <motion.div
              className="col-lg-6 offset-lg-1 contact-item"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              custom={2}
            >
              <div className="full-width">
                <form id="contact-form" method="post" action="contact.php">
                  <div className="messages"></div>
                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-30">
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        ></textarea>
                      </div>
                      <div className="mt-30">
                        <button type="submit">
                          <span className="text">Send A Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
