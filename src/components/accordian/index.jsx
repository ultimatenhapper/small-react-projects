import React, { useState } from "react";
import data from "./data";

import "./styles.css";

function Accordian() {
  const [selectedId, setSelectedId] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const handleMultipleSelection = (id) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        Enable multiple selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selectedId === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>Data not found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
