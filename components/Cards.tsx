
import { CenaDane } from "@/Data/Interface";
import { Heading, List, ListItem, Text } from "@chakra-ui/react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



export interface SwiperCardProps {
    data: CenaDane
    colorPackage: ColorPackage
}

export function Cards({ cards }: { cards?: SwiperCardProps[] }) {
    return (
        <div
            style={{ width: '90vw' }}>
            <Flicking
                bound={true}
            >
                {cards?.map(card => Card(card))}
            </Flicking>
        </div>
    )
}

const gradientGenerator = (color: number) => {
    const color1 = color % 360;
    const diference = 60;
    const color2 = (color + diference) % 360;
    const gradient = `linear-gradient(to bottom right, hsl(${color1}, 100%, 80%), hsl(${color2}, 100%, 70%) )`
    return gradient;
}

interface ColorPackage {
    background: string,
    font: string,
}
const hslGenerator = (color: number) => `hsl(${color}, 100%, 20%)`

const packageGenerator: (color: number) => ColorPackage = (color) => {
    const invertedColor = (color + 180) % 360;
    const background = gradientGenerator(color);
    const colorPackage: ColorPackage = {
        background: background,
        font: hslGenerator(invertedColor)
    }
    return colorPackage;
}

export const colorsPackages = [
    packageGenerator(0),
    packageGenerator(60),
    packageGenerator(120),
    packageGenerator(180),
    packageGenerator(320),
]

const Card = ({ data, colorPackage }: SwiperCardProps) => {

    return (
        <div
            style={{
                width: '16rem',
                height: '24rem',
                margin: '1rem',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexFlow: 'column',
                borderRadius: '18px',
                background: colorPackage.background,
            }}>
            {data.imgSrc && <img src={data.imgSrc} style={{ borderRadius: '10%', width: '70%', height: 'auto' }} />}
            <Heading size='lg' color={colorPackage.font}  >{data.nazwa}</Heading>
            {data.cena && <Heading size='2xl' color={colorPackage.font} > {data.cena} zł</Heading>}
            {/* line */}
            <div style={{ width: '80%', height: '1px', backgroundColor: colorPackage.font }}></div>
            {/* lista funkcji */}
            <div style={{ textAlign: 'start', width: '90%' }}>
                <List style={{}} spacing={1}>
                    {data.wlasciwosci.map((wlasciwosc, index) =>
                        <ListItem key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'start' }}>
                            <div style={{ width: '2rem' }}>
                                {wlasciwosc.icon({ style: { width: '2rem', fill: colorPackage.font } })}
                            </div>
                            <Text color={colorPackage.font} >{wlasciwosc.text}</Text>
                            {/* {wlasciwosc} */}
                        </ListItem>
                    )}
                </List>
            </div>
        </div>
    )
}