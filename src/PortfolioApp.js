import React from 'react';
import AppHeader from "./Components/app-header/app-header";
import Main from "./Components/Main/Main";
import AboutMe from './Components/AboutMe/AboutMe';
import AboutYou from './Components/AboutYou/AboutYou';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import { Switch, Route } from "react-router-dom";


const PortfolioApp = () => {
    return (
        <MainLayout>
            <AppHeader />
            {/* <AboutYou /> */}
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/AboutMe" component={AboutMe} />
                <Route path="/AboutYou" component={AboutYou} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/footer" component={Footer} />
            </Switch>
        </MainLayout>
    );
}

const MainLayout = ({ children }) => <div>{ children }</div>

export default PortfolioApp;
