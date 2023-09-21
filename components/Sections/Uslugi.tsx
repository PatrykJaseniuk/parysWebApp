import React, { use, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, EffectCreative, Navigation } from "swiper";

import { Button, Container, Heading, List, ListIcon, ListItem, ScaleFade, Text, border, flexbox, position, useBreakpoint, useBreakpointValue, useOutsideClick } from "@chakra-ui/react";
import { Background, Fitures, Section, UnderSection } from "@/components/Basic";
import { useIntersectionObserver } from "usehooks-ts";
import { Cards, SwiperCardProps, colorsPackages } from "@/components/Cards";
import { SectionDane, UslugaDane, UslugiDane } from "@/Data/Interface";



export const Uslugi = ({ data }: { data: SectionDane<UslugiDane> }) => {
  return (
    <Section
      img={data.background}
      nazwa={data.title}
    >
      <div id={data.title}></div>
      {data.zawartosc.uslugi.map((usluga, index) => {
        return (
          <Usluga
            data={{
              title: usluga.title,
              description: usluga.description,
              videoSrc: usluga.videoSrc,
              cennik: usluga.cennik,
            }
            }
            isInverse={index % 2 === 0}
          />
        )
      })}
    </Section>
  )
}





function Usluga({ data, isInverse = false }:
  { data: UslugaDane, isInverse?: boolean }) {
  const screenSizeToCheck = useBreakpointValue({ base: 'base', lg: 'lg' })
  const screenSize: 'base' | 'lg' = screenSizeToCheck as ('base' | 'lg') || 'base'
  const values = {
    width: { base: '100%', md: '100%', lg: '45%' }[screenSize],
  }

  // const height = useBreakpointValue({ base: '20rem', md: '26rem', lg: '30rem' })
  const refFiture = useRef<HTMLDivElement | null>(null)
  const refCard = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(refCard, { threshold: 1 });
  const [showCard, setShowCard] = useState(false)
  useOutsideClick({
    ref: refCard,
    handler: () => setShowCard(false),
  })

  useEffect(() => {
    !entry?.isIntersecting && setShowCard(false)
  }, [entry?.isIntersecting])

  const visibility = showCard ? 'visible' : 'hidden'

  const cardsProps: SwiperCardProps[] = data.cennik.map((cenaDane, index) => {
    return {
      data: cenaDane,
      colorPackage: colorsPackages[index % colorsPackages.length],

    }
  })

  const video =
    // <video autoPlay loop muted style={{ width: values.width, objectFit: 'cover', borderRadius: '10%' }}>
    //   <source src={data.videoSrc} type="video/mp4" />
    // </video>;
    // youtube video
    <iframe
      style={{ width: values.width, height: 'auto', borderRadius: '10%' }}
      src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
    />

  const text =
    <div ref={refFiture} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      {/* <ScaleFade initialScale={0.9} in={entry?.isIntersecting}> */}
      <Text style={{ fontSize: '1.5rem' }} align='start'>{data.description}</Text>
      {data.cennik.length > 0 &&
        < Button size='lg' style={{ width: '6rem', color: colorsPackages[0].font, background: colorsPackages[0].background, zIndex: '1' }} onClick={() => setShowCard((prev) => !prev)} marginTop='1rem'>CENNIK</Button>
      }

      {/* </ScaleFade> */}
    </div >;

  const cards =
    <div ref={refCard} style={{ zIndex: 10, visibility: visibility, position: 'absolute' }}>
      <Cards cards={cardsProps} />
    </div>

  const head =
    // <ScaleFade initialScale={0.9} in={entry?.isIntersecting}>
    <Heading size='2xl' >{data.title}</Heading>
  // </ScaleFade>;

  const headerText = <div style={{ width: values.width }}>{head}{text}</div>

  const layout = {
    base: [cards, head, video, text],
    lg: [cards, isInverse ? [headerText, video] : [video, headerText]]
  }



  return (
    <div style={{ width: '100%', marginTop: '2rem' }}>
      <Fitures  >
        {layout[screenSize]}
      </Fitures>
      {/* </ScaleFade> */}
    </div>
  )
}

