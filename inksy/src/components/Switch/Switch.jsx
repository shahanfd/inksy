import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <div className="theme-switch-wrapper">
      {/* <span className='theme-status'>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
      <div className="switch-content">    
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>          
          <label className="switch">            
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <span className="slider round"></span>                      
            </label>

          </div>
        </div>
      </div> */}
      <div className="form-check form-switch p-0 d-flex align-items-center justify-content-between">
        <label className="form-check-label theme-status">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
        <input className="form-check-input" type="checkbox" onChange={handleThemeChange} checked={theme === 'dark'} name="theme-switch"/>
      </div>
    </div>
  );
};

export default Header;