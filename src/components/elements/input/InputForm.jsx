import React from "react";
import Label from "./Label";
import Input from "./Input";

function InputForm(props) {
  const { label, type, name, id, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} type={type} id={id} placeholder={placeholder} />
    </div>
  );
}

export default InputForm;
