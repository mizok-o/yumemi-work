import { useEffect, useState } from "react";
import Checkbox from './Checkbox';
import Graph from './Graph'

function Main() {

  const [prefs, setPref] = useState([])
  const [prefcode, setPrefcode] = useState([])

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
        console.log(data.result);
        setPref(data.result)
      })
  }, [])

  const ch = e => {
      console.log(e);
      setPrefcode([...prefcode, e])
    }

  return (
    <div className="main">
      <Checkbox prefs={prefs} changed={ch}  />
      <Graph activePref={prefcode} />
    </div>
  );
}

export default Main;
