import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import PortfolioApp from "./PortfolioApp";

ReactDOM.render(
    <BrowserRouter>
        <PortfolioApp />
    </BrowserRouter>,
    document.getElementById("root")
);