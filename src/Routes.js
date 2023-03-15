import React from "react";

import { Route, Switch, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import NotFound from "pages/notfound";
import About from "pages/about";
import StudentsFAQ from "pages/faq/students-faq";
import PartnersFAQ from "pages/faq/partners-faq";
import Home from "pages/home";
import Catalog from "pages/catalog";
import Partners from "pages/partners";
import Students from "pages/students";
import Team from "pages/team";
import CampusPartners from "pages/campus-partners";
import OurNetwork from "pages/our-network";
import JoinUs from "pages/join-us";
import Apply from "pages/apply/";

const routes = [
  {
    path: "/",
    title: "YES Internships",
    description:
      "YES Internships helps undergraduates launch their career in entrepreneurship.",
    Component: Home,
  },
  {
    path: "/about",
    title: "About YES Internships",
    description:
      "YES Internships helps undergraduates launch their career in entrepreneurship.",
    Component: About,
  },
  {
    path: "/partners",
    title: "Partners",
    description:
      "Learn more about YES Internships and how we can help your start-up grow.",
    Component: Partners,
  },
  {
    path: "/catalog",
    title: "Catalog",
    description:
      "Browse open internship positions and learn more about our start-up partners.",
    Component: Catalog,
  },
  {
    path: "/students-faq",
    title: "Students FAQ",
    description: "Have questions about YES Internships? Find answers here!",
    Component: StudentsFAQ,
  },
  {
    path: "/partners-faq",
    title: "Partners FAQ",
    description: "Have questions about YES Internships? Find answers here!",
    Component: PartnersFAQ,
  },
  {
    path: "/students",
    title: "Students",
    description:
      "Learn more about how YES Internships can help you explore start-up land and secure an internship.",
    Component: Students,
  },
  {
    path: "/apply",
    Title: "apply",
    description: "Apply to YES Internships",
    Component: Apply,
  },
  {
    path: "/team",
    title: "Team",
    description: "Meet the team behind YES Internships.",
    Component: Team,
  },
  {
    path: "/campus",
    title: "Campus Partners",
    description:
      "Meet our campus partners from universities across North America.",
    Component: CampusPartners,
  },
  {
    path: "/our-network",
    title: "Our Network",
    description:
      "Get to know our start-up partners who are pioneers in their space and revolutionizing their industries",
    Component: OurNetwork,
  },
  {
    path: "/join-us",
    title: "Join YES Internships",
    description:
      "Join YES Internships to drive team growth as your company scales.",
    Component: JoinUs,
  },
];

/**
 * This component merely defines the routes.
 *
 * The actual application is only wrapped by BrowserRouter in App.js.
 * This had to be done to allow fade transitions between pages.
 *
 * See: http://reactcommunity.org/react-transition-group/with-react-router
 * See: https://reactjs.org/docs/animation.html
 * See: https://css-tricks.com/animating-between-views-in-react/
 */
export default function Routes() {
  const location = useLocation();
  const { pathname, key } = location;

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={key}
        timeout={300}
        classNames="anim-page"
        unmountOnExit
      >
        <div className="anim-page">
          <Switch location={location}>
            {routes.map(({ path, title, description, Component }) => (
              <Route
                key={path}
                exact
                path={path}
                render={() => (
                  <React.Fragment>
                    <Helmet>
                      <meta
                        charSet="utf-8"
                        name="description"
                        content={description}
                      />
                      <title>{title}</title>
                    </Helmet>
                    <Component />
                  </React.Fragment>
                )}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
