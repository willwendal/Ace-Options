import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
