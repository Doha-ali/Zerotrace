import React from 'react' 
import Header from '../Components/Header/Header'
import PremiumTools from '../Components/Tools/premiumTools'
import { Vision } from '../Components/Vision/vision'
import CyberSecuritySolution from '../Components/CyberSecuritySolution/cyberSecuritySolution'
import { Importance } from '../Components/Importance/importance'
import Pricing from '../Components/Pricing/pricing'
import FAQ from '../Components/FAQ/faq'
import Form from '../Components/Form/form'
import Mycarousel from '../Components/Carousel/carousel'
import { Secchatbot } from '../Components/SecChatbot/secchatbot'
export const Home = () => {
  return (
    <div className='mycontainer'>
        <Header/>
        {/* <Mycarousel/> */}
        {/* <PremiumTools/> */}
        <Secchatbot/>
        <Vision/>
        <CyberSecuritySolution/>
        <Importance/>
        <Pricing/>
        <FAQ/>
        <Form/>
    </div>
  )
}
