import React from "react";


export default function Sidebar(){


    return(
        <div className="w-1/5 bg-slate-200 h-screen pl-3 pt-3 fixed ">
            
            <div className="font-mono  p-0 ">
                <div className="font-extrabold">Projects {'>'} </div> 
                <ul className="projectlist pl-2">
                    <li >porject 1</li>
                    <li>porject 2</li>
                    <li>porject 3</li>
                    <li>porject 4</li>
                    <li>porject 5</li>
                </ul>
            </div>

            
            
        </div>
    ) 
}