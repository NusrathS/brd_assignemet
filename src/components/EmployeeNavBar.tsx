import React, { useState } from 'react';
import './EmployeeNavBar.css';

const EmployeeNavBar: React.FC = () => {
  // State to control visibility of main menus and submenus
  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMainMenu = (menu: string) => {
    setActiveMainMenu((prev) => (prev === menu ? null : menu));
    setActiveSubMenu(null); // Reset submenus when switching main menus
  };

  const toggleSubMenu = (submenu: string) => {
    setActiveSubMenu((prev) => (prev === submenu ? null : submenu));
  };

  return (
    <nav className="employee-navbar">
      <ul className="navbar-list">
        <li onClick={() => toggleMainMenu('self')}>Self Related</li>
        <li onClick={() => toggleMainMenu('project')}>Project Related</li>
        <li onClick={() => toggleMainMenu('organization')}>Organization Related</li>
        <li>Others</li>
      </ul>

      {/* Self Related Submenu */}
      {activeMainMenu === 'self' && (
        <div className="submenu">
          <ul>
            <li onClick={() => toggleSubMenu('view')}>a. View</li>
            <li>b. Create / Update</li>
          </ul>

          {/* View Submenu for Self Related */}
          {activeSubMenu === 'view' && (
            <ul className="nested-submenu">
              <li>i. Personal Details</li>
              <li onClick={() => toggleSubMenu('attendance')}>ii. Attendance</li>
              <li>iii. (Applied) Leave Status</li>
              <li onClick={() => toggleSubMenu('leaveBalance')}>iv. Leave Balance</li>
              <li onClick={() => toggleSubMenu('payroll')}>v. Payroll</li>
              <li onClick={() => toggleSubMenu('travelPlans')}>vi. Business Travel Plans</li>
              <li onClick={() => toggleSubMenu('expenses')}>vii. Expenses and Settlements</li>
              <li>viii. HR Book</li>
            </ul>
          )}

          {/* Nested Submenus for Self Related */}
          {activeSubMenu === 'attendance' && (
            <ul className="nested-submenu">
              <li>1. Given Month</li>
              <li>2. Current Month</li>
              <li>3. Given Date Range</li>
            </ul>
          )}
          {activeSubMenu === 'leaveBalance' && (
            <ul className="nested-submenu">
              <li>1. CL</li>
              <li>2. Medical Leave</li>
              <li>3. Compensatory Off</li>
              <li>4. Earned Leave</li>
              <li>5. Others</li>
            </ul>
          )}
          {activeSubMenu === 'payroll' && (
            <ul className="nested-submenu">
              <li>1. Given Month</li>
              <li>2. Month Range</li>
            </ul>
          )}
          {activeSubMenu === 'travelPlans' && (
            <ul className="nested-submenu">
              <li>1. Given Month</li>
              <li>2. Month Range</li>
            </ul>
          )}
          {activeSubMenu === 'expenses' && (
            <ul className="nested-submenu">
              <li>1. Given Month</li>
              <li>2. Month Range</li>
              <li>3. Travel wise</li>
            </ul>
          )}
        </div>
      )}

      {/* Project Related Submenu */}
      {activeMainMenu === 'project' && (
        <div className="submenu">
          <ul>
            <li onClick={() => toggleSubMenu('projectView')}>a. View</li>
            <li onClick={() => toggleSubMenu('projectEdit')}>b. Edit / Add / Update</li>
          </ul>

          {activeSubMenu === 'projectView' && (
            <ul className="nested-submenu">
              <li>i. Assigned Projects</li>
              <li>ii. Assigned Tasks of a Given Project</li>
              <li>iii. Project Team Members</li>
            </ul>
          )}
          {activeSubMenu === 'projectEdit' && (
            <ul className="nested-submenu">
              <li>i. Project Time Sheet</li>
            </ul>
          )}
        </div>
      )}

      {/* Organization Related Submenu */}
      {activeMainMenu === 'organization' && (
        <div className="submenu">
          <ul>
            <li onClick={() => toggleSubMenu('orgView')}>a. View</li>
            <li>b. Edit</li>
          </ul>

          {activeSubMenu === 'orgView' && (
            <ul className="nested-submenu">
              <li>i. View Org. Structure</li>
              <li>ii. View Division / Department / Section Level Team Members</li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default EmployeeNavBar;
