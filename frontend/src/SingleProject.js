
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { GoCheck } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

const SingleProject = () => {

    
    return ( 
    <div>
        <Navbar items={["Home", "About"]} />
        <div className="flex flex-row h-screen">

            <div className="w-1/5 hidden sm:block">
                <Sidebar />
            </div>

            <div className="font-mono bg-slate-100 flex-grow p-4">
                <h1 className="font-Play font-bold text-xl">Project Name</h1>

                <div className='m-5 bg-slate-50 rounded-xl shadow-xl flex flex-row font-mono p-3'>

                    <div className='projectInfo'>
                        <div className='flex'>
                            <h1>Priority</h1>
                            <h1>In progress</h1>
                        </div>
                        <h3 className='text-gray-400 p-2'>Created at :  21 Oct 2003</h3>
                        <div className='flex gap-10 border-y-2 my-2'>
                            <h1>Tasks : 5</h1>
                            <h1> | </h1>
                            <h1>Team members : 10</h1>
                        </div>
                        <h1 className='font-bold text-gray-800 mb-2'>Tasks </h1>
                        <div className='flex justify-between pl-2 border-2 rounded-lg mb-2'>
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
                        </div>

                        <div className='flex justify-between pl-2 border-2 rounded-lg mb-2'>
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
                        </div>
                    </div>

                    <div className='ml-2 pl-4 border-l-2 flex-grow'>
                        <h1 className='font-mono font-bold text-lg'>Project Team</h1>
                        <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>Oussama Ben Hassen</h1>
                                <h1>Team Leader</h1>
                            </div>
                        </div>
                        <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>Oussama Ben Hassen</h1>
                                <h1>Team Leader</h1>
                            </div>
                        </div>
                        <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>Oussama Ben Hassen</h1>
                                <h1>Team Leader</h1>
                            </div>
                        </div>
                        <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>Oussama Ben Hassen</h1>
                                <h1>Team Leader</h1>
                            </div>
                        </div>
                        <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>Oussama Ben Hassen</h1>
                                <h1>Team Leader</h1>
                            </div>
                        </div>
                        <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>Oussama Ben Hassen</h1>
                                <h1>Team Leader</h1>
                            </div>
                        </div>
                    </div>


                </div>

                

            </div>

      </div>
    </div>
     );
}
 
export default SingleProject;