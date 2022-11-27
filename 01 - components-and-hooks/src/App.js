import List from "./components/List";

function App() {
  return (
    <div>
      <div>
        <nav className="navbar sticky-top navbar-light bg-dark">
          <h1 style={{ margin: "auto" }} className="navbar-brand text-light">
            Rick and Morty
          </h1>
          +{" "}
        </nav>
        <div className="container">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
