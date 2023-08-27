import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { type Settings } from 'react-slick';
// components
import { Animate } from 'components/animations';
import { Slider } from 'components/app';
// images
import breakfastImg from '../../../../public/assets/images/breakfast.jpg';
import dessertImg from '../../../../public/assets/images/dessert.jpg';
import lunchImg from '../../../../public/assets/images/lunch.jpg';
import dinnerImg from '../../../../public/assets/images/dinner.jpg';
// variables
import { breakpoints, colors } from 'styles/variables';

export const RecipesSlider = ({ settings }: { settings?: Settings }) => {
  return (
    <div className="py-8" style={{ backgroundColor: colors.white }}>
      <Slider
        settings={{
          autoplaySpeed: 3000,
          autoplay: true,
          dots: false,
          infinite: true,
          initialSlide: 0,
          pauseOnHover: true,
          slidesToScroll: 1,
          slidesToShow: 3,
          speed: 500,
          swipeToSlide: true,
          responsive: [
            {
              breakpoint: breakpoints.xl,
              settings: {
                arrows: true,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: breakpoints.lg,
              settings: {
                arrows: true,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: breakpoints.md,
              settings: {
                arrows: true,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: breakpoints.sm,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
          ...settings,
        }}
      >
        <div className="p-4">
          <Animate
            variants={{
              offscreen: {
                x: 150,
                opacity: 0,
              },
              onscreen: {
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  duration: 0.8,
                },
              },
            }}
          >
            <div
              className="flex fluid-font-h2 font-alfa h-72 md:h-96 items-center justify-center px-8 py-16 rounded-3xl text-center"
              style={{
                backgroundColor: colors.color1,
                color: colors.white,
              }}
            >
              Disfruta de las mas ricas recetas
            </div>
          </Animate>
        </div>
        {[
          {
            recipeImage: breakfastImg,
            name: 'Desayuno',
            href: '/recetas?type=desayuno',
          },
          {
            recipeImage: dessertImg,
            name: 'Postre',
            href: '/recetas?type=postre',
          },
          {
            recipeImage: lunchImg,
            name: 'Almuerzo',
            href: '/recetas?type=almuerzo',
          },
          {
            recipeImage: dinnerImg,
            name: 'Cena',
            href: '/recetas?type=cena',
          },
        ].map(({ recipeImage, name, href }, i) => (
          <div key={`${name}-${i}`} className="p-4">
            <Animate
              variants={{
                offscreen: {
                  x: 150,
                  opacity: 0,
                },
                onscreen: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    duration: 0.8,
                    bounce: 0.4,
                  },
                },
              }}
            >
              <Link href={href}>
                <div
                  className="flex h-72 md:h-96 items-end justify-center px-8 py-6 relative rounded-3xl"
                  style={{
                    backgroundColor: colors.color1,
                    color: colors.white,
                  }}
                >
                  <Image
                    className="rounded-3xl"
                    src={recipeImage}
                    alt={name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute black-gradient bottom-0 left-0 right-0 rounded-3xl top-0" />
                  <p className="fluid-font-h2 relative z-20">{name}</p>
                </div>
              </Link>
            </Animate>
          </div>
        ))}
      </Slider>
    </div>
  );
};
