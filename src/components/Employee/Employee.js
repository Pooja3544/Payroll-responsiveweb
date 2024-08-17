import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Employee.css';
import EmployeeNavBar from '../Employee/EmployeeNavbar';
import Employeesidebar from './Employeesidebar';
import LeaveApplication from './LeaveApplication';
import SalaryReport from '../SalaryReport';
import ImageSlider from '../ImageSlider';
import MyProfile from './Myprofile';
import EmployeeResignation from './EmployeeResignation';
import EmployeeSetting from './EmployeeSetting';
import Employeehelp from './Employeehelp';
import Employeelogout from './Employeelogout';
import RaiseTicket from './Employee Tickets/Raiseticket';
import Employeeclock from './Employeeclock';

const Employee = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swiped left
      navigateNextComponent();
    }
    if (touchStart - touchEnd < -150) {
      // Swiped right
      navigatePreviousComponent();
    }
  };

  const navigateNextComponent = () => {
    // Logic to navigate to the next component based on the current component
    const componentOrder = ['leave', 'salaryReports', 'myProfile', 'employeeresignation', 'employeesetting', 'employeehelp', 'employeelogout', 'raiseticket', 'clockin'];
    const currentIndex = componentOrder.indexOf(selectedComponent);
    const nextComponent = componentOrder[(currentIndex + 1) % componentOrder.length];
    setSelectedComponent(nextComponent);
  };

  const navigatePreviousComponent = () => {
    // Logic to navigate to the previous component based on the current component
    const componentOrder = ['leave', 'salaryReports', 'myProfile', 'employeeresignation', 'employeesetting', 'employeehelp', 'employeelogout', 'raiseticket', 'clockin'];
    const currentIndex = componentOrder.indexOf(selectedComponent);
    const previousComponent = componentOrder[(currentIndex - 1 + componentOrder.length) % componentOrder.length];
    setSelectedComponent(previousComponent);
  };

  return (
    <main>
      <EmployeeNavBar onButtonClick={handleButtonClick} />
      <ImageSlider />
      <div 
        className="employee-page" 
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove} 
        onTouchEnd={handleTouchEnd}
      >
        <Employeesidebar onButtonClick={handleButtonClick} />
        <div className="content">
          <Routes>
            <Route path="/leave-application" element={<LeaveApplication />} />
            <Route path="/salary-reports" element={<SalaryReport />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/employeeresignation" element={<EmployeeResignation />} />
            <Route path="/employeesetting" element={<EmployeeSetting />} />
            <Route path="/employeehelp" element={<Employeehelp />} />
            <Route path="/employeelogout" element={<Employeelogout />} />
            <Route path="/raiseticket" element={<RaiseTicket addTicket={addTicket} />} />
            <Route path="/clockin" element={<Employeeclock tickets={tickets} />} />
            <Route path="/" element={
              <div>
                <div className={`component ${selectedComponent === 'leave' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'leave' && <LeaveApplication />}
                </div>
                <div className={`component ${selectedComponent === 'salaryReports' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'salaryReports' && <SalaryReport />}
                </div>
                <div className={`component ${selectedComponent === 'myProfile' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'myProfile' && <MyProfile />}
                </div>
                <div className={`component ${selectedComponent === 'employeeresignation' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeeresignation' && <EmployeeResignation />}
                </div>
                <div className={`component ${selectedComponent === 'employeesetting' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeesetting' && <EmployeeSetting />}
                </div>
                <div className={`component ${selectedComponent === 'employeehelp' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeehelp' && <Employeehelp />}
                </div>
                <div className={`component ${selectedComponent === 'employeelogout' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeelogout' && <Employeelogout />}
                </div>
                <div className={`component ${selectedComponent === 'raiseticket' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'raiseticket' && <RaiseTicket addTicket={addTicket} />}
                </div>
                <div className={`component ${selectedComponent === 'clockin' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'clockin' && <Employeeclock tickets={tickets} />}
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Employee;
