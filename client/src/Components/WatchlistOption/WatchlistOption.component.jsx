import './WatchlistOption.css';

export default function WatchlistOption({ option, optionToPortfolio, deleteFromWatchlist }) {



  return (
    <div className="WatchlistOption">
      
      <div>
        {option.description}
      </div>

      <div>
        <button id="wl-to-pf-button" onClick={() => optionToPortfolio(option)}>🤑</button>
      </div>

      <div>
        <button id="remove-from-wl-button" onClick={() => deleteFromWatchlist(option)}>❌</button>
      </div>
        
    </div>
  )
}
