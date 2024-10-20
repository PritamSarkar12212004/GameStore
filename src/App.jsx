import React from "react";
import NavBar from "./components/Nav/NavBar";
import RoutesPath from './routes/RoutesPath'

function App() {
  document.title="Seema Singh "
  return (
    <>
    <div className="h-screen w-full select-none">

      <NavBar />
      <RoutesPath />
    </div>
    </>
  );
}

export default App;
