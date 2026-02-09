import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  const [userEmailAddress, setUserEmailAddress] = React.useState(null);
  return (
    <div className="App">
      <div className="font-poppins w-full overflow-hidden relative body-bg">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage setUserEmailAddress={setUserEmailAddress} />} />
            <Route
              path="/welcome"
              element={
                <WelcomePage
                  userEmailAddress={userEmailAddress}
                  setUserEmailAddress={setUserEmailAddress}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
