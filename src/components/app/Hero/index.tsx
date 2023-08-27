'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { colors } from 'styles/variables';

export const Hero = ({
  titleContent,
  videoSrc,
}: {
  titleContent: React.ReactNode;
  videoSrc: string;
}) => {
  return (
    <section
      className="flex flex-col items-center md:items-start justify-center relative"
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
        className="font-alfa font-bold leading-normal md:leading-normal md:ml-4 text-center text-4xl sm:text-6xl w-4/5 md:w-2/4 z-10"
        style={{ color: colors.white }}
      >
        {titleContent}
      </motion.h1>
      <video
        autoPlay
        className="absolute h-full object-cover w-full"
        loop
        muted
        src={videoSrc}
      ></video>
    </section>
  );
};
