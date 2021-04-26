import React from "react";

export default function NewFeature() {
  const callFunction = (a) => {
    return [a];
  };
  return (
    <div>
      <h1>Welcome to NewFeature Yeah</h1>
      <p>{JSON.stringify(callFunction(1))}</p>
    </div>
  );
}
