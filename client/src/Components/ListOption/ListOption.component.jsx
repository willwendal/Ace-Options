import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import OptionChain from '../OptionChain/OptionChain.component'

export default function ListOption({ company }) {
  return (
    <Router>

      <div className="ListOption">

        <nav>
          <ul>
            <li>
              <Link to="/chain">{company.symbol}</Link>
            </li>

            <li>
              <Link to="/chain">{company.description}</Link>
            </li>
          </ul>
        </nav>

      </div>

      <Switch>
        <Route path="/chain" component={() => <OptionChain company={company} /> } />
        </Switch>

        {/* <a href="/chain">{company.symbol}</a>
        <p></p>
        <a href="http://localhost:3000/chain">{company.description}</a>
        <p></p> */}


    </Router>
  )
}
