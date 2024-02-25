'use client'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";


const Estatica = () => {

    const [isActive, setisActive] = useState(false)

    return (
        <main className='relative'>
            <div className=' w-full z-10  '>
                <iframe className='h-screen w-full' src="https://drive.google.com/file/d/16cBuzBDpJsKARU-mGY9RneIxXzFI7WDI/preview" allow='autoplay'></iframe>
            </div>
            <section className='flex flex-col absolute z-20 right-10 bottom-20'>
                {isActive && (
                    <div className='max-w-96 pb-10  p-4 rounded-xl bg-neutral-900'>
                        <h1 className=' font-sans font-bold'>Notas:</h1>
                        Segundo semestre Ingeniería Civil.
                    </div>
                )}

            </section>
            <button 
            onClick={() => setisActive(!isActive)} 
            className='absolute z-20 right-10 bottom-20 p-2 text-neutral-300 hover:text-white  rounded-full bg-neutral-900'>
                <IoMdMenu size={24} />
            </button>
        </main>
    )
}

export default Estatica