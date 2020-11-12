import React, { useState } from "react";
import "./login.css";
import deHeus from "../../images/de-heusID.jpg";
import InputLogin from "./InputLogin";
import vaquita from "../../images/vaquita.jpg";
import getData from "../../api/getData";

const Login = () => {
  const [form, setValues] = useState({
    username: "",
    password: "",
  });

  const printValues = (e) => {
    e.preventDefault();
    console.log(form);
    getData();
  };

  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={printValues}>
      <div className="global-container">
        <div className="row">
          <div className="col-sm-12">
            {" "}
            <img src={deHeus} alt="..." className="imgDeHeus" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <InputLogin
              textLabel="Usuario"
              type="text"
              id="userNameField"
              value={form.username}
              name="username"
              onChange={updateField}
            />
          </div>
          <div className="col-sm-12">
            <InputLogin
              textLabel="Contraseña"
              value={form.password}
              name="password"
              type="password"
              onChange={updateField}
              id="password"
            />
          </div>

          <div className="col-sm-12">
            <button
              className="btn btn-success btn-block mt-3"
              style={{ backgroundColor: "#96C11F", borderColor: "#96C11F" }}
            >
              Entrar
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {" "}
            <img
              src={vaquita}
              alt="..."
              style={{ marginTop: 100, marginTop: 140 }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
