import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';

// Import Pages
import Home from "./Containers/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
