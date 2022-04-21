// import { useEffect, useState } from "react";
import '../checkbox.css'

function Checkbox(props) {

  const {prefs, changed} = props

  const radioItems = prefs.map((pref, i) => {
    return (
      <div className="pref__item" key={i}>
        <label htmlFor={pref.prefName}>
          <input
            type="checkbox"
            name="prefName"
            id={pref.prefName}
            value={pref.prefName}
            onChange={() => {
              // console.log(pref);
              changed(pref.prefCode)
            }}
            />
          {pref.prefName}
        </label>
      </div>
    )
  })

  return (
    <div className="checkbox">
      {radioItems}
    </div>
  );
}

export default Checkbox;
