import React from "react";

const Login = () => {
  return (
    <div className="modal">
      <div className="relative modal-box">
        <label className="absolute btn btn-sm btn-circle right-2 top-2">
          ✕
        </label>
        <label>User Name</label>
        <input
          type="text"
          placeholder="Type here"
          className="w-full max-w-xs input input-bordered"
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Type here"
          className="w-full max-w-xs input input-bordered"
        />
      </div>
    </div>
  );
};

export default Login;
