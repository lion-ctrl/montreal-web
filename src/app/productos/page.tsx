/* eslint-disable @next/next/no-img-element */
import React from 'react';
// components
import { Hero, Products } from 'components/app';

export default function ProductosPage() {
  return (
    <>
      <Hero
        titleContent="Hay un producto para todos"
        videoSrc="/assets/videos/products-hero.mp4"
      />
      <Products />
    </>
  );
}
