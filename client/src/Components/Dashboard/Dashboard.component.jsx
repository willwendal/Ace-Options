import React from 'react'
import { useState, useEffect } from 'react';
import User from '../User/User.component';
import Market from '../Market/Market.component';

export default function Dashboard({ userState, setUserState, getAllCompanies, optionToWatchlist, optionToPortfolio }) {

  const [selectedView, changeSelectedView] = useState(false);
  // default value?? if false --> show watchlist, otherwise --> show portfolio ???

  const [watchlist, setWatchlist] = useState([]);
  //double-check the default value

  const [portfolio, setPortfolio] = useState([]);
  // double-check the default value

  

  return (
    <div className="Dashboard">
      <User 
        userState={userState}
      />
      {/* <Market /> */}
    </div>
  )
}
