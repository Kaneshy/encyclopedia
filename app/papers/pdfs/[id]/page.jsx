import ButtonDesc from '@/components/Plane/ButtonDesc';
import { findPaperPdf } from '@/libs/actions/index.actions';


const PdfPage = async ({params}) => {

        const threads = await findPaperPdf({ value: params.id })
        console.log(threads, 'df')

    return (
        <main className='relative'>
            <div className=' w-full z-10  '>
                <iframe className='h-screen w-full' src={threads.link} allow='autoplay'></iframe>
            </div>
            <ButtonDesc value={threads.desc}/>
            
        </main>
    )
}

export default PdfPage

