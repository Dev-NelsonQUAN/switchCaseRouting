import React, { useState } from 'react'
import Header from './components/static/Header'
import Heropage from './components/pages/Heropage'
import AboutUs from './components/pages/AboutUs'
import Facilities from './components/pages/Facilities'
import AboutDetails from './components/pages/AboutDetails'


const App = () => {
  const [changeRoute, setChangeRoute] = useState(0)

  const routeChanger = () => {
    switch (changeRoute) {
      case 1:
        return <Heropage />
      case 2:
        return <AboutUs />
      case 3:
        return <Facilities />
      case 4:
        return <AboutDetails />

      default:
        return <Heropage />
    }
  }


  return (
    <div>
      <Header router={setChangeRoute} />
      {routeChanger()}
    </div>
  )
}

export default App