import { Heading, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { AppBar, Toolbar } from "@mui/material";
import { use } from "react";

export function UnderSection({ children }: { children?: React.ReactNode }) {
    const pading = useBreakpointValue({ base: '0.5rem', md: '2rem', lg: '4rem' })
    return (
        <div
            style={{
                height: '100%',
                maxWidth: '80rem',
                margin: 'auto',
                padding: pading,
                // backgroundColor: 'white',
                // opacity: '0.7',
                // make corners rounded
                borderRadius: '1rem',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {children}
        </div >
    )
}

export function Background({ src, children }: { src: string, children?: React.ReactNode }) {
    return (
        <div
            style={{
                // height: '100vh',
                backgroundImage: `url(${src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {children}
        </div>
    )
}

export function Fitures({ children }: { children: React.ReactNode }) {
    const gap = useBreakpointValue({ base: '1rem', md: '2rem', lg: '4rem' })
    return (
        <div
            style={{
                paddingTop: '2rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexFlow: 'wrap',
                gap: gap,
            }}
        >
            {children}
        </div>
    )
}

export function Section({ nazwa, children, img }: { nazwa: string, children?: React.ReactNode, img: string }) {
    return (
        <div id={nazwa}>
            <Background src={img}>
                <Heading size="4xl">{nazwa}</Heading>
            </Background>
            {/* <Cards /> */}
            <UnderSection>
                {children}
            </UnderSection>
        </div>
    );
}
