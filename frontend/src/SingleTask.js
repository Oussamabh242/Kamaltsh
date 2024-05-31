
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { FaPlusCircle } from "react-icons/fa";

const SingleTask = () => {

    
    return ( 
    <div>
        <Navbar items={["Home", "About"]} />
        <div className="flex flex-row justify-end  h-screen">
            <div className="w-1/5 hidden sm:block flex-grow-0">
                <Sidebar />
            </div>

            <div className="mainTask font-mono bg-slate-100 flex-grow p-4 ">
                <h1 className="font-Play font-bold text-xl">Project Name / Task Name </h1>

                <div className='m-5 bg-slate-50 rounded-xl shadow-xl flex flex-col font-mono p-3'>

                    <div className='taskInfo flex flex-col gap-4'>
                        <div className='flex gap-5'>
                            <h1>Priority</h1>
                            <h1>In progress</h1>
                        </div>
                        <h3 className='text-gray-400 p-2'>Created at :  21 Oct 2003</h3>
                        <div className='border-2 border-gray-50 p-2 rounded-md'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu velit libero. Nunc ex magna, feugiat eget sollicitudin sagittis, interdum ac leo. Duis egestas posuere augue eu finibus. Nullam suscipit, mauris cursus accumsan eleifend, justo nisl fringilla ligula, non vestibulum sapien neque aliquam mi. Curabitur pretium est volutpat efficitur malesuada. Morbi non finibus tellus. In pharetra, velit vitae venenatis condimentum, lorem nulla volutpat sapien, eget sagittis ligula neque commodo lectus. Maecenas aliquam mi magna, at aliquam ipsum tincidunt id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc finibus ex ac libero mollis, vel egestas purus congue. Aenean id laoreet erat, vitae iaculis nulla. Vivamus eu pretium ante, ut semper purus. 
                        </div>
                        <div className='flex gap-10 border-y-2 my-2'>
                            <h1>Task number : 5</h1>
                            <h1> | </h1>
                            <h1>Team members : 10</h1>
                        </div>
                        
                        
                        
                    </div>
                    <div className='ml-2 pl-4 border-l-2 flex-grow'>
                        <div className='flex justify-between'>
                            <h1 className='font-mono font-bold text-lg'>Task Team</h1>
                            <button className="bg-green-500 rounded-full p-2 shadow-md hover:shadow-lg transition duration-300">
                                <FaPlusCircle className="text-white text-lg" />
                            </button>
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
                                <h1>Task Responsable</h1>
                            </div>
                        </div>
                        <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>Oussama Ben Hassen</h1>
                                <h1>Frontend Developer</h1>
                            </div>
                        </div>
                        <div className='mt-2 ml-2 flex items-center border-2 rounded-md border-gray-100 shadow-sm'>
                            <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center text-center font-semibold text-blue-50 bg-blue-700 rounded-full'>
                                OB
                            </div>
                            <div className='ml-4'>
                                <h1 className='font-semibold text-md'>Oussama Ben Hassen</h1>
                                <h1>Tester</h1>
                            </div>
                        </div>
                        
                    </div>


                </div>

                

            </div>

      </div>
    </div>
     );
}
 
export default SingleTask;