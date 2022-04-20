import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis } from "recharts";

function Graph(props) {

  const [graphdata, setgraphdata] = useState([])

  const option = {
    method: 'GET',
    headers: {
      'x-api-key': 'atR4vyJ8zJ0T9pn3XlhkshErUixaz8NFkWKtbbrI',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }

  useEffect(() =>{
    fetch(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=12`, option)
      .then(res => res.json())
      .then(data => {
        console.log(data.result);
        console.log("総人口");
        console.log(data.result.data[0].data);
        setgraphdata(data.result.data[0].data)
      })
    // for (let i = 0; i < props.activePref.length; i++) {
    //   console.log(props.activePref[i]);
    //   fetch(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${props.activePref[i]}`, option)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data.result);
    //     setgraphdata(data.result)
    //   })
    // }
  }, [])

  // const graph = graphdata.map((data, i) => {
  //   return (
  //     <LineChart
  //       width={700}
  //       height={500}
  //       data={data}
  //     >
  //       <CartesianGrid strokeDasharray="3 3" />
  //       <XAxis dataKey="value" interval="preserveStartEnd" />
  //       <YAxis interval="preserveStartEnd" />
  //       <Legend />
  //       <Line type="monotone" dataKey="year" stroke="#8884d8" activeDot={{ r: 8 }} />
  //       {/* <Line type="monotone" dataKey="配当" stroke="#82ca9d" /> */}
  //     </LineChart>
  //   )
  // })

  return (
    <div className="Graph">
      <p>グラフ</p>
      <p onClick={() => test()}>jfoaerfj</p>
      <LineChart
        width={700}
        height={500}
        data={graphdata}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" interval="preserveStartEnd" />
        <YAxis interval="preserveStartEnd" />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* <Line type="monotone" dataKey="配当" stroke="#82ca9d" /> */}
      </LineChart>

    </div>
  );
}

export default Graph;
