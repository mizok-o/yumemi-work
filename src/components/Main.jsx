import { useEffect, useState } from "react";
import Checkbox from './Checkbox';
import Graph from './Graph'

function Main() {

  const [prefs, setPref] = useState([])
  const [prefcode, setPrefcode] = useState([1, 2])
  const [graphdata, setgraphdata] = useState([
    {year: 1970},
    {year: 1980},
    {year: 1990},
    {year: 2000},
    {year: 2010},
    {year: 2020}
  ])

  const option = {
    method: 'GET',
    headers: {
      'x-api-key': 'atR4vyJ8zJ0T9pn3XlhkshErUixaz8NFkWKtbbrI',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }

  useEffect(() =>{
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', option)
      .then(res => res.json())
      .then(data => {
        setPref(data.result)
      })
  }, [])

  // デフォルトで表示するグラフ

  const defineGraphArray = (data, code) => {
    console.log("-------START-------");
    data.splice(0, 2)
    data.splice(-5)

    const result = data.filter((e, i) => {
      return i % 2 === 0
    })

    for (let i = 0; i < graphdata.length; i++) {
      graphdata[i][`value${code}`] = result[i].value
    }

    console.log(graphdata);
    console.log("-------FINISH-------");
  }

  useEffect(() =>{
    for (let i = 0; i < prefcode.length; i++) {
      fetch(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefcode[i]}`, option)
      .then(res => res.json())
      .then(data => {
        console.log("総人口");
        console.log(data.result.data[0].data);
        const graphDefault = data.result.data[0].data;
        defineGraphArray(graphDefault, i)
      })
    }
  }, [])

  const ch = e => {
      console.log(e);
      setPrefcode([...prefcode, e])
    }

  return (
    <div className="main">
      <Checkbox prefs={prefs} changed={ch}  />
      <Graph activePref={prefcode} data={graphdata} />
      <p onClick={() => console.log(graphdata)}>あいう</p>
    </div>
  );
}

export default Main;
