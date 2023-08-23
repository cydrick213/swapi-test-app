import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import LayoutHeader from "./components/LayoutHeader";
import IsAuthenticated from "./components/IsAuthenticated";
import { LoginPage } from './pages/Login';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route element={<LayoutHeader/>}>
                <Route
                    path="/"
                    element={
                        <IsAuthenticated>
                            <LoginPage />
                        </IsAuthenticated>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <IsAuthenticated>
                            <LoginPage />
                        </IsAuthenticated>
                    }
                />
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
