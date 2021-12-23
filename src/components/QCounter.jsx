import React from "react";

export default function QCounter({
  onIncrement,
  OnDecrement,
  item,
  className,
}) {
  console.log(item.quantity);
  return (
    <div className={className}>
      <button onClick={() => onIncrement(item)}>+</button>
      {item.quantity >= 1 ? item.quantity : 0}
      <button onClick={() => OnDecrement(item)}>-</button>
    </div>
  );
}
