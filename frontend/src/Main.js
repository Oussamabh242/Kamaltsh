import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import Modal from "react-modal" ; 
import ProjectGrid from "./ProjectGrid";


import { FaPlus } from "react-icons/fa";


export default function Main(){




  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%', // Custom width
      height: '50%' // Custom height
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)' // Optional: dim the background
    }
  };
  const [modal, setModal] = useState(false) ; 

  function toggleModal(){
    setModal(!modal) ; 
} 
    return (
    <div className="flex flex-col h-full ">
        <Navbar items={["profile" , "About"]}/>
        


      <div className="mainpage flex flex-row font-mono ">

        <div className="w-1/5 hidden sm:block"><Sidebar projects={["vv"]} /></div>
        <div className="w-full sm:w-4/5 flex-grow  bg-slate-100" >
            <div className="flex flex-row justify-between my-5 mx-3">
              <div className="font-Play font-bold text-xl">Projects</div>
              <button className=" text-black flex justify-between items-center text-center border-2 border-slate-400 rounded-lg p-1"
                  onClick={toggleModal}>Add a project <FaPlus style={{color:"#333"}}/></button>
            </div>
          <ProjectGrid />  
        </div>
        
          
      </div>
      


      
      <Modal isOpen={modal} onRequestClose={() => setModal(false)} style={customStyles}>
        <div div className="text-center font-mono ">
          <div className="text-2xl">Add a new project</div>
          <form className="flex flex-col">
            <div>
              <label for= "projectName">Project name :</label>
              <input placeholder="Project Name" className="border-2 ml-10 mt-5 border-gray-400"></input>
            </div>
            <div>
              <label for= "priority">Priority :</label>
              <select className="ml-10 mt-5">
                <option>Normal</option>
                <option>Medium</option>
                <option>High </option>
              </select>
            </div>
            
          </form>
        </div>
        
        
      </Modal>
    </div>
  );

}
