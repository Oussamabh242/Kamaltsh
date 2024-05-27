import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){
    function lowercase(s){return s.toLocaleLowerCase()} ;

    return(
        <div className="nav bg-slate-200 h-16 flex items-center font-Play"> 

    <div className="flex justify-between w-full ml-10">
        <Link to="/" className="logo font-Play font-extrabold">
            Kamaltsh
        </Link>
        <div className="navbuttons flex mr-10 ">
            {props.items.map((item, index) => (
                <Link key={index} to={`/${lowercase(item)}`} className="navLink w-14 hover:underline text-center font-normal">
                    {item}
                </Link>
            ))}
        </div>
    </div>

</div>

    ) ; 
}

