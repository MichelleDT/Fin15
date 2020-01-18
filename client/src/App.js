import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from './pages/About';
import Service from './pages/Service';
import Process from './pages/Process';
import Team from './pages/Team';
import Bloglist from './pages/Bloglist';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Register from './components/Form/Register'
import Profile from './components/Form/Profile'

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>  
          <Route exact path="/" component={Home} />
          <Route exact={true} path={'/'} component={Home} />
          <Route path="/pages/About" component={About} />
          <Route path="/pages/Service" component={Service} />
          <Route path="/pages/Process" component={Process} />
          <Route path="/pages/Team" component={Team} />
          <Route path="/pages/Bloglist" component={Bloglist} />
          <Route path="/pages/BlogSingle" component={BlogSingle} />
          <Route path="/pages/Contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
