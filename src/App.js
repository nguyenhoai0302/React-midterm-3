import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App () {
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await axios.get("http://api.github.com/users");
        console.log("Git hub users:" , response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>GitHub Users Data</h1>
      </div>
    </div>
  );
}

export default App;