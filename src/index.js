import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />, document.getElementById("root"));

//  Reference links : https://www.emojimeanings.net/list-smileys-people-whatsapp
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
