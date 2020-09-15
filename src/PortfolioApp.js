import React from 'react';
import AppHeader from "./Components/app-header/app-header";
import Main from "./Components/Main/Main";
import AboutMe from './Components/AboutMe';
import AboutYou from './Components/AboutYou/AboutYou';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';



const PortfolioApp = () => {
    return (
        <MainLayout>
            <AppHeader />

            <Main />
                
            <AboutMe />

            <AboutYou />

            <Portfolio />

            <Footer />
        </MainLayout>
    );
}

const MainLayout = ({ children }) => <div>{ children }</div>

export default PortfolioApp;
