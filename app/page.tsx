import { Header } from '@/components/headre'
import Example from '@/components/navbar'
import Navbar2 from '@/components/navbar2'
import { Team } from '@/components/team'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar2 />
      <Header />
      <Team />
    </div>
  )
}
