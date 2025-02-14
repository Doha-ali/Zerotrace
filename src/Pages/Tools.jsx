import React from 'react' 
import { Headtools } from '../Components/Headtools/headtools'
import PremiumTools from '../Components/Tools/premiumTools'
import MCQ from '../Components/MCQ/mcq'
import CyberSecuritySolution from '../Components/CyberSecuritySolution/cyberSecuritySolution'
import Form from '../Components/Form/form'

export const Tools = () => {
  return (
    <div>
      <Headtools/>
      <PremiumTools/>
      <MCQ/>
      <CyberSecuritySolution/>
      <Form/>
    </div>
  )
}
export default Tools