import React from 'react'

export default function ListOption({ company }) {
  return (
    <div className="ListOption">

      <h5>{company.symbol}</h5>
      <h5>{company.description}</h5>
    </div>
  )
}
