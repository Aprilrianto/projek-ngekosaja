import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../style/sidebar.css';
import { MdDashboard, } from "react-icons/md";  // Added MdPayment for 'Pembayaran'

const Sidebar_admin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navigateToOverview = () => {
        navigate('/dashboard_ulasan');
        setIsOpen(false);
    };



    const handleLogout = () => {
        // Log out logic here (e.g., clear session data, tokens)
        // After logging out, navigate to home page
        navigate('/');
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button 
                className="btn btn-primary d-lg-none toggle-btn"
                onClick={toggleSidebar}
            >
                <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="nav flex-column sidebar-nav">
                    <li className="nav-item">
                        <button 
                            onClick={navigateToOverview}
                            className={`nav-link ${location.pathname === '/dashboard_overview' ? 'active' : ''}`}
                        >
                            <MdDashboard/>
                            Ulasan
                        </button>
                    </li>
                    
                </ul>

                {/* Log Out Link Button */}
                <div className="sidebar-footer">
                    <Link 
                        to="/" 
                        className="btn btn-danger w-100"
                        onClick={handleLogout}
                    >
                        Log Out
                    </Link>
                </div>
            </div>

            <div 
                className={`sidebar-overlay ${isOpen ? 'show' : ''}`}
                onClick={toggleSidebar}
            ></div>
        </>
    );
};

export default Sidebar_admin;
