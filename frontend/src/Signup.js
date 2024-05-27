import React from "react";


export default function Signup(){

    return (
        <div className="App flex justify-center items-center h-screen bg-slate-100">
        <div className="bg-white bg-slate shadow-2xl w-full sm:w-96 rounded-lg">
        <h2 className="text-2xl font-semibold my-5 mx-3 font-mono">Singup</h2>
        <form className=''>
          <div className="mb-4 mx-4">
            <label htmlFor="fullname" className="block text-gray-700 font-mono" >Full name</label>
            <input type="fullname" id="fullname" name="fullname" className="form-input mt-1 block w-full rounded-md border-gray-300 border-2" autoComplete="off"/>
          </div>
          <div className="mb-4 mx-4">
            <label htmlFor="email" className="block text-gray-700 font-mono">Email</label>
            <input type="email" id="email" name="email" className="form-input mt        -1 block w-full rounded-md border-gray-300 border-2"  autoComplete="off"/>
          </div>
          <div className="mb-4 mx-4">
            <label htmlFor="password" className="block text-gray-700 font-mono">Password</label>
            <input type="password" id="password" name="password" className="form-input mt-1 block w-full rounded-md border-gray-300 border-2"  autoComplete="off"/>
          </div>
          
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4 mx-4 font-mono">Register</button>
        </form>
      </div>
      </div>
    ) ;
}