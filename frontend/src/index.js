import React from "react";
import { createRoot } from "react-dom/client";

import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.scss";
import App from "./container/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
