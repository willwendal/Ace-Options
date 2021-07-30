

export default function PortfolioOption({ option }) {
  return (
    <div className="PortfolioOption">
      <p>Description: {option.description}</p>
      <p>Option Type: {option.option_type}</p>
      <p>Contract Size: {option.contract_size}</p>
      <p>Buy Price: {option.ask}</p>
      <p>Strike Price: {option.strike}</p>
      <p>Expiration: {option.expiration_date}</p>
      <p>P&L: {'TBD'}</p>
    </div>
  )
}
