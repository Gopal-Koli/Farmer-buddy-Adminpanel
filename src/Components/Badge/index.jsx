import React from 'react'

const Badge = (props) => {
  console.log(props.status); // Check if 'pending' is logged
  return (
    <span
      className={`flex items-center justify-center py-2 px-2 text-[12px] capitalize
        ${props.status === "pending" && 'bg-red-400 text-black'}`}>
      {props.status}
    </span>
  );
};


export default Badge;
