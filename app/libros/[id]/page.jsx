'use server'
import {findbyCategorie } from '@/libs/actions/index.actions'
import React from 'react'

const LibrosById = async ({params}) => {

    const threads = await findbyCategorie({value:params.id})
    return (
        <main className='flex flex-col items-center justify-center w-full '>
            <h1 className='font-bold text-center p-4'>CATEGORIES</h1>
            <section className='grid-books select-none max-w-3xl  '>
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


