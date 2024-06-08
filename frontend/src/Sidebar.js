import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props){

    console.log(props.projects) ; 
    return(
        <div className="w-1/5 bg-slate-200 h-screen pl-3 pt-3 fixed ">
            
            <div className="font-mono  p-0 ">
                <div className="font-extrabold">Projects {'>'} </div> 
                <ul className="projectlist pl-2 flex flex-col">
                    {props.projects.map((project)=>
                        <Link to="/project/8">{project}</Link>
                    )

                    }
                    
                    
                </ul>
            </div>

            
            
        </div>
    ) 
}