import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {

    const [close, setClose] = useState(true);

  return (

    close && (

         <div>

            <div className='w-full h-[100px] bg-pink-600 flex justify-between'>

                <div className='w-[100%] h-[100%] flex items-center justify-center'>
                    
                <div className='w-[700px] h-[100%] flex items-center justify-center'>

                    <div className='w-[100px] h-[100%] mr-7'>

                        <img  className=' w-[100%] h-[100%] brightness-0 invert' src="https://micro-assets.foodora.com/img/ic-rider-icon.svg " alt="" />

                    </div>

                    <div className='w-[700px] h-[100%] items-center mx-0 justify-center font-poppins text-[20px] font-bold mt-[10%] text-white'>
 
                        List your bussiness on foodpanda!

                    </div>

                    <div className='w-[200px] h-[100%]'>

                        <button className='w-[200px] p-[20px] border border-white ml-5  hover:bg-white hover:text-black  transition: ease-in-out duration-300  rounded-[10px] font-poppins text-[14px] text-white mt-4'>

                            PARTNER WITH US

                        </button>

                    </div>

                
                </div>



                </div>

                <div className='w-[80px] h-[80px] mt-2 rounded-[50%] flex justify-center text-2xl text-white hover:bg-white transition: ease-in-out duration-300 hover:text-black'>

                        
                        <div className='flex justify-center items-center'>

                            <button onClick={() => setClose(!close)}>

                             <RxCross2 />

                            </button>
                          
                        </div>
                 
                </div>
            
            </div>

            <div className='w-full h-[150px]  shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex justify-center'>

                <div className='w-[80%] h-[50%] flex bg-amber-100'>

                    <div className='w-[180px] h-[100%]flex'>

                        <img className='w-[100%] h-[100%]' src="/img/Foodpandlogo.png" alt="" />

                    </div>

                     <div className='w-[25%] ml-[15%] text-2xl h-[100%] flex items-center'>

                           <IoLocationOutline />

                            <div className='text-[16px] pl-3'>
                                <span>New address Select your address</span>
                            </div>
                    </div>

                    <div className='w-[40%] h-[100%] ml-[13%] flex items-center '>

                            <div className='w-[100px] rounded-[10px] h-[40px] border hover:h-[50px] hover:bg-amber-50 transition-all: ease-in-out duration-80 bg-white'>

                                <button className='w-[100%] h-[100%]'>

                                    Log in

                                </button>

                            </div>

                    <div className='w-[250px] h-[60%] rounded-[10px] hover:h-[68%]  hover:bg-pink-800 transition-all: ease-in-out duration-100 bg-pink-600 ml-5'>

                        <button className='w-[100%] h-[100%] text-white font-bold'>

                                Sign Up for free delivery
                        </button>

                    </div>

                    <div className='w-[100px] items-center h-[60%] ml-5 bg-blue-300 text-2xl'>

                            <button className='w-[100%] h-[100%]'>
                                    <TbWorld />  <span className='text-[18px]'>EN</span>
                            </button>

                           
                    </div>

                    </div>

                

                </div>

               
            </div>

        
        </div>

    )

   
  )
}

export default Navbar