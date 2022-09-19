import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import RickAndMorty from "./screens/RickAndMorty";
import Ejercicio2 from "./screens/Ejercicio2";

function App() {
  // cambiar a true despues para que inicie ne la pantalla del ejercicio 1
  const [screen, setScreen] = useState<boolean>(false);
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
