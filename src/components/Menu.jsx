import React from 'react'
import {data} from "../restApi.json"

const Menu = () => {
  return (
   <>
   <section className='menu' id='menu'>
    <div className="container">
        <div className="heading_section">
            <h1 className='heading'>
            POPULAR DISHES
            </h1>
            <p>Don't get stuck in a dinner rut: whether you're looking for a new twist on baked chicken, an easy pasta to make on repeat, or a one-pot recipe that won’t leave you with a mountain of dishes, we've got all the fun weeknight dinner ideas you could ever need.</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map( element =>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }

        </div>
    </div>

   </section>
   </>
  )
}

export default Menu