import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './privateRoute';
import Login from './login';
import AuthButton from './authButton';
const Home = ()=> (
  <div>
    <h1>This is Home</h1>
  </div>
);

const About = () => (
  <div>
    <h1>What about?</h1>
  </div>
);

const Topics = ({match}) =>(
  <div>
    <h2>Topics</h2>
    <div className="VerticalMenu">
      <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>      
    </ul>
    <div className="AuthMessage">
      <AuthButton />
    </div>
    </div>
    

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
</div>
);

const Topic = ({ match }) => (
  <div className="contentSpace">
    <h3>{match.params.topicId}</h3>
  </div>
);

const Protected =()=>(
  <div>
    <h1> Dont tell this secret!</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="MenuBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>            
            <div >
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/protected" component={Protected} />
            </div>
          </div>
        </div>
        
      </Router>
    );
  }
}

export default App;
