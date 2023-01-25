import Header from "./components/layout/Header";
import Main from "./components/pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateWord from "./components/pages/CreateWord";
import CreateDay from "./components/pages/CreateDay";
import WordPage from "./components/pages/WordPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<WordPage />} />
          <Route path="/word" element={<CreateWord />} />
          <Route path="/day" element={<CreateDay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
