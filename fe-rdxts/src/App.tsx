import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header, Footer } from './app/components/layouts'
import routes from './app/routes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {
            routes.map(r => <Route 
              path={r.path} 
              key={r.path} 
              element={<r.element />} 
            />)
          }
          <Route path="*" element={<h1>Sorry, couldn't find it :( </h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
