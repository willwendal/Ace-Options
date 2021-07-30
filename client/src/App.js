// import fetch from 'cross-fetch';
import { useState, useEffect } from 'react';
// import { getUser } from '../../server/controllers/user';
import { findUser, addUser, getCompanies, addOptionToWatchlist, addOptionToPortfolio } from './Services/ApiService';
// remember to import context here after creating it
import './App.css';
import Navbar from './Components/Navbar/Navbar.component';
import Welcome from './Components/Welcome/Welcome.component';
import Dashboard from './Components/Dashboard/Dashboard.component';

function App() {

  // user state
  const [userState, setUserState] = useState({ }); 

  // authentication state
  const [authentication, setAuthentication] = useState(false);
  // if false --> user not logged in, true --> user is logged in

  // companies list state --> move it to the company list component
  const [companiesList, setCompaniesList] = useState([]);




  



  // handler functions

  async function login(email, password) {
    const currentUser = await findUser(email, password);
    setUserState(currentUser);
    setAuthentication(true); 
  }

  async function register(firstName, lastName, email, password) {
    const newUser = addUser(firstName, lastName, email, password);
    console.log(newUser);
    setUserState(newUser);
    setAuthentication(true);
  }

  async function getAllCompanies() {
    const allCompanies = await getCompanies();
    console.log(allCompanies);
    setCompaniesList(allCompanies);
  }

  async function optionToWatchlist(option) {
    await addOptionToWatchlist(option);
    setUserState((prevUser) => ({...prevUser, watchlist: [...prevUser.watchlist, option]}));
  }

  async function optionToPortfolio(option) {
    await addOptionToPortfolio(option);
    setUserState((prevUser) => ({...prevUser, portfolio: [...prevUser.portfolio, option]}));
  }


  return (
    <div className="App">

      <Navbar 
        userState={userState}
        authentication={authentication}
        authentication={authentication}
        setAuthentication={setAuthentication}
      /> 

      {!authentication ? 
        <Welcome 
          login={login}
          register={register}
        />
      : 
        <Dashboard 
          userState={userState}
          setUserState={setUserState}
          getAllCompanies={getAllCompanies}
          optionToWatchlist={optionToWatchlist}
          optionToPortfolio={optionToPortfolio}
        />} 
      
    </div>
  );
}

export default App;
