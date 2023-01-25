import Header from "./components/layout/Header";
import Main from "./components/pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateWord from "./components/pages/CreateWord";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/word" element={<CreateWord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
