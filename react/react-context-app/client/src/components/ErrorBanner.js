import React from "react";

function ErrorBanner({ message }) {
  let errorMessage = message || "에러임";
  return <div style={{ backgroundColor: "red" }}>{errorMessage}</div>;
}

export default ErrorBanner;
