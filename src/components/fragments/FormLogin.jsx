import React from "react";
import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";

function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/page3";
    // console.log(event.target["email"].value);
    // console.log(event.target["password"].value);
  };

  return (
    <form onSubmit={handleLogin} className="mt-5">
      <InputForm label="Email" id="email" type="email" placeholder="Enter your email" name="email" />

      <InputForm label="Password" type="password" placeholder="Enter your Password" name="password" />

      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
