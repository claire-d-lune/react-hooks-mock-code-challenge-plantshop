import React, { useState } from "react";

function NewPlantForm({plants, setPlants}) {

  const [newPlant, setNewPlant] = useState(
    {
      name: "",
      image: "",
      price: 0
    })

  const handleNameChange = (e) => {
    const plantInfo = {...newPlant}
    plantInfo.name = e.target.value
    setNewPlant(plantInfo)
  }

  const handleImageChange = (e) => {
    const plantInfo = {...newPlant}
    plantInfo.image = e.target.value
    setNewPlant(plantInfo)
  }

  const handlePriceChange = (e) => {
    const plantInfo = {...newPlant}
    plantInfo.price = e.target.value
    setNewPlant(plantInfo)
  }

  // let configurationObject = {
  //   Method: "POST",
  //   Headers: {"Content-Type" : "application/json"},
  //   body: JSON.stringify(newPlant)

  // }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newPlant.name !== "" && newPlant.image !== "" && newPlant.price !== 0){
      console.log("Submitted!")
      setPlants([...plants, newPlant])
      //state change above, fetch below
      let configurationObject = {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newPlant)
      }

      console.log(configurationObject)

      fetch("http://localhost:6001/plants", configurationObject)
      .then(res => res.json())
      .then(data => console.log(data))

      return
    }
    console.log("All fields must be filled to be valid") 
  }


  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImageChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handlePriceChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
