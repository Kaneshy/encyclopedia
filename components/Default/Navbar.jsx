import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='select-none w-full p-4 flex justify-between bg-neutral-950'>
            <Link
            href={'/'}
            className='t text-body-bold'
            >WIKI</Link>
            <section className='flex gap-6 justify-between'>
               <Link href={'/Upload'}>UPLOAD</Link>
            </section>
        </nav>
    )
}

export default Navbar