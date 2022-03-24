import { Navbar } from "./components/Navbar";
import { Trip } from "./components/Trip";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="trips">
        <Trip image="mount-fuji.png"/>
      </section>
    </div>
  );
}

export default App;
