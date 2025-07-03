import React from 'react';

function List({text,className}) {
  return (
    <div>
        < li className={`text-secondary text-sm font-normal font-dm hover:text-primary duratoion-300 hover:font-bold cursor-pointer ${className}`}>{text} </li>
    </div>
  );
}

export default List;
