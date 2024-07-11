import "./App.css";
import ViewCV from "./components/ViewCV";
import InputInfoCV from "./components/InputInfoCV";

function App() {
  return (
    <>
      <InputInfoCV className="left-side" />
      <ViewCV className="right-side" />
    </>
  );
}

export default App;
