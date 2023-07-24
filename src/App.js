import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Battle from './pages/Battle';
import About from './pages/About';
import Navbar from './components/Navbar';
import Banner from './components/Banner';


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
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/battle' component={Battle} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}