import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Sidebar(){

    return(
        <div className="sidebar bg-slate-200 h-screen pl-3 pt-3 fixed w-1/5">
            
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