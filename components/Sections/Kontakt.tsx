import { KontaktDane, SectionDane } from "@/Data/Interface";
import { Background, Fitures, UnderSection } from "../Basic";
import { Container, Flex, Heading, useBreakpointValue, Text } from "@chakra-ui/react";
import { IconPhone } from "@/Icons/IconPhone";
import { IconLocation } from "@/Icons/IconLocation";
import { IconTime } from "@/Icons/IconTime";
import { IconGithub } from "@/Icons/IconGithub";
import Link from "next/link";
import { Icon } from "@/Icons/Icon";


export const Kontakt = ({ data }: { data: KontaktDane }) => {
    const width = useBreakpointValue({ base: '100%', lg: '45%' });

    return (


        <div style={{ background: 'grey', color: 'white' }}>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.8985260142413!2d17.32172837733394!3d50.4802327852178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711c4125f989f0b%3A0xb3c7ba6aef95e9fb!2sSI%C5%81OWNIA%20Parys%20Nysa!5e0!3m2!1spl!2spl!4v1689690588688!5m2!1spl!2spl" style={{ width: '100%', height: '25rem' }} loading="lazy" ></iframe>

            <UnderSection>
                <Fitures>
                    <Info
                        text='Telefon'
                        icon={IconPhone}
                        headings={[data.nrTelefonu]}
                    />
                    <Info
                        text='Adres'
                        icon={IconLocation}
                        headings={[data.adress]}
                    />
                    <Info

                        text='Godziny otwarcia Recepcji'
                        icon={IconTime}
                        headings={data.godzinyOtwarcia}
                    />
                </Fitures>
                {/* line */}
                <div style={{ width: '100%', height: '1px', background: 'white', margin: '1rem 0' }}></div>
                <div style={{ fontFamily: 'monospace', color: 'black', width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '1rem' }}>

                    Written by Patryk
                    <Link href="https://github.com/">
                        <IconGithub style={{ width: '2rem' }} />
                    </Link>
                </div>
            </UnderSection>
        </div>
    )
}

const Info = ({ icon, text, headings }: { icon: Icon, text: string, headings: string[] }) => {

    const width = useBreakpointValue({ base: '100%', lg: '45%' });
    return (
        <div style={{ display: 'flex', gap: '1rem', width: width }}>
            {icon({ style: { width: '5rem', fill: 'yellow' } })}
            <div >
                <Text>{text}</Text>

                {headings.map((heading) =>
                    <Heading size='lg' >{heading}</Heading>
                )}
            </div>
        </div>
    )
}

