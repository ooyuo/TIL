import React from "react";

function Options({ name }) {
  return (
    <div>
      <form>
        <input type="checkbox" id={`${name} option`} />{" "}
        <label htmlFor={`${name} option`}>{name}</label>
      </form>
    </div>
  );
}

export default Options;
