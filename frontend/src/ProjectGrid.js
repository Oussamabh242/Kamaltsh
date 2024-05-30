import { Link } from "react-router-dom";

import { ImBlocked } from "react-icons/im";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoCheck } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";


export default function ProjectGrid(props){
    console.log(props)
    return (
        <div className="flex-grow p-5 grid grid-cols-3 gap-10 ">
            {/* First row */}
            <div className="bg-slate-200 p-4 font-bold flex justify-center  items-center text-center "> <div className="text-center">Bolcked</div>   <ImBlocked style={{ color: "red", marginLeft: "10px",fontSize: "20px" }}/></div>

            <div className="bg-slate-200 p-4 font-bold flex justify-center items-center text-center"> <div>In progress</div><AiOutlineLoading3Quarters style={{ color: "yellow", marginLeft: "10px", fontSize: "24px" }}/> </div>

            <div className="bg-slate-200 p-4 font-bold flex justify-center items-center text-center"> <div>Done</div><GoCheck style={{ color: "green", marginLeft: "10px", fontSize: "24px" }}/></div>

            {/* Second row */}
            <Link to="/project/2" className="h-48 bg-slate-200 p-4 flex flex-col  shadow-xl  rounded-xl">

                <div>
                    Project name
                </div>
                <div>
                    Priority
                </div>
                <div>
                    created at
                </div>
                <div>
                    task number
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
            <div className="h-48 bg-slate-200 p-4 flex flex-col  shadow-xl  rounded-xl">

                <div>
                    Project name
                </div>
                <div>
                    Priority
                </div>
                <div>
                    created at
                </div>
                <div>
                    task number
                </div>
                <div>
                    Add task
                </div>
                <div className="flex flex-row justify-end gap-4">
                  <div className=" " onClick={()=>{props.callback(!props.modal)}}><FaPen/></div>
                  <div className=" "><IoTrashBinSharp/></div>
                  <div><GoCheck style={{  fontSize: "24px" }}/></div>
                </div>

                
                
            </div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">06</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">07</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">08</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">09</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">04</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">05</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">06</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">07</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">08</div>
            <div className="h-48 bg-slate-200 p-4 shadow-xl  rounded-xl">09</div>
        </div>
    )
}