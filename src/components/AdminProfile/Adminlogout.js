import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Adminlogout.css';

const Logout = () => {
    const [logoutSuccess, setLogoutSuccess] = useState(false);
    const navigate = useNavigate();

    const handleConfirmLogout = () => {
        // Implement logout logic here
        console.log('Logging out...'); // Placeholder for actual logout logic
        setLogoutSuccess(true);
        setTimeout(() => {
            navigate('/'); // Redirect to home page after a delay
        }, 2000); // 2 second delay before redirecting
    };

    const handleTouchStart = (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
        if (this.touchStartX - this.touchEndX > 150) {
            // Swiped left - you can customize the action here
            handleConfirmLogout();
        }
        if (this.touchStartX - this.touchEndX < -150) {
            // Swiped right - you can customize the action here
            navigate('/');
        }
    };

    return (
        <div 
            className="logout-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="logout-content">
                <h2 className='hgj'>Confirm Logout</h2>
                <p>Are you sure you want to logout?</p>
                <div className="button-container">
                    <button className="confirm-button" onClick={handleConfirmLogout}>
                        Logout
                    </button>
                    <button className="bck-button">
                        <Link to="/" className="link-button">Cancel</Link>
                    </button>
                </div>
                {logoutSuccess && <p className="logout-success">Logout successful!</p>}
            </div>
        </div>
    );
};

export default Logout;
