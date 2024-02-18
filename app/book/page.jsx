import React from 'react'


const BookPage = () => {
    return (
        <div className='flex flex-col gap-16 mt-10'>
            <div className='flex gap-10 flex-col items-center justify-center'>
                <h1 className='t text-heading1-bold'>Emaze</h1>
                <p className='t text-body-regular '>Puedes desactivar los controles y ajustar reproduccion automática de esta manera se remueve la marca de agua</p>
                <div className='flex justify-center gap-4  '>
                    <div className='px-4 bg-white border border-black hover:border-white text-black p-2 rounded-md'>
                        <a href="https://www.emaze.com/?emazehome=1" target='_blank'>
                            Visitar
                        </a>
                    </div>
                    <div className='px-4 bg-neutral-900 border  border-black hover:border-white   p-2 rounded-md'>
                        Visitar
                    </div>
                </div>
                <iframe src="https://app.emaze.com/@ALLCTTFLW/gallery?autoplay&hidebuttons" width="960px" height="540px" seamless webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                <p>Es posible activar los controles para controlar la presentación con marca de agua</p>
                <iframe src="https://app.emaze.com/@ALLCTTFLW/gallery" width="960px" height="540px" seamless webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

            </div>

            <div className='flex gap-10 flex-col items-center justify-center'>
                <h1 className='t text-heading1-bold'>Canvas</h1>
                <p className='t text-body-regular '>Puedes desactivar los controles y ajustar reproduccion automática de esta manera se remueve la marca de agua</p>
                <div className='flex justify-center gap-4  '>
                    <div className='px-4 bg-white border border-black hover:border-white text-black p-2 rounded-md'>
                        <a href="https://www.canva.com/" target='_blank'>
                            Visitar
                        </a>
                    </div>
                    <div className='px-4 bg-neutral-900 border  border-black hover:border-white   p-2 rounded-md'>
                        Visitar
                    </div>
                </div>
                <div
                    style={{
                        maxWidth:'1200px',
                        position: 'relative',
                        width: '100%',
                        height: 0,
                        paddingTop: '77.2727%',
                        paddingBottom: 0,
                        marginTop: '1.6em',
                        marginBottom: '0.9em',
                        overflow: 'hidden',
                        willChange: 'transform'
                    }}
                >
                    <iframe loading="lazy"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            border: 'none',
                            padding: 0,
                            margin: 0
                        }}
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF9Ei8f5hA&#x2F;NgbxE-z3XIgD1NsDMQfDnA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>

                </div>

            </div>


        </div>


    )
}

export default BookPage