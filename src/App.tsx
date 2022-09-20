import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import RickAndMorty from "./screens/RickAndMorty";
import Ejercicio2 from "./screens/Ejercicio2";

function App() {
  const [screen, setScreen] = useState<boolean>(true);
  const ChangeView = () => {
    setScreen(!screen);
  };

  return (
    <>
      <NavBar onView={ChangeView} screen={screen} />
      {screen ? <RickAndMorty /> : <Ejercicio2 />}
    </>
  );
}

export default App;
