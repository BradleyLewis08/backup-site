import React, { useState, useEffect, useLayoutEffect } from "react";
import Routes from "./Routes";
import { AppContext } from "utils/contextLib";

import { BrowserRouter as Router, useLocation, useHistory } from "react-router-dom";
import Footer from "shared/components/footer"
import LocationSpecific from "shared/components/location-specific"
import Navigation from "shared/components/navbar"

import ScrollToTop from "ScrollToTop";

import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import { useController } from 'react-scroll-parallax';

const tagManagerArgs = {
    gtmId: 'GTM-TMTPK6N'
}

TagManager.initialize(tagManagerArgs)

ReactGA.initialize('UA-187847138-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

    const history = useHistory();
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    return (
        <Router>
            {/* <ParallaxCache/> */}
            <ScrollToTop />
            <LocationSpecific styleName="navigation-display-container" hideAt={["/"]}>
                <Navigation limit={120}/>
            </LocationSpecific>
            <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
                <div className="main-div">
                    <Routes />
                </div>
            </AppContext.Provider>
            <LocationSpecific hideAt={["/catalog"]}>
                <Footer />
            </LocationSpecific>
        </Router>
    );
}

export default App;