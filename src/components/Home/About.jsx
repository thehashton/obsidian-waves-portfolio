"use client";
import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import data from "@/data/info.json";
import DotsPattern from "@/components/DotsPattern/DotsPattern";
import "@/styles/animations.css";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 1,
    },
  }),
};

function About() {
  const [showH1, setShowH1] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const h1Timer = setTimeout(() => {
      setShowH1(true);
    }, 500); // Delay of 2 seconds for H1

    const typingTimer = setTimeout(() => {
      setStartTyping(true);
    }, 1000); // Delay of 2.5 seconds for typing animation

    return () => {
      clearTimeout(h1Timer);
      clearTimeout(typingTimer);
    };
  }, []);

  const typingSteps = [
    "Hi, I'm Harry Ashton a Front-end Developer who loves making great UI 💻",
    100, // Adjust this delay to slow down the typing effect
  ];

  return (
    <div className="about pt-40" data-scroll-index="1" id="about">
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="py-4 hidden lg:block"
      >
        <DotsPattern />
      </motion.div>
      <div className={"min-h-[300px]"}>
        {showH1 && (
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="flex flex-wrap cont"
          >
            <h1 className="text-5xl leading-[60px] md:text-6xl md:leading-[80px]">
              {startTyping && (
                <Typical
                  steps={typingSteps}
                  wrapper="span"
                  loop={1}
                  className="main-color font-bold"
                />
              )}
            </h1>
          </motion.div>
        )}
      </div>
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="stauts mt-10"
      >
        <div className="d-flex align-items-center">
          <div className="butn-presv">
            <a
              href="#0"
              className="butn butn-md butn-bord radius-5 skew !border-orange-500 text-xl"
            >
              <span>Download C.V</span>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        custom={6}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="text mt-80"
      >
        <motion.h6
          custom={7}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="sub-title mb-15"
        >
          About Me.
        </motion.h6>
        <motion.p
          custom={8}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="fz-20"
        >
          {data.brief}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default About;
