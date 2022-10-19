import React, {useState, useEffect}from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plantsLibrary, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() =>{
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlants(data))
  },[])

  console.log(plantsLibrary.length)

  return (
    <div className="app">
      <Header />
      <PlantPage 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      plants={plantsLibrary}
      setPlants={setPlants}
      />
    </div>
  );
}

export default App;
