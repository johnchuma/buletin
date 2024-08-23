import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import Layout from "./layouts/layout";
import AudioPage from "./pages/audioPage";
import HoverPage from "./pages/hoverPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/video" element={<NewsPage />} />
          <Route path="/news/audio" element={<AudioPage />} />
          <Route path="/news/hover" element={<HoverPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
