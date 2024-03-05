import TargetsPage from "@/components/Main/Targets";
import { maingrid } from '@/constants/mainIndex'
import { Startdbinit } from "@/libs/actions/index.actions";


export default async function Home() {

  const startDB = await Startdbinit()

  return (
    <main>
      <div className="max-w-header flex flex-col gap-10" >
        <div className="  pt-8 text-center items-center flex flex-col gap-y-8">
          <h1 className=" text-heading1-bold">MOST WATCHED</h1>
          <div className="p-4 bg-neutral-950 rounded-xl text-neutral-400 max-w-xl  text-small-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate temporibus voluptatibus deleniti in modi, ducimus rerum dolor? Atque labore hic ullam facilis id quis rerum illo voluptatibus. Dicta, nulla!</div>
        </div>
        <div className='flex justify-center  '>
          <img className='rounded-xl shadow-[0_20px_50px_rgba(111,_113,_230,_0.5)]' src="https://res.cloudinary.com/dh01ngdjo/image/upload/v1708120673/FASHION/douma-demon-slayer_xlslp4.gif" alt="" />
        </div>
        <h1 className="mt-10 text-center text-body-bold">CATEGORIES</h1>
        <TargetsPage value={maingrid} />
      </div>
    </main>
  );
}
