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

  useEffect(() =>{
    fetch('http://localhost:8000/prefs')
      .then(res => res.json())
      .then(data => {
        setPref(data.result)
      })
  }, [prefs])

  // グラフに表示するデータに加工する
  const defineGraphArray = (data, code) => {
    data.splice(0, 2)
    data.splice(-5)
    const result = data.filter((e, i) => {
      return i % 2 === 0
    })

    for (let i = 0; i < graphdata.length; i++) {
      graphdata[i][`value${code}`] = result[i].value
    }
  }

  useEffect(() =>{
    const index = prefcode.slice(-1)[0]

    fetch('http://localhost:8000/graph')
      .then(res => res.json())
      .then(data => {
        const graphDefault = data.result.data[0].data;
        defineGraphArray(graphDefault, index)
      })
  }, [prefcode])

  // checkbox変更時にprefcodeの内容を変更させる
  const ch = (e) => {
    const checkDuplicated = prefcode.indexOf(e)

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
