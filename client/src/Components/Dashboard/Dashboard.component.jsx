import React from 'react'
import { useState, useEffect } from 'react';
import User from '../User/User.component';
import Market from '../Market/Market.component';

export default function Dashboard({ userState, setUserState, optionToWatchlist, optionToPortfolio }) {


  return (
    <div className="Dashboard">
      <User 
        userState={userState}
        setUserState={setUserState}
      />
      <Market 
        userState={userState}
        setUserState={setUserState}
        // getAllCompanies={getAllCompanies}
        optionToWatchlist={optionToWatchlist}
        optionToPortfolio={optionToPortfolio}
      />
    </div>
  )
}
