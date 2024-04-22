import "./App.css";
import TVShowCharacters from "./components/TVShowCharacters";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={TVShowCharacters}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
