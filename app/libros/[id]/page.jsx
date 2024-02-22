'use server'
import { findbyCategorie } from '@/libs/actions/index.actions'
import React from 'react'

const LibrosById = async ({ params }) => {

    const threads = await findbyCategorie({ value: params.id })
    return (
        <main className='flex flex-col items-center justify-center w-full '>

            <div className='flex flex-col gap-10'>
                <div className="  pt-8 text-center items-center flex flex-col gap-y-8">
                    <h1 className=" text-heading1-bold">MOST WATCHED</h1>
                    <div className="p-4 bg-neutral-950 rounded-xl text-neutral-400 max-w-xl  text-small-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate temporibus voluptatibus deleniti in modi, ducimus rerum dolor? Atque labore hic ullam facilis id quis rerum illo voluptatibus. Dicta, nulla!</div>
                </div>
                <div className='flex justify-center  '>
                    <img className='rounded-xl shadow-[0_20px_50px_rgba(111,_113,_230,_0.5)]' src="https://res.cloudinary.com/dh01ngdjo/image/upload/v1708402142/my-uploads/ra3p01t2w308bhedjhaa.gif" alt="" />
                </div>
            </div>

            <h1 className='font-bold text-center p-4'>CATEGORIES</h1>
            <section className='grid-books select-none max-w-4xl  '>
                {threads && threads.map((x, i) => {
                    return (
                        <a
                            href={`${x.link}`}
                            key={i}
                            target='_blank'
                            className='flex flex-col bg-neutral-1000 p-3 rounded-xl border border-neutral-800 hover:border-neutral-50'>
                            <section className='items-center flex justify-center'>
                                <img className='max-h-56' src={x.imgUrl} alt="" />
                            </section>
                            <section className='flex flex-col gap-y-2 p-2'>
                                <h1 className='text-body-bold '>{x.title} </h1>
                                <p className='text-small-semibold text-neutral-400'>{x.desc}</p>
                            </section>
                        </a>
                    )
                })}
            </section>
        </main>

    )
}

export default LibrosById


