import { LineChart, Line, XAxis, YAxis } from "recharts";
import '../style/graph.css'

function Graph(props) {

  const lines = props.test.map(val => {
    return (
        <Line key={val} type="monotone" dataKey={`value${val}`} stroke="#b884d8" activeDot={{ r: 8 }} />
    )
  })

  return (
    <div className="graph">
      <LineChart
        width={700}
        height={500}
        data={props.data}
      >
        <XAxis dataKey="year" interval="preserveStartEnd" />
        <YAxis interval="preserveStartEnd" />
        {lines}
      </LineChart>

    </div>
  );
}

export default Graph;
