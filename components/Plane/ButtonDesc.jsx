'use client'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";


const ButtonDesc = ({value}) => {

    const [isActive, setisActive] = useState(false)
  return (
    <div>
        <section className='flex flex-col absolute z-20 right-10 bottom-20'>
                {isActive && (
                    <div className='max-w-96 pb-10  p-4 rounded-xl bg-neutral-900'>
                        <h1 className=' font-sans font-bold'>Notas:</h1>
                        {value && value}
                    </div>
                )}

            </section>
            <button 
            onClick={() => setisActive(!isActive)} 
            className='absolute z-20 right-10 bottom-20 p-2 text-neutral-300 hover:text-white  rounded-full bg-neutral-900'>
                <IoMdMenu size={24} />
            </button>
    </div>
  )
}

export default ButtonDesc