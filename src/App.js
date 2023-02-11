import "./App.css";
import "./components/index.css";
import Person from "./components/tours";
function App() {
  return (
    <div className="App">
      <main>

      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Person />
      </main>
    </div>
    
  );
}

export default App;
