import React from "react"
import { Link } from "react-router-dom";

const Home =({user, error}) => {
  return (
    
    <div className=" min-h-[80vh] flex flex items-center justify-center p-6">
        <div className=" bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
            {error && <p className = "text-red-500">{error}</p>}
            
                {user ?(
      <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800 "> 
        Welcome, {user.name}!
      </h1>
      <p className="text-gray-800">Email: {user.email}</p>
      </div>
      ):(
    <div>
     <h2 className="text-2xl font-bold mb-6 text-gray-800">please login in or register.</h2>
     <div className="flex flex-col gap-y-4">
     <Link to = '/login' className = "w-full text-white bg-blue-500 p-3 rounded-md hover:bg-gray-600 font-medium">
     Login
     </Link>

      <Link to = '/login' className = "w-full text-white bg-gray-500 p-3 rounded-md hover:bg-gray-600 font-medium">
     Register
     </Link>
     </div>
    </div>
      )}
      </div>
      </div>
  );
}

export default Home;
