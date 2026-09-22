"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  className = "",
  viewportMargin = "-50px",
  once = true,
  ...props
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case "fade-up":
        return {
          initial: { opacity: 0, y: 35 },
          whileInView: { opacity: 1, y: 0 },
        };
      case "fade-in":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
        };
      case "fade-left":
        return {
          initial: { opacity: 0, x: -35 },
          whileInView: { opacity: 1, x: 0 },
        };
      case "fade-right":
        return {
          initial: { opacity: 0, x: 35 },
          whileInView: { opacity: 1, x: 0 },
        };
      case "zoom-in":
        return {
          initial: { opacity: 0, scale: 0.94 },
          whileInView: { opacity: 1, scale: 1 },
        };
    }
  };

  const { initial, whileInView } = getVariants();

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic out
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0.1,
  className = "",
  viewportMargin = "-50px",
  once = true,
}: {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
