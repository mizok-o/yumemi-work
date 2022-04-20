// import { useEffect, useState } from "react";
import '../checkbox.css'

function Checkbox(props) {

  const {prefs, changed} = props

  const radioItems = prefs.map((pref, i) => {
    return (
      <div className="pref__item" key={i}>
        <label htmlFor={pref.prefName}>
          <input
            type="radio"
            name="prefName"
            id={pref.prefName}
            value={pref.prefName}
            onChange={() => changed(pref.prefCode)}
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
