import React from "react";

export default function NewFeature() {
  const callFunction = (a, b, c) => {
    return { a, b, c };
  };
  return (
    <div>
      <h1>Welcome to NewFeature Yeah</h1>
      <p>{JSON.stringify(callFunction(1, 2, 3))}</p>
    </div>
  );
}
