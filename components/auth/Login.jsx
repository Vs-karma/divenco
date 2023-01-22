import React from "react";

export default function Login({ visible, onClose}) {
  if(!visible) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-[100]">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="p-2 bg-white rounded w-72">
        <h1 className="text-xl font-semibold text-center text-gray-700">
          Welcome back
        </h1>
        <button onClick={onClose}>X</button>
        <p className="mb-5 text-center text-gray-700">Sign in</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="p-2 mb-5 border border-gray-700 rounded"
            placeholder="email@example.com"
          />
          <input
            type="text"
            className="p-2 mb-5 border border-gray-700 rounded"
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 text-white bg-gray-700 rounded">
            Sign in
          </button>
        </div>
      </div>
    </div>
    
    
    </div>
  );
}

// import React from "react";

// const Login = () => {
//   return <div>h</div>;
// };

// export default Login;

// {
//   /* <label className="absolute btn btn-sm btn-circle right-2 top-2">
//           ✕
//         </label>
//         <label>User Name</label>
//         <input
//           type="text"
//           placeholder="Type here"
//           className="w-full max-w-xs input input-bordered"
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           placeholder="Type here"
//           className="w-full max-w-xs input input-bordered"
//         /> */
// }
