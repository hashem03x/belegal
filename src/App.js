import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/belegal" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
