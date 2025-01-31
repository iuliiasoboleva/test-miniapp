import React, { useState } from "react";
import "./styles.css";

const Notice = ({ text }) => {
  return (
    <div className="notice">
      <i className="bi bi-info-square-fill"></i>
      <p>{text}</p>
    </div>
  );
};

export default Notice;