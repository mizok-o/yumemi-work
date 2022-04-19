import { useEffect, useState } from "react";
import '../checkbox.css'

function Checkbox(props) {
  const [prefs, setPref] = useState([])

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

  const test = e => {
    console.log(e);
  }

  return (
    <div className="checkbox">
      {
        prefs.map((pref, i) => {
          return (
            <div className="pref__item" key={i}>
              <label htmlFor={pref.prefName}>
                <input
                  type="radio"
                  name="prefName"
                  id={pref.prefName}
                  value={pref.prefName}
                  onChange={() => test(pref.prefCode)}
                  />
                {pref.prefName}
              </label>
            </div>
          )
        })
      }
    </div>
  );
}

export default Checkbox;
