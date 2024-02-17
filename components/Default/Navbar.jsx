import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='select-none w-full p-4 flex justify-between bg-neutral-950'>
            <Link
            href={'/'}
            className='t text-body-bold'
            >WIKI</Link>
            <section className='flex justify-between'>
                <div>dd</div>
                <div>dd</div>
                <div>dd</div>
            </section>
        </nav>
    )
}

export default Navbar