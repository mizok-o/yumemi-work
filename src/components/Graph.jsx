import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis } from "recharts";

function Graph(props) {

  const lines = props.test.map(val => {
    return (
        <Line key={val} type="monotone" dataKey={`value${val}`} stroke="#8884d8" activeDot={{ r: 8 }} />
    )
  })

  return (
    <div className="Graph">
      <p>グラフ</p>
      <LineChart
        width={700}
        height={500}
        data={props.data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" interval="preserveStartEnd" />
        <YAxis interval="preserveStartEnd" />
        {lines}
      </LineChart>
      <p onClick={() => console.log(props.test)}>ok</p>

    </div>
  );
}

export default Graph;
