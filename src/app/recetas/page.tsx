'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
// components
import { Animate } from 'components/animations';
import { Hero, RecipesSlider } from 'components/app';
import { Button, Input, Select } from 'components/ui';
// styles
import { colors } from 'styles/variables';
import { ClockIcon, SearchIcon } from 'components/icons';
import Link from 'next/link';
import { debounce } from 'helpers';

export default function RecetasPage() {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string>('');
  const [type, setType] = useState('');

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const queryAPI = async (): Promise<void> => {
      let URI = `${pathname}`;
      if (search.length > 3) {
        URI += `?search=${search}`;
      }
      if (type.length) {
        URI += `${search.length > 3 ? '&' : '?'}type=${type}`;
      }
      window.history.pushState({ path: URI }, '', URI);
      // router.push(`${pathname}?q=${search}`, { scroll: true });
    };

    queryAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, search, type]);

  return (
    <>
      <Hero titleContent="Recetas" videoSrc="/assets/videos/recipes-hero.mp4" />
      <section className="my-16">
        <RecipesSlider />
      </section>
      <h2
        className="font-alfa font-bold text-center"
        style={{ color: colors.color1 }}
      >
        Estoy buscando...
      </h2>
      <section className="container hg-16 mb-16 mt-8 row vg-8">
        <div className="col-12 md:col-8">
          <Input
            placeholder="Buscar recetas..."
            type="text"
            onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }, 300)}
          />
        </div>
        <div className="col-12 md:col-4">
          <Button
            block
            icon={<SearchIcon fill={colors.white} />}
            style={{ height: '100%' }}
            type="primary"
          >
            Buscar
          </Button>
        </div>
        <div className="col-12">
          <Select
            options={[
              { key: 1, label: 'Desayuno', value: 'desayuno' },
              { key: 2, label: 'Almuerzo', value: 'almuerzo' },
              { key: 3, label: 'Cena', value: 'cena' },
              { key: 4, label: 'Postre', value: 'postre' },
            ]}
            placeholder="Elige un momento del dia"
            onChange={(e) => {
              setType(e.target.value.toString());
            }}
          />
        </div>
      </section>
      <section className="container my-16 row hg-32 md:vg-16">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
          <Link
            className="col-12 md:col-4"
            key={i}
            href={'/recetas/arroz-con-leche-de-chocolate-123456'}
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
              <div
                className={`box-shadow p-4 ${
                  i % 2 !== 0 ? '-rotate-3' : ''
                } rounded-2xl`}
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
              <p
                className="font-bold text-center my-4"
                style={{ color: colors.color1 }}
              >
                Arroz con leche de chocolate
              </p>
              <div className="flex items-center justify-center">
                <div style={{ marginRight: '.5rem', width: '28px' }}>
                  <ClockIcon fill={colors.color2} />
                </div>
                <p className="text-center">Tiempo total: 20 min</p>
              </div>
            </Animate>
          </Link>
        ))}
      </section>
    </>
  );
}
