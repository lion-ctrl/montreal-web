'use client';
import React from 'react';
import { type Variants, motion } from 'framer-motion';

export const Animate = ({
  className,
  tag,
  children,
  style,
  variants,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  tag?: 'div' | 'h1' | 'h3' | 'p';
  variants?: Variants;
}) => {
  if (tag === 'h1') {
    return (
      <motion.h1
        className={className}
        style={style}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={variants}
      >
        {children}
      </motion.h1>
    );
  }
  if (tag === 'h3') {
    return (
      <motion.h3
        className={className}
        style={style}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={variants}
      >
        {children}
      </motion.h3>
    );
  }
  if (tag === 'p') {
    return (
      <motion.p
        className={className}
        style={style}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={variants}
      >
        {children}
      </motion.p>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
