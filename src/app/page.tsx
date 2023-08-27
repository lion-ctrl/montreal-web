import Image from 'next/image';
import blockImage from '../../public/assets/images/block.webp';
import cowsImage from '../../public/assets/images/cows.webp';
// components
import { Animate, MaskImage } from 'components/animations';
import { Hero, RecipesSlider, Products } from 'components/app';
// styles
import { colors } from 'styles/variables';

export default function Home() {
  return (
    <>
      <Hero
        videoSrc="/assets/videos/hero.mp4"
        titleContent={
          <>
            <span className="block">Disfruta</span>{' '}
            <span className="block">del mejor</span>{' '}
            <span className="block">queso crema</span>
          </>
        }
      />
      <section className="py-12 px-2.5 md:px-12">
        <article
          className="row rounded-3xl"
          style={{ backgroundColor: colors.white }}
        >
          <figure className="col-12 md:col-6">
            <MaskImage>
              <Image
                className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                src={blockImage}
                alt="main-image"
              />
            </MaskImage>
          </figure>
          <aside className="col-12 md:col-6 p-4 md:p-10 lg:p-12 md:flex md:flex-col md:items-center md:justify-center">
            <div className="mb-8">
              <Animate
                variants={{
                  offscreen: {
                    y: 50,
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
                <p
                  className="fluid-font-h1 font-alfa font-bold text-center"
                  style={{ color: colors.color1 }}
                >
                  COMPARTE
                </p>
                <p
                  className="fluid-font-h1 font-alfa font-bold text-center"
                  style={{ color: colors.color1 }}
                >
                  EN
                </p>
                <p
                  className="fluid-font-h1 font-alfa font-bold text-center"
                  style={{ color: colors.color1 }}
                >
                  FAMILIA
                </p>
              </Animate>
            </div>
            <Animate
              className="font-bold text-center"
              style={{ color: colors.color1 }}
              tag="p"
              variants={{
                offscreen: {
                  y: 50,
                  opacity: 0,
                },
                onscreen: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    duration: 0.8,
                    delay: 0.5,
                  },
                },
              }}
            >
              Montreal siempre estara alli en tus momentos mas felices.
            </Animate>
          </aside>
        </article>
      </section>
      <RecipesSlider />
      <Products />
      <section
        className="flex items-center justify-center md:justify-start relative"
        style={{ height: 500 }}
      >
        <Image src={cowsImage} alt="cows" className="object-cover" fill />
        <div className="container mt-16 relative z-10">
          <Animate
            className="font-alfa fluid-font-h2 text-center md:text-left md:w-2/4"
            style={{ color: colors.white }}
            tag="h3"
            variants={{
              offscreen: {
                y: 50,
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
            CUMPLIMOS CON PRODUCTOS DE CALIDAD
          </Animate>
        </div>
      </section>
    </>
  );
}
