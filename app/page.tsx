"use client";

import { Team } from '../components/Testowe/ZajeciaIndywidualne'
import Head from 'next/head'
import Image from 'next/image'
// import { Silownia } from '@/components/Sections/Uslugi/Silownia';
// import Cards from '@/components/Card/Card';
import { ChakraProvider } from '@chakra-ui/react';
import { StronaTytulowa } from '@/components/Sections/StronaTytulowa2';
import { Uslugi } from '@/components/Sections/Uslugi';
import { use, useEffect, useState } from 'react';
import { ZajeciaIndywidualne } from '@/components/Sections/ZajeciaIndywidualne';
import { data } from '@/Data/data';
import { ZajeciaGrupowe } from '@/components/Sections/ZajeciaGrupowe';
import { Kontakt } from '@/components/Sections/Kontakt';
import { AppBar } from '@/components/AppBar';

// import { Silownia } from '@/components/Sections/Uslugi/Silownia';


export default function Home() {
  return (
    <ChakraProvider>
      <LoadingScreen>
        <AppBar
          elements={[data.Uslugi.title, data.zajeciaIndywidualne.title, data.zajeciaGrupowe.title]}
        />
        <StronaTytulowa data={data.header} />
        <Uslugi data={data.Uslugi} />
        <ZajeciaIndywidualne data={data.zajeciaIndywidualne} />
        <ZajeciaGrupowe data={data.zajeciaGrupowe} />
        <Kontakt data={data.kontakt} />
      </LoadingScreen>
    </ChakraProvider>
  )
}

const LoadingScreen = ({ children }: { children?: React.ReactNode }) => {

  // how to properly deal with loading screen?
  // l will just set constant time of displaying loading screen
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    loading ? <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 1000,
      visibility: loading ? 'visible' : 'hidden',
    }}>
      <h1>Loading...</h1>
    </div> :
      <div>{children}</div>
  )
}