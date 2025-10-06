import { Header,  Footer, HeroSection, ServiceSection, ProjectSection, LocationSection, TestimonialSection } from "../components";

export default function Home() {
  return (
    <>
      <Header />

      <section>
        <HeroSection />
      </section>

      <section>
        <ServiceSection />
      </section>

      <section>
        <ProjectSection />
      </section>

      <section>
        <TestimonialSection/>
      </section>

      <section>
        <LocationSection />
      </section>

      <Footer />
    </>
  )
}