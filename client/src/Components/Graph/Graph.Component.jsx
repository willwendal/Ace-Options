import { LineChart, XAxis, Tooltip, Line, CartesianGrid, YAxis } from 'recharts'
import './Graph.css'

const data = [
  { stock: 'googl', month: 'Jan', price: 150 },
  { stock: 'googl', month: 'Feb', price: 320 },
  { stock: 'googl', month: 'Mar', price: 700 },
  { stock: 'googl', month: 'Apr', price: 2152 },
  { stock: 'googl', month: 'May', price: 1300 },
]

export default function Graph() {
  return (
    <div>
      <LineChart
        width={400}
        height={400}
        data={data}
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
