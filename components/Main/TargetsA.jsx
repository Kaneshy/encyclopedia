'use client'

import Link from 'next/link'
import { useState } from 'react'

const TargetsA = ({value}) => {

    return (
        <section className='grid-a select-none '>
            {value.map((x, i) => {
                return (
                    <a
                        href={`${x.link}`}
                        key={i}
                        target='_blank'
                        className='flex flex-col bg-neutral-1000 p-3 rounded-xl border border-neutral-800 hover:border-neutral-50'>
                        <section>
                            <img src={x.imgUrl} alt="" />
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

export default TargetsA