import React from "react";
import axios from "axios";
import { print } from 'graphql';
import gql from 'graphql-tag';


export default function Login(){

    function handlesubmit(event){
      event.preventDefault() ;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const graphqlEndpoint = 'http://localhost:5000/graphql';
      const LOGIN_MUTATION = gql`
      mutation Login($user: UserLogin!) {
            login(user: $user)
          }
        `;
      const variables = {
        user: {
          email: email,
          password: password, // Replace with your password hashing logic
        },
      };
      axios.post(graphqlEndpoint, {
        query: print(LOGIN_MUTATION),
        variables,
      })
      .then(res =>{localStorage.setItem('jwt',res.data.data.login)}) 
      .catch(err=>console.error(err)) ;
    }
      return (
          <div className="App flex justify-center items-center h-screen bg-slate-100">
          <div className="bg-white bg-slate shadow-2xl w-full sm:w-96 rounded-lg">
          <h2 className="text-2xl font-semibold my-5 mx-3 font-mono">Login</h2>
          <form className='' onSubmit={handlesubmit}>
          <div className="mb-4 mx-4">
            <label htmlFor="email" className="block text-gray-700 font-mono" >Email</label>
            <input type="text" id="email" name="email" className="form-input mt-1 block w-full rounded-md border-gray-300 border-2" autoComplete="off"/>
          </div>
          <div className="mb-4 mx-4">
            <label htmlFor="password" className="block text-gray-700 font-mono">Password</label>
            <input type="text" id="password" name="password" className="form-input mt-1 block w-full rounded-md border-gray-300 border-2"  autoComplete="off"/>
          </div>
          
          <button  type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4 mx-4 font-mono">Login</button>
        </form>
      </div>
      </div>
    ) ;
}; 