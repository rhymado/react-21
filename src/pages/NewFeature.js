import React from "react";

export default function NewFeature() {
  const callFunction = (a, b) => {
    return { a, b };
  };
  return (
    <div>
      <h1>Welcome to NewFeature Yeah</h1>
      <p>{JSON.stringify(callFunction(1, 2))}</p>
    </div>
  );
}
