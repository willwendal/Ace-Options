

export default function WatchlistOption({ option }) {
  return (
    <div className="WatchlistOption">
      <h6>{option.symbol}</h6>
      <h6>{option.description}</h6>
    </div>
  )
}
