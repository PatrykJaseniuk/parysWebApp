import { SectionDane, ZajeciaGrupoweDane, ZajecieDane } from "@/Data/Interface"
import { Fitures, Section } from "../Basic"
import { Button, Heading, Text, useBreakpointValue, useOutsideClick } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { useIntersectionObserver } from "usehooks-ts"
import { SwiperCardProps } from "../Cards"


export const ZajeciaGrupowe = ({ data }: { data: SectionDane<ZajeciaGrupoweDane> }) => {
    return (
        <Section
            img={data.background}
            nazwa={data.title}
        >
            <Text align='center' fontSize='2xl' fontWeight='bold' >{data.zawartosc.description}</Text>

            {data.zawartosc.zajecia.map((zajecie, index) => <Zajecie
                data={zajecie}
                isInverse={index % 2 === 0}
            />)}

        </Section>
    )
}

function Zajecie({ data, isInverse = false }:
    { data: ZajecieDane, isInverse?: boolean }) {


    const calendarWidth = useBreakpointValue({ base: '90vw', lg: '45%' })
    const screenSizeToCheck = useBreakpointValue({ base: 'base', lg: 'lg' })
    const screenSize: 'base' | 'lg' = screenSizeToCheck as ('base' | 'lg') || 'base'
    const values = {
        width: { base: '100%', md: '100%', lg: '45%' }[screenSize],
    }

    // const height = useBreakpointValue({ base: '20rem', md: '26rem', lg: '30rem' })
    const refFiture = useRef<HTMLDivElement | null>(null)
    const refCard = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(refFiture, { threshold: 0.1 });
    const [showCard, setShowCard] = useState(false)
    useOutsideClick({
        ref: refCard,
        handler: () => setShowCard(false),
    })
    // useEffect(() => {
    //   registerdHooks.push(setShowCard)
    // }, [])

    useEffect(() => {
        !(entry?.isIntersecting) && setShowCard(false)
    }, [entry?.isIntersecting])
    const visibility = showCard ? 'visible' : 'hidden'


    const video =
        <img style={{ width: values.width, objectFit: 'cover', borderRadius: '100%' }} src={data.imgSrc} />

    const text =
        <div ref={refFiture} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            {/* <ScaleFade initialScale={0.9} in={entry?.isIntersecting}> */}
            <Text align='start'>{data.description}</Text>
            <Button onClick={() => setShowCard((prev) => !prev)} marginTop='1rem'>Kalendarz</Button>
            {/* </ScaleFade> */}
        </div>;

    const head =
        // <ScaleFade initialScale={0.9} in={entry?.isIntersecting}>
        <Heading size='2xl' >{data.title}</Heading>
    // </ScaleFade>;

    const headerText = <div style={{ width: values.width }}>{head}{text}</div>

    const layout = {
        base: [head, video, text],
        lg: isInverse ? [headerText, video] : [video, headerText]
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            <Fitures  >
                {layout[screenSize]}
                <div ref={refCard} style={{ zIndex: 10, visibility: visibility, position: 'absolute' }}>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&showTitle=0&showNav=0&showDate=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&mode=WEEK&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDB" style={{ width: '90vw', height: '50rem', }}></iframe>
                </div>
            </Fitures>
            {/* </ScaleFade> */}
        </div>
    )
}