import React from 'react' 
import Form from '../Components/Form/form'
import { Headcontact } from '../Components/Headcontact/headcontact'
import Map from '../Components/Map/map'
import Wehelp from '../Components/Wehelp/wehelp'
export const ContactUs = () => {
  return (
    <div>
      <Headcontact/>
      <Form/>
      <Map/>
      <Wehelp/>
    </div>
  )
}
export default ContactUs