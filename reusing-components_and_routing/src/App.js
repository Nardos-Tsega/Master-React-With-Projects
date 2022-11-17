import logo from "./assets/logo.svg";
import "./App.css";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile username="Minte-grace" />} />
          <Route
            path="/projects"
            element={<Projects username="Minte-grace" />}
          />
          <Route
            path="/projects/:name"
            element={<ProjectDetails username="Minte-grace" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
