import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import './App.css'
import Courses from './components/Courses'
import Interships from './components/internships'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Service" component={Service} />
      <Route exact path="/Courses" component={Courses} />
      <Route exact path="/Interships" component={Interships} />
    </Switch>
  </BrowserRouter>
)

export default App