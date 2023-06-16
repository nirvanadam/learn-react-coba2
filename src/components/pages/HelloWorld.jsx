import React from "react";
import FormLogin from "../fragments/FormLogin";
import { Link } from "react-router-dom";

function HelloWorld() {
  const name = "nirvan";
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">Login</h1>
        <p className="font-medium text-slate-500">Welcome. Please enter your details</p>
        <FormLogin />
        <p>
          Go to
          <Link to="/page2" className="font-bold text-blue-600">
            Next Page
          </Link>
        </p>
        {name === "nirvan" ? <input type="text" name="" id="" /> : <h1>You are not Nirvan</h1>}
      </div>
    </div>
  );
}

export default HelloWorld;
