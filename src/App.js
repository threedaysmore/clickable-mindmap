import "./App.css";
import Scrubs from "./components/Scrubs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Scrubs}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
