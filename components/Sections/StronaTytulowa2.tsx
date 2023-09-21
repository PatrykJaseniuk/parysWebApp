
import { Button, Container, Flex, Heading, SlideFade, Text, useBreakpointValue } from "@chakra-ui/react"
import { use, useEffect, useState } from "react";
import { start } from "repl";
import { Background, Fitures, UnderSection } from "../Basic";
import { FitureDane, HeaderDane } from "@/Data/Interface";
import { colorsPackages } from "../Cards";


export function StronaTytulowa({ data }: { data: HeaderDane }) {

    const [ticker, setTicker] = useState<boolean[]>([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        const iterations = 10;
        const setTimeoutRecu = (iteration: number) => {
            iteration <= iterations &&
                setTimeout(() => {
                    setTicker((prev) => [...prev, true]);
                    iteration++;
                    setState((prev) => (!prev));
                    setTimeoutRecu(iteration)
                }, 300)
        }
        setTimeoutRecu(0)
    }, [])

    console.log(ticker)
    console.log(state)
    console.log('rendering')
    return (
        <div>
            <Background src="BieznieBlur.png"         >
                <img className="w-60 lg:w-80" src="logo.png" />
            </Background >
            <UnderSection>
                <Text style={{ fontSize: '2rem' }}>{data.motto}</Text>

                <Fitures>
                    {data.feature.map((fiture, index) => {
                        return (
                            <SlideFade in={ticker[index]}>
                                <Fiture data={fiture} />
                            </SlideFade>
                        )
                    })}
                </Fitures>
            </UnderSection>
        </div>
    )
}

function Fiture({ data }: { data: FitureDane }) {

    const value: { width: string, textWidth: string } | undefined = useBreakpointValue({
        base: { width: '45%', textWidth: '10rem' },
        lg: { width: '20rem', textWidth: '20rem' }
    })

    return (
        // flex in column
        <Flex style={{ flexDirection: 'column', gap: '1rem', alignItems: 'start', width: value?.width, marginBottom: '3rem' }}>
            {data.icon && data.icon({ style: { width: '6rem', height: '6rem', fill: 'black' } }) ||
                data.imgSrc && <img src={data.imgSrc} style={{ width: '6rem', height: 'auto', borderRadius: '10%' }} />
            }
            <Heading>{data.title}</Heading>
            <Text style={{ width: value?.textWidth, height: '4rem', textAlign: 'start' }}>{data.description}</Text>
        </Flex>
    )
}


