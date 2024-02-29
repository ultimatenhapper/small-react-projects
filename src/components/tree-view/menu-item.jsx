import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import './styles.css';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    })
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            { displayCurrentChildren[item.label] ? <FaMinusCircle color="#fff" size={25}/> : <FaPlusCircle color="#fff" size={25}/> }
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
