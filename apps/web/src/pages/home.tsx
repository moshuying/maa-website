import { HomeHero } from '../components/home/HomeHero'
import { Header } from '@/components/Header'
export function Home() {
  return (
    <main className="h-full">
      <section className="h-screen min-h-[20rem] w-full relative">
        <Header />
        <HomeHero />
      </section>
    </main>
  )
}


