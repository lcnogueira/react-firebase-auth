import React from "react";
import app from "../config/firebase";
import { useUser } from "../hooks";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>signOut</button>
    </>
  );
}
