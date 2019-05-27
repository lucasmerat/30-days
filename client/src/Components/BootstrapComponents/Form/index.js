import React from "react";
import "./style.css";
// This file exports the Input, TextArea, and FormBtn Components

export function Input(props) {
  return (
    <div style={{width: '100%', position:'center'}} className="form-group">
      <input type="text" className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }} className={`btn btn-success ${props.className}`}>
      {props.children}
    </button>
  );
}

export function FormBtnlink(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-link">
      {props.children}
    </button>
  );
}