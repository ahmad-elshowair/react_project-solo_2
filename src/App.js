import { Navbar } from "./components/Navbar";
import { Trip } from "./components/Trip";
import { data } from "./data";


const trips = data.map(trip =>{
  return(
    <Trip 
      key={trip.id}
      {...trip}
    />
  );
});
function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="trips">
        {trips}
      </section>
    </div>
  );
}

export default App;
