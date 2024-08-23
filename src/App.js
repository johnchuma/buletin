import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import Layout from "./layouts/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:name" element={<NewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
