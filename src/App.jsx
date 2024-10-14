import './App.css'
import NavBar from './Components/Nav.jsx'
import Home from './Pages/Home.jsx';
import Footer from './Components/footer.jsx';
import NotFound from "./Pages/NotFound.jsx";
import Auth from './Pages/auth.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
// color_stop
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insight" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/solutions" element={<NotFound />} />          
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>{" "}
        <Footer />
      </Router>
    </>
  );
}

export default App
