

export default function PortfolioOption({ option }) {
  return (
    <div className="PortfolioOption">
      <div>Description: {option.description}</div>
      <div>Option Type: {option.option_type}</div>
      <div>Contract Size: {option.contract_size}</div>
      <div>Buy Price: {option.ask}</div>
      <div>Strike Price: {option.strike}</div>
      <div>Expiration: {option.expiration_date}</div>
      <div>P&L: {'TBD'}</div>
    </div>
  )
}
