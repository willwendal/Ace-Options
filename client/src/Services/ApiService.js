// import fetch from "cross-fetch";

const { default: fetch } = require("cross-fetch");

const baseUrl = 'http://localhost:3001/';

const findUser = async (email, password) => {
  const res = await fetch(`${baseUrl}login`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({email, password}) 
  });
  return await res.json();
}

const addUser = async (firstName, lastName, email, password) => {
  const res = await fetch(`${baseUrl}register`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({firstName, lastName, email, password})
  });
  return await res.json();
}

const getCompanies = async () => {
  const res = await fetch(`${baseUrl}options`);
  return await res.json();
}

const addOptionToWatchlist = async (option, email) => {
  const res = await fetch(`${baseUrl}addToWl`, {
    method: 'POST',
    body: JSON.stringify ({option, email}),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
}

const addOptionToPortfolio = async (option, email) => {
  const res = await fetch(`${baseUrl}addToPf`, {
    method: 'POST',
    body: JSON.stringify ({option, email}),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
}

const deleteOptionFromWatchlist = async () => {
  
}

const deleteOptionFromPortfolio = async () => {
  
}


module.exports = {
  findUser,
  addUser,
  getCompanies,
  addOptionToWatchlist,
  addOptionToPortfolio
}