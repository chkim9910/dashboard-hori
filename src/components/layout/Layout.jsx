import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Box>
      <Header />
      <Box
        as="main"
        id="main"
        float={"right"}
        minH={"100vh"}
        h={"100%"}
        position={"relative"}
        overflow={"auto"}
        w={{ sm: "100%", lg2: "calc(100% - 290px)" }}
        maxW={{ sm: "100%", lg2: "calc(100% - 290px)" }}
      >
        <Box p={{ sm: "20px", md: "30px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
