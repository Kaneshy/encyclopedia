import React from 'react'

const Svelte = () => {

    const arrayA = [1,2,3,4,5,6]

  return (
    <div className='grid-a'>
        {arrayA.map((x, i)=> {
            return(
                <div key={i}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, provident sit labore est deleniti omnis exercitationem? Eos architecto impedit sunt quod omnis aliquid aut sit veritatis unde harum, exercitationem laborum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci optio quod temporibus dolor beatae nesciunt. Praesentium, quae est mollitia ratione odit ullam nihil. In, explicabo. Temporibus quisquam labore fugit ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore consectetur exercitationem, nemo omnis magni iusto tempora esse harum ab, voluptas sint, quis iure nobis labore ratione voluptatum itaque in.</div>
            )
        })}
    </div>
  )
}

export default Svelte