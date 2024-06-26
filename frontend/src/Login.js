import React, { useState } from "react";
import axios from "axios";

import { useMutation , gql } from "@apollo/client";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
      mutation Login($user: UserLogin!) {
            login(user: $user)
          }
        `;

export default function Login(){
  
  const [login , {data , loading , error}] =useMutation(LOGIN_MUTATION);
  const [wrong , setWrong]= useState(false) ; 
  const navigate = useNavigate() ; 

    async function handlesubmit(event){
      event.preventDefault() ;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const graphqlEndpoint = 'http://localhost:5000/graphql';
      
      const variables = {
        user: {
          email: email,
          password: password, // Replace with your password hashing logic
        },
      };

      try{
        login({variables})
        .then(data => {
          if(data.data.login == "Wrong credetial"){
            setWrong(true) ;
            setWrong(true) ;
          }
          else{
            localStorage.setItem("jwt" , data.data.login) ; 
            navigate('/projects') ; 
          }
        }) ; 

      }catch(err){
        console.error(err) ;
      }
      
      
    }
    if (loading) return "laoding " ;
    if (error) return `Error ${error}` ;  

    
    
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
          <div className="flex flex-col items-center justify-center">
          <h1 className="text-red-500 font-mono ">{wrong ? "wrong credentials" : ""}</h1>
          <button  type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4 mx-4 font-mono">Login</button>
          </div>
        </form>
      </div>
      </div>
    ) ;
}; 