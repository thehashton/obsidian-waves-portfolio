"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Toast({ message, type = "success", isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const bgColor = type === "success" ? "#10b981" : "#ef4444";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          data-toast-container
          data-no-cursor
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            top: "100px",
            right: "20px",
            zIndex: 99999,
            padding: "18px 22px",
            borderRadius: "10px",
            backgroundColor: bgColor,
            color: "white",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
            minWidth: "300px",
            maxWidth: "400px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            border: "none",
            outline: "none",
            pointerEvents: "auto",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {type === "success" ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 4L6 11.3333L2.66667 8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          
          {/* Message */}
          <p 
            style={{ 
              margin: 0, 
              fontSize: "14px", 
              lineHeight: "1.5",
              fontWeight: "400",
              flex: 1,
            }}
          >
            {message}
          </p>
          
          {/* Close Button - Simple X */}
          <button
            onClick={onClose}
            type="button"
            aria-label="Close notification"
            data-no-cursor
            style={{
              marginLeft: "auto",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "20px",
              flexShrink: 0,
              opacity: 0.8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.8";
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;

