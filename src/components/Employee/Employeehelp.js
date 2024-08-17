import React from 'react';
import './Employeehelp.css'; // Updated the CSS file name
import { useNavigate } from 'react-router-dom';
import { IoReturnDownBack } from "react-icons/io5";

const EmployeeHelp = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="employee-help-menu">
            <h2 className='employee-help-title'>Help Menu</h2>
            <p>Contact Information:</p>
            <div className="employee-help-contact-info">
                <ul className="employee-help-list">
                    <li className="employee-help-list-item">Company Email: company@example.com</li>
                    <li className="employee-help-list-item">HR Email: hr@example.com</li>
                    <li className="employee-help-list-item">Manager Email: manager@example.com</li>
                    <li className="employee-help-list-item">Team Leader Email: teamleader@example.com</li>
                </ul>
            </div>
            <button className="employee-help-back-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default EmployeeHelp;
