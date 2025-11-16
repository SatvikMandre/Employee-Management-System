/** @format */

import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sybmitHandler = (e) => {
    e.preventDefault();
    if (typeof handleLogin === "function") handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center py-10">
      <div className="border-2 rounded-xl border-emerald-600 p-8 max-w-md w-full">
        <form
          onSubmit={(e) => {
            sybmitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-500"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="mt-5 text-white border-none outline-none  bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
