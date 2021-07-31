import { useState, useEffect } from 'react'
import { getCompanies} from '../../Services/ApiService';
import ListOption from '../ListOption/ListOption.component';

export default function OptionsList() {

  // companies list state --> move it to the company list component
  const [companiesList, setCompaniesList] = useState([]);

  async function getAllCompanies() {
    const allCompanies = await getCompanies();
    console.log(allCompanies);
    setCompaniesList(allCompanies);
  }

  useEffect(() => {
    getAllCompanies();
  }, [])


  

  return (
    <div className="OptionsList">
      <h2>This is the list of all companies</h2>
      {companiesList.map(company => (<ListOption key={company._id} company={company}
    />
  ))}
    </div>
  )
}
