import React from 'react'
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";


const Card = () => {
  return (
    <div className='bg-white '>
      <div className='bg-secondary '>
        <h1>Contact Information</h1>
        <div>
          <Phone />
          <p>+212 7 62 83 63 95</p>
        </div>
        <div>
          <Mail />
          <p>oussama.aouam@gmai.com</p>
        </div>
        <div>
          <MapPin />
          <p>Casablanca, Morocco</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Card
