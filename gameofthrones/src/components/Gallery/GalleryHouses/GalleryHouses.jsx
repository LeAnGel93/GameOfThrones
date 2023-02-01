import React from 'react';
import "./GalleryHouses.scss";

function GalleryHouses({list2}) {
  return (
    <div className='div-padre'>
    {list2.map((houses, index) => (
        <figure className='card' key={index}>
            <img src={houses.logoURL} alt="houses"/>;
          <div> <p>{houses.name}</p>
           <p>{houses.sigil}</p></div> ; 
        </figure>
    ) )}
    </div>
  )
}

export default GalleryHouses