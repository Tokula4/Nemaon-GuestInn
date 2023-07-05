import React from 'react'
import ContactForm from '../components/ContactForm'
import { Header } from '../components/Header'
import Footerpage from '../components/Footerpage'

function contactpage() {
  return (
    <div>
        <Header/>
      <ContactForm/>
      <Footerpage/>
    </div>
  )
}

export default contactpage
