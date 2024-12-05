import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Body from "./components/Body";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useState, useEffect } from "react";
import Coordination from "./pages/Coordination";
import Registry from "./pages/Registry";
import Ticketry from "./pages/Ticketry";
import Engagement from "./pages/Engagement";
import Infographics from "./pages/Infographics";
import Playification from "./pages/Playification";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/body"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Body />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="coordination" element={<Coordination />} />
          <Route path="registry" element={<Registry />} />
          <Route path="ticketry" element={<Ticketry />} />
          <Route path="engagement" element={<Engagement />} />
          <Route path="infographics" element={<Infographics />} />
          <Route path="playification" element={<Playification />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
