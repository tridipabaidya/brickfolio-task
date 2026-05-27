import React from 'react'
import Home from './components/Home'
import HomeBuyingOffer from './components/Features'
import Challenges from './components/Challenges'
import ConsultationProgram from './components/ConsultationProgram'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import RefundAndFaq from './components/RefundAndFaq'
import PricingBar from './components/PricingBar'

const App = () => {
  return (
    <div>
      <Home />
      <HomeBuyingOffer></HomeBuyingOffer>
      <Challenges></Challenges>
      <ConsultationProgram></ConsultationProgram>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <RefundAndFaq></RefundAndFaq>
      <PricingBar></PricingBar>
    </div>
  )
}

export default App
