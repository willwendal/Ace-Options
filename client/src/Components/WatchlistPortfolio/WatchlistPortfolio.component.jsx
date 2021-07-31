import { useState, useEffect } from 'react';
import WatchlistOption from '../WatchlistOption/WatchlistOption.component';
import PortfolioOption from '../PortfolioOption/PortfolioOption.component';



export default function WatchlistPortfolio({ selectedView, userState, setUserState }) {

  const [titleState, setTitleState] = useState('Watchlist');
  // console.log('selectedView', selectedView)

  const watchlistItems = userState.watchlist.map(option => {
    return (<WatchlistOption
      id={option._id}
      option={option}
    />)
  })


  const portfolioItems = userState.portfolio.map(option => {
    return (<PortfolioOption 
      id={option._id}
      option={option}
    />)
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

      <h2>{titleState}</h2>

      {titleState === 'Portfolio' ? 
        <div>{portfolioItems}</div>
      :
        <div>{watchlistItems}</div>
      }

    </div>
  )
}
