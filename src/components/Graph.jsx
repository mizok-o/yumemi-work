// import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis } from "recharts";

function Graph(props) {


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
        {/* <Legend /> */}
        {/* <Line type="monotone" dataKey="value1" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey="value0" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="value1" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      {/* // {graph} */}

    </div>
  );
}

export default Graph;
