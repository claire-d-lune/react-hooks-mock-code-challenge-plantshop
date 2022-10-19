import React, { useState } from "react";

function PlantCard({id, name, image, price}) {
  
  const [inStock, setInStock] = useState(true)
  const [priceNow, setPrice] = useState(price)


  const handleClick = () => {
    setInStock(false)
  }

  const handleDelete = () => {
    fetch("http://localhost:6001/plants/"+ id, {method: "DELETE"})
  }

  const handleOnChange = (e) => {
    setPrice(e.target.value)
    let configurationObject = {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        price : e.target.value
      })
    }
    fetch("http://localhost:6001/plants/"+ id, configurationObject)
  }



  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <form>
        <input onChange={handleOnChange} value={priceNow} type="number" name="price" placeholder={priceNow} />
      </form >
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
