'use client'
import { findAllBooks } from "@/libs/actions/index.actions"
import { useEffect, useState } from "react"


const BooksTarget =  ({value}) => {
    
    const [data, setdata] = useState([])
    
    useEffect(() => {
      const fetchdata = async () => {
        const threads = await findAllBooks()
        setdata(threads)
        console.log(threads)
      }
      fetchdata()
    }, [])

    
    

    return (
        <section className='grid-books select-none '>
            {data && data.map((x, i) => {
                return (
                    <a
                        href={`${x.link}`}
                        key={i}  
                        target='_blank'
                        className='flex flex-col bg-neutral-1000 p-3 rounded-xl border border-neutral-800 hover:border-neutral-50'>
                        <section className='items-center flex justify-center'>
                            <img className='max-w-44'  src={x.imgUrl} alt="" />
                        </section>
                        <section className='flex flex-col gap-y-2 p-2'>
                            <h1 className='text-body-bold '>{x.title} </h1>
                            <p className='text-small-semibold text-neutral-400'>{x.desc}</p>
                        </section>
                    </a>
                )
            })}
        </section>
    )
}

export default BooksTarget