import { useState, useEffect } from 'react';
import WatchlistOption from '../WatchlistOption/WatchlistOption.component';
import PortfolioOption from '../PortfolioOption/PortfolioOption.component';
import './WatchlistPortfolio.css';



export default function WatchlistPortfolio({ selectedView, userState, setUserState, optionToPortfolio }) {

  const [titleState, setTitleState] = useState('Watchlist');
  // console.log('selectedView', selectedView)

  const watchlistItems = userState.watchlist.map(option => {
    return (
      <div id="watchlist">
        <WatchlistOption
          id={option._id}
          option={option}
          optionToPortfolio={optionToPortfolio}
        />
      </div>
    )
  })

  const portfolioItems = userState.portfolio.map(option => {
    return (
      <div id="portfolio">
        <PortfolioOption 
          id={option._id}
          option={option}
        />
      </div>
    )
  })

  useEffect(() => {
    if (selectedView) {
      setTitleState('Portfolio')
    }
    else {
      setTitleState('Watchlist')
    }
  }, [selectedView])
  

  return (
    
    <div className="WatchlistPortfolio">

      <h2 id="pf-wl-title">{titleState}</h2>
      
      {titleState === 'Portfolio' ? 
        <div id="wl-or-pf">{portfolioItems}</div>
      :
        <div id="wl-or-pf">{watchlistItems}</div>
      }



    </div>
  )
}
