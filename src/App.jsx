import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

import EventDetails from "./pages/EventDetails";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SeatSelection from "./pages/SeatSelection";
import QRTicket from "./pages/QRTicket";

function Home() {
  return (
    <>
      <Hero />
      <Events />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/evento"
          element={<EventDetails />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/seats"
          element={<SeatSelection />}
        />

        <Route
          path="/ticket"
          element={<QRTicket />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;