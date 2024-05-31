import React from 'react'
import NAVBAR from '../layout/navBar'
import HERO from '../componet/landingComponets/hero'
import MISSION from '../componet/landingComponets/mission'

export default function landingPage() {
  return (
    <div>
        <NAVBAR />
        <HERO />
        <MISSION />
    </div>
  )
}
