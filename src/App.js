import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Users from './components/Users/Users';
import Shop from './components/Shop/Shop';
import PostDetail from './components/PostDetail/PostDetail';
function App() {
  return (
    <div>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/home">Home 2</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/shop"></Link>
          </li>
          <li>
          <Link to=""></Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/users">
          <Users></Users>
        </Route>
        <Route path="/shop">
        <Shop></Shop>
        </Route>
        <Route path="/post/:id">
        <PostDetail></PostDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  </Router>
    </div>
  );
}

export default App;
