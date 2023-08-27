'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export const MaskImage = ({ children }: Props) => {
  const visibleMask = useRef(
    `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`
  );
  const hiddenMask = useRef(
    `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
  );

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        offscreen: {
          WebkitMaskImage: hiddenMask.current,
          maskImage: hiddenMask.current,
        },
        onscreen: {
          WebkitMaskImage: visibleMask.current,
          maskImage: visibleMask.current,
          transition: { duration: 1, delay: 1 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
