import { LineChart, XAxis, Tooltip, Line, CartesianGrid, YAxis } from 'recharts'
import { useState, useEffect } from 'react'
import './Graph.css'

const data = [
  { stock: 'googl', month: 'Jan', price: 150 },
  { stock: 'googl', month: 'Feb', price: 320 },
  { stock: 'googl', month: 'Mar', price: 700 },
  { stock: 'googl', month: 'Apr', price: 2152 },
  { stock: 'googl', month: 'May', price: 1300 },
]

export default function Graph() {
  const [marketHistory, setMarketHistory] = useState('')

  function getHistoricalData() {
    fetch('https://sandbox.tradier.com/v1/markets/history', {
      method: 'GET',
      qs: {
        symbol: 'AAPL',
        interval: 'daily',
        start: '2019-01-04',
        end: '2020-05-04',
      },
      headers: {
        Authorization: `Bearer wvP7ieyXcMVQgpYka5OevRLcDjIu`,
        Accept: 'application/json',
      },
    })
      .then((result) => result.json())
      .then((data) => console.log(data))
  }

  // useEffect(() => {
  //   getHistoricalData().then((data) => setMarketHistory(data))
  // }, [])

  getHistoricalData()
  console.log(marketHistory)

  return (
    <div>
      <LineChart
        width={400}
        height={400}
        data={marketHistory}
        margin={{ top: 5, right: 20, left: 5, bottom: 0 }}
      >
        <XAxis dataKey="month" />
        <YAxis dataKey="price" />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#ff7300"
          yAxisId={0}
          name={data[0].stock}
        />
      </LineChart>
    </div>
  )
}
