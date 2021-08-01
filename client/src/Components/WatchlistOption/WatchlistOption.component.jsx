import './WatchlistOption.css';

export default function WatchlistOption({ option }) {
  return (
    <div className="WatchlistOption">
      <h6 id="symbol">{option.symbol}</h6>
      <div id="space">_</div>
      <h6 id="description">{option.description}</h6> 
      {/* this description is not the right one, it should not come from the option in the chain */}
    </div>
  )
}
