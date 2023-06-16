import React from "react";

function Input(props) {
  const { type, name, id, placeholder } = props;
  return <input type={type} name={name} id={id} placeholder={placeholder} className="text-sm border border-slate-400 rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" />;
}

export default Input;
