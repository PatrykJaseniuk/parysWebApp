import { Text, Heading, Slide, useBreakpointValue, Button } from "@chakra-ui/react"
import { useScrollTrigger } from "@mui/material"

import { use, useState } from "react"

export const AppBar = ({ elements }: { elements: string[] }) => {


    const isGoingDown = useScrollTrigger()

    console.log(isGoingDown)
    const version = useBreakpointValue({
        base:
            <AppBarSmall elements={elements} />,
        lg:
            <AppBarBig elements={elements} />
    });

    return (
        <>
            <div style={{ height: '5rem', background: 'black' }} />
            <div style={{ position: 'fixed', zIndex: 100 }}>
                <Slide direction='top' in={!isGoingDown} >
                    {version}
                </Slide>
            </div>
        </>

    )
}

const AppBarSmall = ({ elements }: { elements: string[] }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div
            style={{
                color: 'white',
            }}
        >
            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'black',
                    alignItems: 'center',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    height: '5rem',
                }}
            >
                <Button onClick={() => setIsMenuOpen(prev => !prev)} >Menu</Button>
                <img style={{ height: '3rem' }} src="logo.png" ></img>
                <Text>Logowanie</Text>

            </div>

            <div style={{
                visibility: isMenuOpen ? 'visible' : 'hidden',
                backgroundColor: 'black', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                flexDirection: 'column',
            }}>
                {/* line */}
                <div style={{
                    width: '100vw',
                    height: '0.1rem',
                    backgroundColor: 'white',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                }} />
                {elements.map(element => <a onClick={() => setIsMenuOpen(false)} href={'#' + element} ><Heading>{element}</Heading></a>)}


            </div>
        </div>
    )
}

const AppBarBig = ({ elements }: { elements: string[] }) => {
    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'black',
                color: 'white',
                alignItems: 'center',
                paddingLeft: '1rem',
                paddingRight: '1rem',
            }}>
            <img style={{ height: '3rem' }} src="logo.png" ></img>
            <div
                style={{
                    height: '5rem',


                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem'
                }}
            >
                {elements.map(element => <a href={'#' + element} >{element}</a>)}
            </div>
            <Text>Logowanie</Text>

        </div>

    )
}
