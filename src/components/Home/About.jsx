"use client";
import React from "react";
import { motion } from "framer-motion";
import data from "@/data/info.json";
import DotsPattern from "@/components/DotsPattern/DotsPattern";
import "@/styles/animations.css";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5, // Adjust the delay as needed
      duration: 1,
    },
  }),
};

function About() {
  return (
    <div className="about pt-40" data-scroll-index="1" id="about">
      <div className="py-4 hidden lg:block">
        <DotsPattern />
      </div>
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="flex flex-wrap cont"
      >
        <h1 className="text-5xl leading-[60px] md:text-6xl md:leading-[80px]">
          Hi, I'm <span className="main-color font-bold">Harry Ashton</span> a{" "}
          <span className="bord">
            Front-end Developer<i></i>
          </span>{" "}
          who loves making great UI 💻
        </h1>
      </motion.div>
      <motion.div
        custom={3}
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
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="text mt-80"
      >
        <motion.h6
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="sub-title mb-15"
        >
          About Me.
        </motion.h6>
        <motion.p
          custom={6}
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
