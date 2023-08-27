import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// components
import { Animate } from 'components/animations';
// styles
import { colors } from 'styles/variables';

export const Products = () => {
  return (
    <section className="container my-16">
      <h2
        className="font-bold text-center md:mb-16"
        style={{ color: colors.color1 }}
      >
        Elige el producto de tu preferencia
      </h2>
      <div className="row md:vg-8">
        {[
          {
            id: 1,
            productName: 'Philadelphia® Original 180g',
            productType: 'Barra',
            productImage: '/assets/images/180.png',
            slug: 'product',
          },
          {
            id: 2,
            productName: 'Philadelphia® Original 180g',
            productType: 'Barra',
            productImage: '/assets/images/180.png',
            slug: 'product',
          },
          {
            id: 3,
            productName: 'Philadelphia® Original 180g',
            productType: 'Barra',
            productImage: '/assets/images/180.png',
            slug: 'product',
          },
        ].map((p, i) => (
          <Link
            href={p.slug}
            key={p.id}
            className={`col-12 md:col-4 ${i % 2 !== 0 ? 'md:-mt-20' : ''}`}
          >
            <Animate
              variants={{
                offscreen: {
                  y: 150,
                  opacity: 0,
                },
                onscreen: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    duration: 0.8,
                  },
                },
              }}
            >
              <div className="relative w-full" style={{ height: '300px' }}>
                <Image
                  src={p.productImage}
                  alt="image"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p
                className="font-bold text-center"
                style={{ color: colors.grayFont }}
              >
                {p.productType}
              </p>
              <p
                className="font-bold text-center text-2xl"
                style={{ color: colors.color1 }}
              >
                {p.productName}
              </p>
            </Animate>
          </Link>
        ))}
      </div>
    </section>
  );
};
