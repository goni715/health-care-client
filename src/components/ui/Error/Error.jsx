"use client";
import "./error.css";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      {message}
    </div>
  );
};

export default Error;
