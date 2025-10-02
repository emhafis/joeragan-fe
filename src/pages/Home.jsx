import { Header, Hero, Footer, Services, Projects, Location } from "../components";

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
        <Location />
      </section>

      <Footer />
    </>
  )
}