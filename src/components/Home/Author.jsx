"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThreeJSAnimation from "@/components/ThreeJSAnimation";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 4, // Adjust the delay to start after all text animations
      duration: 1,
    },
  },
};

function Author() {
  const [stickyItemWidth, setStickyItemWidth] = useState(undefined);
  const [stickyItemTop, setStickyItemTop] = useState(undefined);

  function isSticky() {
    const stickyItemEl = document.querySelector("#sticky_item");
    const stickyItemParentEl =
      document.querySelector("#sticky_item").parentElement;
    const scrollTop = window.scrollY;

    if (scrollTop >= stickyItemTop) stickyItemEl.classList.add("is-sticky");
    else stickyItemEl.classList.remove("is-sticky");

    if (
      scrollTop >= stickyItemTop &&
      stickyItemParentEl.getBoundingClientRect().top < -775
    ) {
      stickyItemEl.classList.add("is-positioned");
      stickyItemParentEl.style.position = "relative";
    } else {
      stickyItemEl.classList.remove("is-positioned");
    }
  }

  useEffect(() => {
    const stickyItemEl = document
      .querySelector("#sticky_item")
      .getBoundingClientRect();
    setStickyItemWidth(stickyItemEl.width);
    setStickyItemTop(stickyItemEl.top);
  }, []);

  useEffect(() => {
    if (!stickyItemTop) return;
    window.addEventListener("scroll", isSticky);
    return () => window.removeEventListener("scroll", isSticky);
  }, [stickyItemTop]);

  return (
    <motion.div
      custom={7}
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="author-profile relative md:author-profile lg:!flex hidden !w-full !max-w-[360px] rounded-full pt-80 pb-80"
      id="sticky_item"
      style={{ width: stickyItemWidth - 100 }}
    >
      <ThreeJSAnimation />
    </motion.div>
  );
}

export default Author;
