import { Header, Hero, Footer, Services, Projects, LocationSection } from "../components";

export default function Home() {
  return (
    <>
      <Header />

      <section>
        <Hero />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <LocationSection />
      </section>

      <Footer />
    </>
  )
}