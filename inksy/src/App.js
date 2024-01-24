import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/theme-context';
import Login from './components/auth/Login/Login';
import Home from './components/Home/Home';
import './styles/main.scss';
import PrivateRoute from './utils/PrivateRoutes';

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className="App">
      <div  className={`theme-${theme}`}>
        <div className="g-main">
          <Router>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route element={<Home/>} path="/" exact />
                <Route element={<Home/>} path="/home" />
              </Route>
              <Route element={<Login/>} path="/login" />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
