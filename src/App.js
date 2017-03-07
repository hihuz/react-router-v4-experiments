import React from 'react'

// import { connect } from 'react-redux';
import {
  Route,
  Link
} from 'react-router-dom'

import Home from './home.js';
import About from './about.js';

const BasicExample = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

    <hr/>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
)

// export default connect()(BasicExample)
export default BasicExample
