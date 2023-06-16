import React from "react";

function Page4() {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleLogin}>
        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" className="border border-black rounded" />
        </div>
        {/* Username End */}

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="border border-black rounded" />
        </div>
        {/* Email End */}

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="border border-black rounded" />
        </div>
        {/* Password End */}

        <button type="submit" className="px-4 py-1 bg-cyan-400 text-white rounded-md mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
}

export default Page4;
