import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            ></Route>

            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                />
              }
            ></Route>

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              }
            ></Route>

            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              }
            ></Route>

            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                />
              }
            ></Route>

            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              }
            ></Route>

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}
export default App;