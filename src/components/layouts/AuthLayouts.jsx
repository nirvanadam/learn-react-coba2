import React from "react";
import FormLogin from "../fragments/FormLogin";

function AuthLayouts() {
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-blue-600 text-3xl font-bold mb-2">Login</h1>
      <p className="font-medium text-slate-500">Welcome. Please enter your details</p>
      <FormLogin />
    </div>
  );
}

export default AuthLayouts;
