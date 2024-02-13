import "./App.css";
import NavBar from "./COMPONENTS/NavBar.js";
import News from "./COMPONENTS/News.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

//After (npm install --save react-top-loading-bar)
import LoadingBar from "react-top-loading-bar";

function App() {
  let myApiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(5);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={9}
                myApiKey={myApiKey}
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={9}
                myApiKey={myApiKey}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={9}
                myApiKey={myApiKey}
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                pageSize={9}
                myApiKey={myApiKey}
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={9}
                myApiKey={myApiKey}
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={9}
                myApiKey={myApiKey}
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={9}
                myApiKey={myApiKey}
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={9}
                myApiKey={myApiKey}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
