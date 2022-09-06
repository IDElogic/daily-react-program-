import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./pages/Home/Home";
import PageNotFound from "../src/components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
