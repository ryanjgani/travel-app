import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import DestinationsProvider from "./context/destination/destination-context";
import theme from "./theme";

import "@fontsource/inter";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <DestinationsProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </DestinationsProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
