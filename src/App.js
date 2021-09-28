import React from "react";
import Content from "./Components/Content/Content"
import ToogleLangs from "./Components/ToggleLangs/ToogleLangs"
import ContextProvider from "./context/contextLangs"

function App() {
  return (
    <ContextProvider>
      <ToogleLangs />
      <Content />
    </ContextProvider>
  );
}

export default App;
