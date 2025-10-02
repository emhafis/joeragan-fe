import { Header, Hero, Footer, Services, Projects } from "../components";

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

      <Footer />
    </>
  )
}