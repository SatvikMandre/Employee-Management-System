/** @format */

import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [authData] = useContext(AuthContext) || [{}, null];

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);

      // If employee, get fresh employee data from authData
      if (userData.role === "employee" && authData?.employees) {
        const employee = authData.employees.find((e) => e.id === userData.id);
        if (employee) {
          setLoggedInUserData(employee);
        }
      } else if (userData.role === "admin") {
        // For admin, we don't need extra data
        setLoggedInUserData(null);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    if (!authData || !authData.employees) {
      alert("Employee data not loaded yet!");
      return;
    }

    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", id: employee.id })
      );

      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
