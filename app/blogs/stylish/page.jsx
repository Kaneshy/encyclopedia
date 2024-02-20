import React from 'react'

const Stylish = () => {
  return (
    <main className=" bg-[#c39c6e] p-10 min-h-screen text-gray-800 font-sans leading-normal tracking-normal">
      <h1 className='text-center t text-heading2-bold font-bold'>Familia Medici</h1>


      <div className="container max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">La Familia Medici: Mecenas y Poder en el Renacimiento Italiano</h1>

        <p className="mb-4">La familia Medici, una de las dinastías más influyentes en la historia de Italia, desplegó su poder y mecenazgo durante el Renacimiento, dejando una marca indeleble en la política, la economía y la cultura de la época. Originaria de Florencia, esta familia desempeñó un papel crucial en la transformación de la ciudad en un centro cultural y artístico durante los siglos XV y XVI</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Orígenes y Ascenso</h2>
          <p className="mb-4">La familia Medici emergió en el siglo XV como comerciantes acaudalados. Su riqueza y astucia comercial les permitieron establecerse como una fuerza política en Florencia. Cosimo de Medici, patriarca de la familia, consolidó su posición política y financiera, convirtiéndose en el gobernante de facto de la ciudad. A través de alianzas matrimoniales estratégicas y un manejo inteligente de las finanzas, los Medici aseguraron su posición en la cima de la sociedad florentina.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Mecenazgo Cultural</h2>
          <p className="mb-4">La familia Medici fue famosa por su mecenazgo cultural, siendo benefactores de algunos de los artistas y pensadores más destacados del Renacimiento. Lorenzo de Medici, conocido como "el Magnífico", transformó su corte en un centro intelectual donde florecieron las artes y las ciencias. Patrocinaron a artistas como Botticelli, Leonardo da Vinci y Miguel Ángel, así como a escritores y filósofos como Marsilio Ficino y Pico della Mirandola. Este mecenazgo contribuyó significativamente al florecimiento del Renacimiento y al desarrollo del Humanismo.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Poder Político</h2>
          <p className="mb-4">Aunque los Medici gobernaron Florencia de manera indirecta, su influencia política fue innegable. A través de alianzas diplomáticas y maniobras políticas, la familia aseguró la estabilidad en la ciudad y contribuyó a la consolidación de la Italia renacentista. Sin embargo, también enfrentaron períodos de exilio y desafíos políticos, reflejando la complejidad de la política florentina en esa época.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Banco y Economía</h2>
          <p className="mb-4">La fortuna de los Medici se basó en parte en su astucia financiera y en la gestión de un banco exitoso. La familia diversificó sus inversiones y estableció sucursales en toda Europa, consolidando su posición como una de las familias más ricas de la época. Esta prosperidad económica no solo benefició a los Medici, sino que también contribuyó al auge cultural de Florencia.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Declive y Legado</h2>
          <p className="mb-4">A pesar de su poder e influencia, la fortuna de los Medici disminuyó con el tiempo. Las tensiones políticas y las luchas internas debilitaron su posición, y la última rama de la familia se extinguió en el siglo XVIII. A pesar de su declive, el legado de los Medici perdura a través de las obras de arte, arquitectura y logros culturales que patrocinaron. Su contribución al Renacimiento sigue siendo una parte fundamental de la historia italiana y europea</p>
        </section>

        <p className="mb-4">En conclusión, la familia Medici desempeñó un papel fundamental en la configuración del Renacimiento italiano, destacando tanto en el ámbito político como en el cultural. Su mecenazgo generoso y su visión influyeron en el desarrollo de la sociedad florentina y dejaron un legado duradero que sigue siendo admirado y estudiado hasta el día de hoy</p>
      </div>

      <div className=' flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-bold mb-4">Documentales</h2>
        <div className='flex flex-col gap-10'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yykTnnYbTio?si=_9W7iD7ogtTciWfj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mxBpA6Vv8t0?si=zN7KjszP6923091p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BB2gFuvDz1o?si=Zt-CFZX_4cS6Odec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/n3zZAAUXSYc?si=5fd5zf3NWUWgLL20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

    </main>
  )
}

export default Stylish