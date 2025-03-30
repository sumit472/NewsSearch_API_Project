import React from 'react'

const Card = ({ data }) => {

  return (
    <>

      {!data ? "" : data.map((item, idx) => (

        <div className='flex border border-black rounded-lg' key={idx}>
          <div className="card bg-base-100 w-96 shadow-sm ">
            <figure className="px-5 pt-5">
              <img
                src={item.urlToImage}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions">

              </div>
            </div>
            <button className="btn btn-primary" onClick={() => window.open(item.url)}>Read More</button>
          </div>

        </div>

      ))}
    </>
  )
}

export default Card

//"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"