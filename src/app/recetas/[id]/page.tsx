'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// components
import { ArrowPrevSmallIcon, ClockIcon, ForkSpoonIcon } from 'components/icons';
import { Tabs } from 'components/ui';
// styles
import { colors } from 'styles/variables';
import { Animate } from 'components/animations';

export default function Page() {
  return (
    <section className="container mb-16 mt-8 md:mt-16">
      <Animate
        className="hg-32 row"
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
        <div className="col-12 md:col-6">
          <Link
            className="flex items-center justify-center"
            href={'/recetas'}
            style={{ color: colors.color1 }}
          >
            <div style={{ marginRight: '.5rem', width: '28px' }}>
              <ArrowPrevSmallIcon fill={colors.color1} />
            </div>
            <p className="hover:font-bold">Volver a todas las recetas</p>
          </Link>
          <h1
            className="font-alfa font-bold my-8 text-center"
            style={{ color: colors.color1 }}
          >
            Arroz con leche de chocolate
          </h1>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mr-4">
              <div style={{ marginRight: '.5rem', width: '28px' }}>
                <ForkSpoonIcon fill={colors.color2} />
              </div>
              <p className="fluid-font-small">10 Porciones</p>
            </div>
            <div className="flex items-center justify-center">
              <div style={{ marginRight: '.5rem', width: '28px' }}>
                <ClockIcon fill={colors.color2} />
              </div>
              <p className="fluid-font-small">Tiempo de preparación: 45 min</p>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div
            className={`box-shadow p-4 -rotate-3 rounded-2xl sm:w-2/4 md:w-3/4 sm:mr-auto sm:ml-auto`}
            style={{ backgroundColor: colors.white }}
          >
            <div
              className="relative overflow-hidden"
              style={{ height: '250px' }}
            >
              <Image
                alt="image"
                className="hover:scale-125"
                src={'/assets/images/breakfast.jpg'}
                fill
                style={{
                  objectFit: 'cover',
                  transition: '.5s ease transform',
                }}
              />
            </div>
          </div>
        </div>
      </Animate>
      <h2
        className="font-alfa font-bold my-16 text-center"
        style={{ color: colors.color1 }}
      >
        ¿Listo para comenzar?
      </h2>
      <Tabs
        items={[
          {
            label: 'Ingredientes',
            key: 1,
            children: (
              <div className="row hg-8 ml-auto mr-auto w-1/4">
                <p className="col-6 font-bold">8 x</p>
                <p className="col-6">huevos</p>
                <p className="col-6">8 x</p>
                <p className="col-6">huevos</p>
                <p className="col-6">8 x</p>
                <p className="col-6">huevos</p>
              </div>
            ),
          },
          {
            label: 'Método',
            key: 2,
            children: (
              <div className="row hg-16">
                <div className="col-2 flex items-center justify-center">
                  <p
                    className="font-bold rounded-full"
                    style={{
                      border: `2px solid ${colors.color2}`,
                      color: colors.color2,
                      padding: '8px',
                    }}
                  >
                    1
                  </p>
                </div>
                <p
                  className="col-10 flex items-center justify-start"
                  style={{ color: colors.color1 }}
                >
                  CORTAR láminas de pepino con ayuda de un pelador, reservar.
                </p>
                <div className="col-2 flex items-center justify-center">
                  <p
                    className="font-bold rounded-full"
                    style={{
                      border: `2px solid ${colors.color2}`,
                      color: colors.color2,
                      padding: '8px',
                    }}
                  >
                    2
                  </p>
                </div>
                <p className="col-10" style={{ color: colors.color1 }}>
                  MEZCLAR en un recipiente atún, mango, jitomate, cebolla,
                  aguacate, cilantro, jugo de limón, salsa picante, sal y
                  pimienta al gusto.
                </p>
                <div className="col-2 flex items-center justify-center">
                  <p
                    className="font-bold rounded-full"
                    style={{
                      border: `1px solid ${colors.color2}`,
                      color: colors.color2,
                      padding: '8px',
                    }}
                  >
                    3
                  </p>
                </div>
                <p className="col-10" style={{ color: colors.color1 }}>
                  UNTAR sobre las rebanadas pepinoQueso Crema Philadelphia®
                  Untable Ligero y colocar una cucharada de la mezcla anterior.
                </p>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
}
