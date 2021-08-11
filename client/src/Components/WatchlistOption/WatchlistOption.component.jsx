import './WatchlistOption.css'
import React from 'react'

export default function WatchlistOption({
  option,
  optionToPortfolio,
  deleteFromWatchlist
}) {
  return (
    <div className="WatchlistOption">
      <div id="the=description" data-testid="watchlistoption">{option.description}</div>

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
