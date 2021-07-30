import { useState, useEffect } from 'react';
import WatchlistOption from '../WatchlistOption/WatchlistOption.component';
import PortfolioOption from '../PortfolioOption/PortfolioOption.component';



export default function WatchlistPortfolio({ selectedView, userState, setUserState }) {

  const [titleState, setTitleState] = useState('Watchlist');
  // console.log('selectedView', selectedView)

  const watchlistItems = userState.watchlist.map(option => {
    <WatchlistOption
      id={option._id}
      option={option}
    />
  })

  console.log('mmmmm', userState)

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

      <h3>{titleState}</h3>

      {titleState === 'Portfolio' ? 
        <div>{portfolioItems}</div>
      :
        <div>{watchlistItems}</div>
      }

    </div>
  )
}
