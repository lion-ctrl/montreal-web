'use client';
import React from 'react';
import Slick, { type CustomArrowProps, type Settings } from 'react-slick';

export const Slider = ({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings: Settings;
}) => {
  const NextArrow = ({ onClick }: CustomArrowProps) => (
    <div className="box-shadow next-arrow" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }: CustomArrowProps) => (
    <div className="box-shadow prev-arrow" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );

  return (
    <Slick {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
      {children}
    </Slick>
  );
};
