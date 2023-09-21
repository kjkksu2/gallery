import React from "react";
import { createRoot } from "react-dom/client";

import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.module.css";
import App from "./container/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
