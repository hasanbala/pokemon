import React from "react";
import ReactDOM from "react-dom/client";
import { PokemonContext } from "context";
import App from "app";
import "styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <PokemonContext>
      <App />
    </PokemonContext>
  </React.StrictMode>,
);
