'use client'
import { showDialog } from '@/actions/index.actions'
import PopupComponent from '@/components/Default/Popup'
import { bestwebsites, ownProyects } from '@/constants/mainIndex'
import TargetsA from "@/components/Main/TargetsA";
import { useEffect, useState } from 'react';

const GalleryPageId = ({params}) => {

    const [first, setFirst] = useState([])
    
    useEffect(() => {
        switch (params.id) {
          case 'pagesgrid':
            setFirst(ownProyects);
            break;
          case 'bestwebsites':
            setFirst(bestwebsites);
            break;
          default:
            // Handle other cases if needed
            break;
        }
      }, []);
    
    return (
        <main className=' max-w-header flex flex-col gap-10 select-none'>
            <div className="max-w-header" >
                <div className="  pt-8 text-center flex flex-col gap-y-8">
                    <h1 className=" text-heading1-bold">MOST WATCHED</h1>
                    <div className="text-neutral-400 text-small-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate temporibus voluptatibus deleniti in modi, ducimus rerum dolor? Atque labore hic ullam facilis id quis rerum illo voluptatibus. Dicta, nulla!</div>
                </div>
            </div>
            <div className='flex justify-center gap-4  '>
                <div className='bg-white border border-black hover:border-white text-black p-2 rounded-md'>
                    <PopupComponent value={{ title: 'blue', desc: 'red' }} stylesV={'black'} />
                </div>
                <div className='bg-neutral-900 border  border-black hover:border-white   p-2 rounded-md'>
                    <PopupComponent value={{ title: 'white', desc: 'black' }} stylesV={'white'} />
                </div>
            </div>
            <div className='flex justify-center  '>
                <img className='rounded-xl shadow-[0_20px_50px_rgba(111,_113,_230,_0.5)]' src="https://res.cloudinary.com/dh01ngdjo/image/upload/v1708140053/FASHION/shinobu_hfkcwc.gif" alt="" />
            </div>
            <h1 className="mt-10 text-center text-body-bold">CATEGORIES</h1>
            <TargetsA value={first} />

        </main>
    )
}

export default GalleryPageId