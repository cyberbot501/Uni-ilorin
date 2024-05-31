import React from 'react'
import NAVBAR from '../layout/navBar'
import HERO from '../componet/landingComponets/hero'
import MISSION from '../componet/landingComponets/mission'
import SERVICES from '../componet/landingComponets/services'
import HEALTH from '../componet/landingComponets/health'
import FOOTER from '../layout/footer'

export default function landingPage() {
  return (
    <div>
        <NAVBAR />
        <HERO />
        <MISSION />
        <SERVICES />
        <HEALTH />
        <FOOTER />
    </div>
  )
}
