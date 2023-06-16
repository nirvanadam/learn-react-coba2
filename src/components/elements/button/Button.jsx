import React from "react";

function Button(props) {
  const { variant = "bg-black", children = "...", onClick } = props;
  return (
    <div>
      <button className={`${variant} px-2 py-1 rounded-md text-white`} onClick={() => onClick} type="submit">
        {children}
      </button>
    </div>
  );
}

export default Button;
