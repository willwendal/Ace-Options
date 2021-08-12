import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import OptionChain from '../OptionChain/OptionChain.component'
import './ListOption.css'

export default function ListOption({ company, selectOption }) {
  return (
    <Router>
      <div className="ListOption">
        <nav id="nav">
          <ul>
            <li>
              <h6
                id="information"
                onClick={() => {
                  selectOption(company)
                }}
              >
                {company.symbol}
              </h6>
            </li>

            <li>
              <h6 id="information">{company.description}</h6>
            </li>

            <li>
              <h6 id="information">
                {company.chain.expiration1[0].expiration_date}
              </h6>
            </li>
          </ul>

          {/* <button id="cross">❌</button> */}
          {/* only display this button if the chain is opened (it is supposed to close the chain on click) */}
        </nav>
      </div>

      <Switch>
        <Route
          path="/chain"
          component={() => <OptionChain company={company} />}
        />
      </Switch>
    </Router>
  )
}
