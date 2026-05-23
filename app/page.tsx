import Benefits from "@/components/landing/benefits"
import Companies from "@/components/landing/companies"
import FAQAccordion from "@/components/landing/faq"
import Footer from "@/components/landing/footer"
import Hero from "@/components/landing/hero"
import HowItWorks from "@/components/landing/how-it-works"
import Header from "@/components/landing/navbar"
import HeroSection from "@/components/landing/talents"


function Page() {


  return (
    <div>
      <Header/>
      <Hero/>
      <Companies/>
      <Benefits/>
      <HowItWorks/>
      <HeroSection/>
      <FAQAccordion/>
      <Footer/>
    </div>
  )
}

export default Page
