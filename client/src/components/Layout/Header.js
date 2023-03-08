import React, { useState, useEffect } from "react";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <link className="navbar-brand" to="/" />
            Smart Expense
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  {loginUser && loginUser.name}
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  Logout
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
