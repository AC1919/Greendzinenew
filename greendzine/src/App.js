import React, { useState } from 'react';
import Group3 from './assests/Group3.png';
import moptrologo from './assests/moptrologo.png';
import Group46 from './assests/Group46.png';
import homeIcon from './assests/homeIcon.png'; 
import userIcon from './assests/userIcon.png'; 


const employeesData = [
  { id: 1, name: 'Arjun', dob: '16-11-2000', role: 'Software Engineer' },
  { id: 2, name: 'Mahesh', dob: '15-01-2000', role: 'Web Developer' },
  
];

const Homepage = ({ setSelectedEmployee }) => {
  const [productivityData] = useState([
    { day: 'Productivity on Monday', percentage: 4 },
    { day: 'Productivity on Tuesday', percentage: 92 },
    { day: 'Productivity on Wednesday', percentage: 122 },
    { day: 'Productivity on Thursday', percentage: 93 },
    { day: 'Productivity on Friday', percentage: 89 },
    { day: 'Productivity on Saturday', percentage: 98 },
  ]);

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <img src={moptrologo} alt="Icon" style={{ width: '100px', marginBottom: '20px' }} />
        <br />
      </div>
      <div style={{ marginTop: '20px', color: 'white', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <h3>Employee Productivity Dashboard</h3>
        {productivityData.map((item) => (
          <div key={item.day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
              <p>{item.day}</p>
              <p style={{ color: 'green' }}>{item.percentage}%</p>
            </div>
            <div style={{ width: '100px', height: '10px', backgroundColor: 'lightgray', borderRadius: '5px', position: 'relative', marginLeft: '-160px' }}>
              <div style={{ width: `${item.percentage}%`, height: '100%', backgroundColor: 'green', borderRadius: '5px' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EmployeeListDropdown = ({ employees, setSelectedEmployee }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ width: '371px', marginBottom: '800px', marginTop: '-270px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'black', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <img src={moptrologo} alt="Icon" style={{ marginBottom: '1px', marginTop: '600px', color: 'white', top: '104px', right: '500px', width: '71px', height: '70px' }} />
      <br />
      <br />
      <input
        type="text"
        placeholder="Search with name           🔍"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '1px', borderRadius: '12px', padding: '5px', color: 'black' }}
      />
      {filteredEmployees.map((employee, index) => (
        <div key={employee.id} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => setSelectedEmployee(employee)}>
          <EmployeeCard employee={employee} index={index + 1} />
        </div>
      ))}
    </div>
  );
};

const EmployeeDetailsDropdown = ({ employee }) => {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'black', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <EmployeeCard employee={employee} />
      <div style={{ marginTop: '20px' }}></div> {/* Spacer */}
      <img src={moptrologo} alt="Icon" style={{ marginBottom: '1px', marginTop: '400px', color: 'white', top: '104px', right: '500px', width: '71px', height: '70px' }} />
      {employeesData.map((employee, index) => (
        <div key={employee.id} style={{ marginBottom: '10px' }}>
          <EmployeeCard employee={employee} index={index + 1} />
        </div>
      ))}
    </div>
  );
};

const EmployeeCard = ({ employee, index }) => {
  return (
    <div style={{ marginTop: '70px', backgroundColor: '#333', padding: '15px', borderRadius: '10px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '5px', right: '5px', borderRadius: '50%', backgroundColor: 'white', color: 'black', width: '20px', height: '20px', textAlign: 'center', lineHeight: '20px' }}>{index}</div>
      <p style={{ color: 'white', marginBottom: '5px' }}>EMP ID: {employee.id}</p>
      <p style={{ color: 'white', marginBottom: '5px' }}>Name: {employee.name}</p>
      <p style={{  marginBottom: '5px',color:'orange' }}>DOB: {employee.dob}</p>
      <p style={{ color: 'green', marginBottom: '5px' }}>Role: {employee.role}</p>
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('admin@example.com'); // Insert your email here
  const [password, setPassword] = useState('password'); // Insert your password here
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showEmployeeList, setShowEmployeeList] = useState(false);

  const handleLogin = () => {
    // Perform login validations here
    if (email === 'admin@example.com' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const handleToggleEmployeeList = () => {
    if (selectedEmployee) {
      setSelectedEmployee(null); // Close the employee details dropdown if it's open
    }
    setShowEmployeeList(!showEmployeeList);
  };

  const handleToggleUserIcon = () => {
    if (showEmployeeList) {
      setShowEmployeeList(false); // Close the employee list dropdown if it's open
    } 
  };

  return (
    <div>
      {!loggedIn ? (
        <Login handleLogin={handleLogin} setEmail={setEmail} setPassword={setPassword} />
      ) : (
        <div style={{ backgroundColor: 'black', position: 'relative' }}>
          <Homepage setSelectedEmployee={setSelectedEmployee} />
          <img src={Group46} alt="Icon" style={{ width: '50px', position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={handleLogout} />
          {showEmployeeList && <EmployeeListDropdown employees={employeesData} setSelectedEmployee={setSelectedEmployee} />}
          {selectedEmployee && <EmployeeDetailsDropdown employee={selectedEmployee} />}
          <div style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
          <img src={userIcon} alt="User" style={{ width: '40px', cursor: 'pointer' }} onClick={handleToggleUserIcon} />
            <img src={homeIcon} alt="Home" style={{ width: '40px', cursor: 'pointer' }} onClick={handleToggleEmployeeList} />
            
          </div>
        </div>
      )}
    </div>
  );
};

const Login = ({ handleLogin, setEmail, setPassword }) => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', color: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
        <img src={Group3} alt="Icon" style={{ width: '100px', marginBottom: '20px' }} />
        <br />
        <h2 style={{ textAlign: 'center', color: 'green', font: 'normal normal normal 16px/21px Mulish' }}>#We are Electric</h2>
        <br />
        <input type="text" placeholder="Email ID" style={{ marginBottom: '10px', borderRadius: '12px', background: '#1F191966 0% 0% no-repeat padding-box', padding: '5px', boxShadow: 'inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947', opacity: 1, color: 'white' }} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" style={{ marginBottom: '20px', borderRadius: '12px', background: '#1F191966 0% 0% no-repeat padding-box', padding: '5px', boxShadow: 'inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947', opacity: 1, color: 'white' }} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button style={{ borderRadius: '20px', padding: '10px 20px', background: 'transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box', color: 'white', border: '2px solid #8CFF0026', cursor: 'pointer', opacity: 1, width: '181px' }} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default App;