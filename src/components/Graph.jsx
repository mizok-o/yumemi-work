import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis } from "recharts";

function App() {

  const data = [
    {
        name: '2010年', 株価: 4000
    },
    {
        name: '2011年', 株価: 3000
    },
    {
        name: '2012年', 株価: 2000
    }
  ]
  return (
    <div className="Graph">
      <p>グラフ</p>
      <LineChart
                width={700}
                height={500}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval="preserveStartEnd" />
                <YAxis interval="preserveStartEnd" />
                <Legend />
                <Line type="monotone" dataKey="株価" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="配当" stroke="#82ca9d" /> */}
            </LineChart>
    </div>
  );
}

export default App;
