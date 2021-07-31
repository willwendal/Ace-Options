import { useState } from 'react';
import OptionsList from '../OptionsList/OptionsList.component';
import OptionChain from '../OptionChain/OptionChain.component';

export default function Market({ userState, setUserState, optionToWatchlist, optionToPortfolio }) {

  const [listOrChain, setListOrChain] = useState(false);
  // false --> show options list component; true --> show option chain component

  return (
    <div className="Market">

      {!listOrChain ?
        <OptionsList 
        />
      :
        <OptionChain 
        />
      }
    </div>
  )
}
