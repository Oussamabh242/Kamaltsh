
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { GoCheck } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from "react-modal" ; 
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const reDate = (num)=>{
    const date = new Date(parseInt(num)) ; 
    const string = `${date.getDate()} / ${date.getMonth() } / ${date.getFullYear()}` ;
    return string ; 
}

const GET_PROJECT = gql`query Project($projectId: ID!) {
    project(project_id: $projectId) {
      created_at
      members {
        user {
          name
        }
        role
      }
      owner {
        name
      }
      priority
      project_name
      state
      task_number
      team_number
    }
  }`;

const SingleProject = () => {
    const [modal, setModal] = useState(false) ; 

    function toggleModal(){
      setModal(!modal) ; 
    }


    const {id} = useParams() ; 
    
      const variables = {
        "projectId" :`${id}`
      };
      const {loading, error ,data} = useQuery(GET_PROJECT , {
        variables: variables,
        context: {
            headers: {"x-auth-token" : localStorage.getItem("jwt")}
        }
      }); 
      if (loading) return null ;
      if (error) return `Error ${error}` ;
      const project = data.project ; 
      const members= project.members ; 
      members.map((member)=>{
        console.log(member.user.name) ; 
      })
    
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '45%', // Custom width
          height: '50%' // Custom height
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)' // Optional: dim the background
        }
      };

    

    return ( 
    <div>
        <Navbar items={["Home", "About"]} />
        <div className="flex flex-row h-screen">

            <div className="w-1/5 hidden sm:block">
                <Sidebar />
            </div>

            <div className="mainProject font-mono bg-slate-100 flex-grow p-4">
                <h1 className="font-Play font-bold text-xl">{project.project_name}</h1>

                <div className='m-5 bg-slate-50 rounded-xl shadow-xl flex flex-col font-mono p-3 sm:flex-row '>

                    <div className='projectInfo'>
                        <div className='flex'>
                            <h1 className='px-4'>{project.priority}</h1>
                            <h1>{project.state}</h1>
                        </div>
                        <h3 className='text-gray-400 p-2'>Created at :{reDate(project.created_at)} </h3>
                        <div className='border-2 border-gray-50 p-2 rounded-md'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu velit libero. Nunc ex magna, feugiat eget sollicitudin sagittis, interdum ac leo. Duis egestas posuere augue eu finibus. Nullam suscipit, mauris cursus accumsan eleifend, justo nisl fringilla ligula, non vestibulum sapien neque aliquam mi. Curabitur pretium est volutpat efficitur malesuada. Morbi non finibus tellus. In pharetra, velit vitae venenatis condimentum, lorem nulla volutpat sapien
                        </div>
                        <div className='flex gap-10 border-y-2 my-2'>
                            <h1>Tasks : {project.task_number}</h1>
                            <h1> | </h1>
                            <h1>Team members : {project.team_number}</h1>
                        </div>
                        <div className='flex justify-between mt-3 mb-2'>
                            <h1 className='font-bold text-gray-800 mb-2'>Tasks </h1>
                            <button onClick={toggleModal} className='bg-blue-500 p-1 rounded-md text-white font-Play'>Add Task</button>
                        </div>
                        
                        <Link to="/task/5" className='flex justify-between pl-2 border-2 rounded-lg mb-2'>
                            <div className='flex flex-col '>
                                <div className='flex'>
                                    <h1>Task name</h1>
                                    <h1> | </h1>
                                    <h1 className='text-gray-400'>21 Oct 2022</h1>
                                    <h1> | </h1>
                                    <h1 className='bg-yellow-400 rounded-lg text-yellow-700 px-1'>In Progress</h1>
                                </div>
                                <h1 className=''>fixing Bug in the main page of the frontend</h1>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className=" "><FaPen/></div>
                                <div className=" "><IoTrashBinSharp/></div>
                                <div><GoCheck style={{  fontSize: "24px" }}/></div>
                            </div>
                        </Link>

                        <Link to="/task/2" className='flex justify-between pl-2 border-2 rounded-lg mb-2'>
                            <div className='flex flex-col '>
                                <div className='flex'>
                                    <h1>Task name</h1>
                                    <h1> | </h1>
                                    <h1 className='text-gray-400'>21 Oct 2022</h1>
                                    <h1> | </h1>
                                    <h1 className='bg-green-400 rounded-lg text-green-700 px-1'>Done</h1>
                                </div>
                                <h1 className=''>fixing Bug in the main page of the frontend</h1>
                            </div>
                            <div className="flex items-center justify-center flex-grow gap-2 ml-10">
                                <div className=" "><FaPen/></div>
                                <div className=""><IoTrashBinSharp/></div>
                            </div>
                        </Link>
                    </div>

                    <div className='ml-2 pl-4 border-l-2 flex-grow'>
                        <div className='flex justify-between'>
                            <h1 className='font-mono font-bold text-lg'>Project Team</h1>
                            <button className="bg-green-500 rounded-full p-2 shadow-md hover:shadow-lg transition duration-300">
                                <FaPlusCircle className="text-white text-lg" />
                            </button>
                        </div>
                        
                        {/* <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>{project.owner.name}</h1>
                                <h1>Team Leader</h1>
                            </div>
                        </div> */}
                        {members.map((member)=>
                            <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                                <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                    OB
                                </div>
                                <div className='ml-4'>
                                    <h1 className='font-semibold text-md'>{member.user.name}</h1>
                                    <h1>{member.role}</h1>
                                </div>
                            </div>
                        )}
                        
                        
                    </div>


                </div>

                

            </div>

      </div>
      <Modal isOpen={modal} onRequestClose={() => setModal(false)} style={customStyles}>
        <div div className="text-center font-mono ">
          <div className="text-2xl">Add a new Task </div>
          <form className="inline-flex flex-col">
            <div>
              <label for= "projectName">Task name :</label>
              <input placeholder="Project Name" className="border-2 ml-10 mt-5 border-gray-400"></input>
            </div>
            <div>
              <label for= "projectName">Task description :</label>
              <input placeholder="Project Name" type="text" className="border-2 ml-10 mt-5 border-gray-400"></input>
            </div>
            <div>
              <label for= "priority">Priority :</label>
              <select className="ml-10 mt-5">
                <option>Normal</option>
                <option>Medium</option>
                <option>High </option>
              </select>
            </div>
            <input type='submit' className='inline-block bg-blue-500 text-white rounded-md p-2 mt-5' value="Create Task"></input>
            
          </form>
        </div>
        
        
      </Modal>
    </div>
     );
}
 
export default SingleProject;