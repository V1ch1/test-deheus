import React from "react";

const InputLogin = (props) => {
  const { textLabel, type, id, name, onChange } = props;

  return (
    <>
      <div className="form-group">
        <label for={id} style={{ color: "#96C11F" }}>
          {textLabel}
        </label>
        <input
          type={type}
          className="form-control inputStyle"
          id={id}
          name={name}
          onChange={onChange}
          style={{ borderColor: "#def69b" }}
        />
      </div>
    </>
  );
};

export default InputLogin;
