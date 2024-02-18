import { NavLink } from "react-router-dom";
import Switch from "../Switch/Switch";

const SidebarRight = () => {    
    return(
        <div className="main-sidebar-right">
            <div className="sidebar-right-items">
                <div className="profile-container">
                    <img src="assets/images/placeholder.svg" alt="avatar" />
                    <h2 className="profile-heading">John Doe</h2>
                </div>
                <Switch/>
                <div className="profile-actions-container">
                    <NavLink to="/notifications" className="icon-notification"></NavLink>
                    <NavLink to="/blocklist" className="icon-block"></NavLink>
                    <NavLink to="/settings" className="icon-setting"></NavLink>
                </div>
                <div className="profile-actions-buttons-container">
                    <NavLink to="" className="btn-right-sidebar">Edit Profile <i className="icon-edit" /></NavLink>
                    <NavLink to="" className="btn-right-sidebar">Followers  <span>1260</span></NavLink>
                    <NavLink to="" className="btn-right-sidebar">Points <i className="icon-star" />18</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SidebarRight;