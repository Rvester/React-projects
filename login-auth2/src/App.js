import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Register from "./Register";

function App() {
  const [user, setUser] = useState(false);

  let routes;

  if (user) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <div className="app">
      <Navbar user={user} setUser={setUser} />
      {routes}
    </div>
  );
}

export default App;
