import React, { useState } from "react";
import Login from "./components/login"; // Adjust path if needed
import  NetflixSeries  from "./components/NetflixSeries"; // Adjust path if needed

function App() {
  // This state tracks if we are logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to switch from Login to Main Page
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        // Show this after login
        <NetflixSeries />
      ) : (
        // Show this first. We pass the function as a 'prop'
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;