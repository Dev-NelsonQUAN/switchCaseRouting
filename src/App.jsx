import React, { useReducer, useState } from 'react'
import Header from './components/static/Header'
import Heropage from './components/pages/Heropage'
import AboutUs from './components/pages/AboutUs'
import Facilities from './components/pages/Facilities'
import AboutDetails from './components/pages/AboutDetails'


const App = () => {
  const [changeRoute, setChangeRoute] = useState(0)
  // const [state, dispatch ] = useReducer(reducer, {home: 0}) 


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


// // import React, { useReducer } from 'react';
// // import Header from './components/static/Header';
// // import Heropage from './components/pages/Heropage';
// // import AboutUs from './components/pages/AboutUs';
// // import Facilities from './components/pages/Facilities';
// // import AboutDetails from './components/pages/AboutDetails';

// // const ROUTES = {
// //   HERO: 'HERO',
// //   ABOUT: 'ABOUT',
// //   FACILITIES: 'FACILITIES',
// //   ABOUT_DETAILS: 'ABOUT_DETAILS',
// // };

// // const routeReducer = (state, action) => {
// //   switch (action.type) {
// //     case ROUTES.HERO: return { route: 1 };
// //     case ROUTES.ABOUT: return { route: 2 };
// //     case ROUTES.FACILITIES: return { route: 3 };
// //     case ROUTES.ABOUT_DETAILS: return { route: 4 };
// //     default: return state;
// //   }
// // };

// // const Routing = () => {
// //   const [state, dispatch] = useReducer(routeReducer, { route: 0 });

// //   const renderPage = () => {
// //     switch (state.route) {
// //       case 1: return <Heropage />;
// //       case 2: return <AboutUs />;
// //       case 3: return <Facilities />;
// //       case 4: return <AboutDetails />;
// //       default: return <Heropage />;
// //     }
// //   };

// //   return (
// //     <div>
// //       <Header router={dispatch} />
// //       {renderPage()}
// //     </div>
// //   );
// // };

// // export default Routing;