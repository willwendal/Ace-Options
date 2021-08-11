import './WatchlistOption.css'
import React from 'react'
import Option from '../../types/Option'

type Props = {
  optionToPortfolio: (option: Option) => void,
  deleteFromWatchlist: (option: Option) => void
  

}

export default function WatchlistOption({
  option: Option,
  optionToPortfolio: Props.optionToPortfolio,
  deleteFromWatchlist: Props.deleteFromWatchlist
}) {
  return (
    <div data-testid="watchlistoption" className="WatchlistOption">
      <div id="the=description">{option.description}</div>

      <div id="the-buttons">
        <button
          data-testid="optiontoportfolio"
          id="wl-to-pf-button"
          onClick={() => optionToPortfolio(option)}
        >
          🤑
        </button>

        <button
          data-testid="deletefromwatchlist"
          id="remove-from-wl-button"
          onClick={() => deleteFromWatchlist(option)}
        >
          ❌
        </button>
      </div>
    </div>
  )
}
