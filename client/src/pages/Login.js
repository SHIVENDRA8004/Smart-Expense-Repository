import { Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="login d-flex align-items-center justify-content-center">
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
