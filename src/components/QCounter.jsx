import React from "react";

export default function QCounter({
  onIncrement,
  OnDecrement,
  item,
  className,
  value,
}) {
  console.log(item.quantity);
  return (
    <div className={className}>
      <button onClick={() => onIncrement(item)}>+</button>
      {value && value >= 1 ? value : 0 || item.quantity > 0 ? item.quantity : 0}
      <button onClick={() => OnDecrement(item)}>-</button>
    </div>
  );
}
