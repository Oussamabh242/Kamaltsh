import { Link } from "react-router-dom";
import axios from "axios";
import { print } from 'graphql';
import gql from 'graphql-tag';


import { ImBlocked } from "react-icons/im";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoCheck } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { useEffect, useState } from "react";


export default function ProjectGrid(props){
    const [data ,setData] = useState({}) ; 
    const [loading, setLoading] = useState(true);
    
    const graphqlEndpoint = 'http://localhost:5000/graphql';
    const PROJECTS_QUERY = gql`query Projects {
  
        projects {
          project_name,
          project_id,
          priority,
          state ,
          created_at, 
          team_number,
          task_number
        }
      }`;

    useEffect(()=>{
        axios.post(graphqlEndpoint, {
            query: print(PROJECTS_QUERY),
            
        },
        {
            headers:{
                "x-auth-token" : localStorage.getItem("jwt")
            }
        }
        )
        .then(res =>{setData(res.data.data) ; setLoading(false);}) 
        .catch(err=>console.error(err)) ;
    },[]);

    
  if (loading) {
    return <p>Loading...</p>; // Display a loading message or spinner
  }

  if (!data || !data.projects) {
    return <p>No projects found.</p>; // Handle the case where no data is returned
  }
    
    if(!data){return <p>loading ...</p>}

    return (
        <div className="flex-grow p-5 grid grid-cols-3 gap-10 ">
            {/* First row */}
            <div className="bg-slate-200 p-4 font-bold flex justify-center  items-center text-center "> <div className="text-center">Bolcked</div>   <ImBlocked style={{ color: "red", marginLeft: "10px",fontSize: "20px" }}/></div>

            <div className="bg-slate-200 p-4 font-bold flex justify-center items-center text-center"> <div>In progress</div><AiOutlineLoading3Quarters style={{ color: "yellow", marginLeft: "10px", fontSize: "24px" }}/> </div>

            <div className="bg-slate-200 p-4 font-bold flex justify-center items-center text-center"> <div>Done</div><GoCheck style={{ color: "green", marginLeft: "10px", fontSize: "24px" }}/></div>

            {data.projects.map((project)=>
                <Link key={project.project_id} to={`/project/${project.project_id}`} className="h-48 bg-slate-200 p-4 flex flex-col  shadow-xl  rounded-xl">

                <div>
                    {project.project_name}
                </div>
                <div> 
                    {project.priority}
                </div>
                <div>
                    {project.created_at}
                </div>
                <div>
                    {project.task_number}
                </div>
                <div>
                    Add task
                </div>
                <div className="flex flex-row justify-end gap-4">
                  <div className=" " onClick={()=>{props.callback(!props.modal)}}><FaPen/></div>
                  <div className=" "><IoTrashBinSharp/></div>
                  <div className=""> <div></div><AiOutlineLoading3Quarters style={{ color: "black" , fontSize:"17px"}}/> </div>
                </div>

                
                
                </Link>
            )}
            
            
        </div>
    )
}