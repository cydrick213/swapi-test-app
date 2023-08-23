import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import LayoutHeader from "./components/LayoutHeader";
import IsAuthenticated from "./components/IsAuthenticated";
import RequireAuth from "./components/RequireAuth";

import LoginPage from './pages/Login';
import HomePage from "./pages/Home";
import CharacterPage from "./pages/Character";

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
                <Route
                    path="/home-page"
                    element={
                        <RequireAuth>
                            <HomePage />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/people-page"
                    element={
                        <RequireAuth>
                            <CharacterPage />
                        </RequireAuth>
                    }
                />
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
