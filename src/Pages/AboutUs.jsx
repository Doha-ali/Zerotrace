import React from 'react'
import { Headabout } from '../Components/Headabout/headabout'
import { Welcome } from '../Components/Welcome/welcome'
import { Vision } from '../Components/Vision/vision'
import { Offer } from '../Components/Offer/offer'
import { Choose } from '../Components/Choose/choose'
import { Join } from '../Components/Join/join'

export const AboutUs = () => {
  return (
    <div>
      <Headabout/>
      <Welcome/>
      <Choose/>
      <Vision/>
      <Join/>
    </div>
  )
}
export default AboutUs