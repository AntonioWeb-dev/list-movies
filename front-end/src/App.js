import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import { GlobalStyle } from "./config/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
