import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchTerm}) {

  const plantsInSearch = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  


  const plantCards = plantsInSearch.map((plant) => 
    <PlantCard 
    key={plant.id}
    id={plant.id} 
    name={plant.name} 
    image={plant.image}
    price={plant.price}/>
  )

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
