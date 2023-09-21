import { Button, Heading, Text, useBreakpointValue, useOutsideClick } from "@chakra-ui/react"
import { Fitures, Section } from "../Basic"
import { SectionDane, TrenerDane, ZajeciaIndywidualneDane } from "@/Data/Interface"
import { Cards, SwiperCardProps, colorsPackages } from "../Cards"
import { useEffect, useRef, useState } from "react"
import { useIntersectionObserver } from "usehooks-ts"

export const ZajeciaIndywidualne = ({ data }: { data: SectionDane<ZajeciaIndywidualneDane> }) => {
    const refFiture = useRef<HTMLDivElement | null>(null)
    const refCard = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(refFiture, { threshold: 1 });
    const [showCard, setShowCard] = useState(false)
    useOutsideClick({
        ref: refCard,
        handler: () => setShowCard(false),
    })
    useEffect(() => {
        !entry?.isIntersecting && setShowCard(false)
    }, [entry?.isIntersecting])
    const visibility = showCard ? 'visible' : 'hidden'

    const cardsProps: SwiperCardProps[] = data.zawartosc.cennik.map((cenaDane, index) => {

        return {
            data: cenaDane,
            colorPackage: colorsPackages[index % colorsPackages.length],

        }
    })

    return (
        <Section
            nazwa={data.title}
            img={data.background}
        >
            <Text style={{ fontSize: '1.5rem' }}>{data.zawartosc.description}</Text>

            <div ref={refCard} style={{ zIndex: 10, visibility: visibility, position: 'absolute' }}>
                <Cards cards={cardsProps} />
            </div>


            <Button onClick={() => setShowCard((prev) => !prev)}>
                cennik
            </Button>

            <div style={{
                display: 'flex',
                flexFlow: 'wrap',
                // gap: '2rem',
                justifyContent: 'center',
            }}>


                {data.zawartosc.trenerzy.map((trener, index) => <Trener
                    key={index}
                    data={trener}
                    isInverse={index % 2 == 0}
                />)}
            </div>
        </Section>
    )
}

function Trener({ data, isInverse = false }:
    { data: TrenerDane, isInverse?: boolean }) {

    const width = useBreakpointValue({ base: '45%', md: '15rem', lg: '20rem' })
    return <div style={{
        width: width,
        // height: '12rem',
        // border: 'solid 1rem',
        // borderColor: colorsPackages[0].background,
        borderRadius: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1rem'
    }}>
        <Heading size='xl' >{data.name}</Heading>
        <img style={{ width: '60%', objectFit: 'cover', borderRadius: '30%' }} src={data.imgSrc} />
        <Text style={{ height: '2rem' }} align='start'>{data.description}</Text>
    </div>
}