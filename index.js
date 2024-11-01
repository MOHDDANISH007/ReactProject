import React from "react";
import ReactDOM from "react-dom/client";  // Make sure to import from 'react-dom/client'
import App from "./App";

const rootElement = document.getElementById('root'); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(<App />); // Render the App component into the root
