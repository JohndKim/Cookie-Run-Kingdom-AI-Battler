import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Battle from './pages/Battler';
import About from './pages/About';



// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Banner />
//     </>
//   );
// }


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/battler' element={<Battle/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}