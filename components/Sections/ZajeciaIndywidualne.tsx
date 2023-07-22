import { Button, Heading, Text, useBreakpointValue } from "@chakra-ui/react"
import { Fitures, Section } from "../Basic"
import { SectionDane, TrenerDane, ZajeciaIndywidualneDane } from "@/Data/Interface"
import { colorsPackages } from "../Cards"

export const ZajeciaIndywidualne = ({ data }: { data: SectionDane<ZajeciaIndywidualneDane> }) => {

    return (
        <Section
            nazwa={data.title}
            img={data.background}
        >
            <Text style={{ fontSize: '1.5rem' }}>{data.zawartosc.description}</Text>

            <div style={{
                display: 'flex',
                flexFlow: 'wrap',
                gap: '1rem',
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

    const width = useBreakpointValue({ base: '10rem', md: '15rem', lg: '20rem' })
    return <div style={{
        width: width,
        height: '20rem',
        // border: 'solid 1rem',
        // borderColor: colorsPackages[0].background,
        borderRadius: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Heading size='xl' >{data.name}</Heading>
        <img style={{ width: '60%', objectFit: 'cover', borderRadius: '30%' }} src={data.imgSrc} />
        <Text style={{ height: '2rem' }} align='start'>{data.description}</Text>
    </div>
}