import { Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Header from './components/header'
import Posts from './Posts'
import PostDetail from './components/PostDetail'

function App() {
  return (
    <Fragment>
      <Header/>
      <Router>
        <Route exact path="/" component={Posts}/>
        <Route exact path="/post/:id" component={PostDetail}/>
      </Router>
    </Fragment>
  );
}

export default App;
