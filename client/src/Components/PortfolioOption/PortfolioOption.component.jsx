import './PortfolioOption.css';

export default function PortfolioOption({ option }) {
  return (
    <div className="PortfolioOption">

      {/* <div id="portfolio-headers">
        <div className="portfolio-headers description">Description</div>
        <div className="portfolio-headers type">Type</div>
        <div className="portfolio-headers bid">Bid</div>
        <div className="portfolio-headers ask">Ask</div>
        <div className="portfolio-headers buy-price">Buy Price</div>
        <div className="portfolio-headers strike">Strike</div>
        <div className="portfolio-headers exp-date">Exp.</div>
        <div className="portfolio-headers p-l">P&L</div>
      </div> */}

      <div id="the-actual-portfolio">
        <div className="portfolio-options description">{option.description.slice(0,4)}</div>
        <div className="portfolio-options type">{option.option_type}</div>
        <div className="portfolio-options bid">{(option.bid) ? option.bid : 0.00}</div>
        <div className="portfolio-options ask">{(option.ask) ? option.ask : 0.00}</div>
        <div className="portfolio-options buy-price">{Math.round(((option.ask*option.contract_size)*100) / 100).toFixed(2)}</div>
        <div className="portfolio-options strike">{option.strike}</div>
        <div className="portfolio-options exp-date">{option.expiration_date}</div>
        <div className="portfolio-options money">{'TBD'}</div>
        <div className="portfolio-options p-l">{'TBD'}</div>
        <div className="portfolio-options sell">
          <button className="portfolio-options sell-button">✌️</button>
        </div>
      </div>

    </div>
  )
}
