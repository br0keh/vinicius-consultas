import React from "react";
import { Route, Switch } from "react-router-dom";

// pages
import ConsultaPage from "./pages/Consulta";
import SobrePage from "./pages/Sobre";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ConsultaPage} />
            <Route path="/sobre" component={SobrePage} />
        </Switch>
    );
}
