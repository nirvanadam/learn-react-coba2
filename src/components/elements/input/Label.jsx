import React from "react";

function Label(props) {
  const { id, children } = props;
  return (
    <label htmlFor={id} className="block text-slate-700 tedxt-sm font-bold mb-2">
      {children}
    </label>
  );
}

export default Label;
