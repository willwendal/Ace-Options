import { LineChart, XAxis, Tooltip, Line, CartesianGrid, YAxis } from 'recharts'

const data = [
  { stock: 'googl', month: 'Jan', price: 450 },
  { stock: 'googl', month: 'Feb', price: 320 },
  { stock: 'googl', month: 'Mar', price: 700 },
  { stock: 'googl', month: 'Apr', price: 2152 },
  { stock: 'googl', month: 'May', price: 2742 },
  { stock: 'googl', month: 'Jun', price: 2953 },
  { stock: 'googl', month: 'Jul', price: 2647 },
  { stock: 'googl', month: 'Aug', price: 2248 },
  { stock: 'googl', month: 'Sept', price: 1744 },
  { stock: 'googl', month: 'Oct', price: 1532 },
  { stock: 'googl', month: 'Nov', price: 1865 },
  { stock: 'googl', month: 'Dec', price: 1764 },
]

export default function Graph() {
  return (
    <div>
      <LineChart
        width={800}
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
          stroke="#8884d8"
          yAxisId={0}
          // name={data[0].stock}
        />
      </LineChart>
    </div>
  )
}
