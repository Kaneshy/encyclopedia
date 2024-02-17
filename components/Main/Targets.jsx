'use client'
import { maingrid } from '@/constants/mainIndex'
import Link from 'next/link'
import { useState } from 'react'

const TargetsPage = () => {

    return (
        <section className='grid-a select-none '>
            {maingrid.map((x, i) => {
                return (
                    <Link
                        href={`/gallery`}
                        key={i}
                        className='flex flex-col bg-neutral-950 p-3 rounded-xl border border-neutral-800 hover:border-neutral-50'>
                        <section>
                            <img src={x.imgUrl} alt="" />
                        </section>
                        <section className='flex flex-col gap-y-2 p-2'>
                            <h1 className='text-body-bold '>{x.title} </h1>
                            <p className='text-small-semibold text-neutral-400'>{x.desc}</p>
                        </section>
                    </Link>
                )
            })}
        </section>
    )
}

export default TargetsPage