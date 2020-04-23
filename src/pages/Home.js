import React from "react";
import app from "../config/firebase";
import { useUser } from "../hooks";

export default function Home() {
  const user = useUser();
  return (
    <>
      <h1>Home</h1>
      <p>Seja bem vindo, {user?.email}</p>
      <button onClick={() => app.auth().signOut()}>signOut</button>
    </>
  );
}
