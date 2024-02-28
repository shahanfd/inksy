import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/theme-context';
import Login from './components/auth/Login/Login';
import Home from './components/Home/Home';
import ForgotPassword from './components/auth/ForgotPassword/ForgotPassword'
import PrivateRoute from './utils/PrivateRoutes';
import Notification from './components/Notification/Notification'
import Admin from './layouts/Admin';
import './styles/main.scss';
import BlockList from './components/BlockList/BlockList';
import Settings from './components/settings/Settings';
import Privacy from './components/settings/Privacy';
import Payment from './components/settings/Payment';
import Password from './components/settings/Password';
import CategoriesSummary from './components/Categories/CategoriesSummary';
import Categories from './components/Categories/Categories';
import Journals from './components/Journals/Journals';
import JournalDetail from './components/JournalDetail/JournalDetail';

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App theme-${theme}`}>
      <div>
        <div className="g-main">
          <Router>
            <Routes>
              <Route element={<PrivateRoute />}>

                <Route element={<Admin><Home/></Admin>} path="/" exact ></Route>
                <Route element={<Admin><Home/></Admin>} path="/home" ></Route>
                <Route element={<Admin><Journals/></Admin>} path="/journals" ></Route>
                <Route element={<Admin><JournalDetail/></Admin>} path="/journals/:id" ></Route>
                <Route element={<Admin><CategoriesSummary/></Admin>} path="/categories/summary" ></Route>
                <Route element={<Admin><Categories/></Admin>} path="/categories" ></Route>
                <Route element={<Admin><Notification/></Admin>} path="/notifications" ></Route>
                <Route element={<Admin><BlockList/></Admin>} path="/blocklist" ></Route>
                <Route element={<Admin><Settings/></Admin>} path="/settings" ></Route>
                <Route element={<Admin><Settings><Privacy/></Settings></Admin>} path="/settings/privacy" ></Route>
                <Route element={<Admin><Settings><Payment/></Settings></Admin>} path="/settings/payment" ></Route>
                <Route element={<Admin><Settings><Password/></Settings></Admin>} path="/settings/password" ></Route>

              </Route>
              <Route element={<Login/>} path="/login" />
              <Route element={<ForgotPassword/>} path="/forgot" />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
