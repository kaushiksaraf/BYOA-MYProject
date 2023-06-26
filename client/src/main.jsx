//  import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-igc1c6qf4zeug704.us.auth0.com"
      clientId="RWPd9Cp6Ah1rjZQy9uu6i3HHUkc2nfw9"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
