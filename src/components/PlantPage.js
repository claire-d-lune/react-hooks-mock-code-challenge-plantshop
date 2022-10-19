import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, searchTerm, setSearchTerm, setPlants}) {
  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
