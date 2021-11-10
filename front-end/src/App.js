import dotenv from "dotenv";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import { GlobalStyle } from "./config/GlobalStyle";
dotenv.config();

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
