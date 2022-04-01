// chakra imports
import { Box, ChakraProvider, Portal } from "@chakra-ui/react";
import Footer from "#components/Footer/Footer";
// core components
import AuthNavbar from "#components/Navbars/AuthNavbar";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "#routes";
import theme from "#theme/theme.js";

export default function Auth(props) {
  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    console.log("Possible Routes: ", routes);

    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return <Route path={prop.path} element={prop.element} key={key} />;
      } else {
        return null;
      }
    });
  };
  const navRef = React.useRef();
  document.documentElement.dir = "ltr";
  return (
    <ChakraProvider theme={theme} resetCss={false} w="100%">
      <Box ref={navRef} w="100%">
        <Portal containerRef={navRef}>
          <AuthNavbar
            secondary={getActiveNavbar(routes)}
            logoText="Dashboard"
          />
        </Portal>
        <Box w="100%">
          <Box ref={wrapper} w="100%">
            <Routes>
              {getRoutes(routes)}
              <Route
                exact
                path="/auth"
                element={<Navigate to="/auth/signin" />}
              />
            </Routes>
          </Box>
        </Box>
        <Box px="24px" mx="auto" width="1044px" maxW="100%">
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
