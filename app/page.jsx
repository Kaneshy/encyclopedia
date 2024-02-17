import TargetsPage from "@/components/Main/Targets";

export default function Home() {
  return (
    <main>
      <div className="max-w-header flex flex-col gap-10" >
        <div className="  pt-8 text-center flex flex-col gap-y-8">
          <h1 className=" text-heading1-bold">MOST WATCHED</h1>
          <div className="text-neutral-400 text-small-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate temporibus voluptatibus deleniti in modi, ducimus rerum dolor? Atque labore hic ullam facilis id quis rerum illo voluptatibus. Dicta, nulla!</div>
        </div>
        <div className='flex justify-center  '>
          <img className='rounded-xl shadow-[0_20px_50px_rgba(111,_113,_230,_0.5)]' src="https://res.cloudinary.com/dh01ngdjo/image/upload/v1708120673/FASHION/douma-demon-slayer_xlslp4.gif" alt="" />
        </div>
        <h1 className="text-center text-body-bold">CATEGORIES</h1>
        <TargetsPage />
      </div>
    </main>
  );
}
