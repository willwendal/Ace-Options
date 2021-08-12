import { useState, useEffect } from 'react'
import { getCompanies } from '../../Services/ApiService'
import ListOption from '../ListOption/ListOption.component'
import SearchBar from '../Search/Search.Component'
import './OptionsList.css'

export default function OptionsList({ selectOption }) {
  const [companiesList, setCompaniesList] = useState([])
  async function getAllCompanies() {
    const allCompanies = await getCompanies()
    setCompaniesList(allCompanies)
  }

  useEffect(() => {
    getAllCompanies()
  }, [])

  const filterPosts = (companiesList, query) => {
    if (!query) {
      return companiesList
    }

    return companiesList.filter((company) => {
      const companyName = company.description.toLowerCase()
      return companyName.includes(query)
    })
  }
  const { search } = window.location
  const query = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = useState(query || '')
  const filteredPosts = filterPosts(companiesList, searchQuery)

  // console.log('blaaaaa', companiesList)

  return (
    <div className="OptionsList">
      <div id="both-buttons">
        <button id="underlying-type">📈Securities</button>
        <button id="underlying-type">🚀Futures</button>
      </div>

      <h2 id="type">Securities</h2>

      <div id="search-div">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ul>
          {filteredPosts.forEach((company) => (
            <li key={company._id}>{company.description}</li>
          ))}
        </ul>
      </div>

      <div id="headers">
        <h4 id="ticker">Ticker</h4>
        <h4 id="desc">Description</h4>
        <h4 id="next-exp">Next Expiration</h4>
      </div>

      {companiesList.map((company) => (
        <ListOption
          key={company._id}
          company={company}
          selectOption={selectOption}
        />
      ))}
    </div>
  )
}
