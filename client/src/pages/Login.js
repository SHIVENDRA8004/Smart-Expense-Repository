import { Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Login = () => {
  // To use Navigate
  const navigate = useNavigate();
  // Loading Spinner Hook
  const [loading, setLoading] = useState(false);
  // To handle submit
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/login", values);
      setLoading(false);
      message.success("Login Suceessful");
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Invalid Username or Password");
    }
  };
  return (
    <>
      <div className="login d-flex align-items-center justify-content-center">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={handleSubmit}>
          <h2>Login</h2>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">New User? Register</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
