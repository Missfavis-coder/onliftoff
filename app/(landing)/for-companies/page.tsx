import Benefits from "./_components/benefits"
import Companies from "./_components/companies"
import FAQAccordion from "./_components/faq"
import Footer from "./_components/footer"
import Hero from "./_components/hero"
import HowItWorks from "./_components/how-it-works"
import Header from "./_components/navbar"
import TestimonialSlider from "./_components/testimonies"





function Page() {


  return (
    <div className="bg-[#181229]">
      <Header/>
<Hero/>
<Companies/>
<TestimonialSlider/>
<Benefits/>
<HowItWorks/>
<FAQAccordion/>
<Footer/>
    </div>
  )
}

export default Page
