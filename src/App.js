//import Backdrop from './components/Backdrop';
// import Modal from './components/Modal';
import React from 'react'

import { Route, Routes} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetsupPage from './pages/NewMeetups';
import FaviouritePage from './pages/Faviourite';
import MainNavigation from './components/layout/MainNavigation';

// function App() {
//   return (
//     <div >
//       <h1>My Todos</h1>
//       <Todo text="React" />
//       <br></br>
//       <Todo text="Angular" />
//       <br></br>
//       <Todo text="Vue" />
//       {/* 
//       <Modal/>
//       <Backdrop/> */}
//     </div>
//   );
// }


function App() {
  return (
    <div>
       {/* <div >
      <h1>My Todos</h1>
      <Todo text="React" />
      <br></br>
      <Todo text="Angular" />
      <br></br>
      <Todo text="Vue" />

    </div>  */}
    <MainNavigation></MainNavigation>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route exact path="new-meetups" element={<NewMeetsupPage />} />
        <Route exact path="faviourite" element={<FaviouritePage />} />
      </Routes>

    </div>
  )

}
export default App;
