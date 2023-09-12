import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Battle from './pages/Battle';
import About from './pages/About';
import Cookies from './pages/Cookies';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


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
          <Route path='/battle' element={<Battle/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/cookies' element={<Cookies/>} />
        </Routes>
      </Router>
    </>
  );
}