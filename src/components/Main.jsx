import { useEffect, useState } from "react";
import Checkbox from './Checkbox';
import Graph from './Graph'

function Main() {

  const [prefs, setPref] = useState([])
  const [prefcode, setPrefcode] = useState([1])
  const [graphdata] = useState([
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
      'x-api-key': 'XCXAdsXiIRxpPR8HBP6ANFuEzB6LlgFi7Dvm6MMS',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }

  useEffect(() =>{
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', option)
      .then(res => res.json())
      .then(data => {
        setPref(data.result)
      })
  }, [prefs])

  // デフォルトで表示するグラフ

  const defineGraphArray = (data, code) => {
    data.splice(0, 2)
    data.splice(-5)
    const result = data.filter((e, i) => {
      return i % 2 === 0
    })

    for (let i = 0; i < graphdata.length; i++) {
      graphdata[i][`value${code}`] = result[i].value
    }
    console.log(graphdata);
  }

  useEffect(() =>{

    const index = prefcode.slice(-1)[0]
    console.log(`${index}番のAPI呼び出し`);
    console.log("prefcode");
    console.log(prefcode);
    fetch(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${index}`, option)
      .then(res => res.json())
      .then(data => {
        const graphDefault = data.result.data[0].data;
        console.log("changed");
        console.log(graphDefault);
        console.log(graphdata);
        defineGraphArray(graphDefault, index)
      })
  }, [prefcode])

  // checkbox変更時にprefcodeの内容を変更させる
  const ch = (e) => {
    console.log(e);
    const checkDuplicated = prefcode.indexOf(e)
    console.log(checkDuplicated);

    if(checkDuplicated === -1) {
      setPrefcode([...prefcode, e])
    }else {
      prefcode.splice(checkDuplicated, 1)
      setPrefcode(prefcode)
    }

  }

  return (
    <div className="main">
      <Checkbox prefs={prefs} changed={ch}  />
      <Graph test={prefcode} data={graphdata} />
    </div>
  );
}

export default Main;
