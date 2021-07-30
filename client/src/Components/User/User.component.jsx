import { useState } from 'react';
import WatchlistPortfolio from '../WatchlistPortfolio/WatchlistPortfolio.component'

export default function User({ userState, setUserState }) {

  const [selectedView, changeSelectedView] = useState(false);
  // default value?? if false --> show watchlist, otherwise --> show portfolio ???

  return (
    <div className="User">

      <button 
        id="wl-button"
        onClick={() => changeSelectedView(false)}
      >Watchlist</button>

      <button 
        id="pf-button"
        onClick={() => changeSelectedView(true)}
      >Portfolio</button>

      <WatchlistPortfolio
        selectedView={selectedView}
        userState={userState}
        setUserState={setUserState}
      />

    </div>
  )
}
