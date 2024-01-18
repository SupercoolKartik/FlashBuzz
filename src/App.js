import "./App.css";
import NavBar from "./COMPONENTS/NavBar.js";
import News from "./COMPONENTS/News.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let myApiKey = process.env.REACT_APP_API_KEY;
  console.log("api key", myApiKey);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <News pageSize={9} myApiKey={myApiKey} category="general" />
            }
          />
          <Route
            path="/business"
            element={
              <News pageSize={9} myApiKey={myApiKey} category="business" />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News pageSize={9} myApiKey={myApiKey} category="entertainment" />
            }
          />
          <Route
            path="/general"
            element={
              <News pageSize={9} myApiKey={myApiKey} category="general" />
            }
          />
          <Route
            path="/health"
            element={
              <News pageSize={9} myApiKey={myApiKey} category="health" />
            }
          />
          <Route
            path="/science"
            element={
              <News pageSize={9} myApiKey={myApiKey} category="science" />
            }
          />
          <Route
            path="/sports"
            element={
              <News pageSize={9} myApiKey={myApiKey} category="sports" />
            }
          />
          <Route
            path="/technology"
            element={
              <News pageSize={9} myApiKey={myApiKey} category="technology" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
