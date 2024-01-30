import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
