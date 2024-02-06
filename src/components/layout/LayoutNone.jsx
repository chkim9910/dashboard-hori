import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function LayoutNone() {
  return (
    <>
      <Box
        display={"flex"}
        flexDir={"column"}
        minH={"100vh"}
        bg={"palevioletred"}
      >
        <Box as="main" id="main" flexGrow={1}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

// Outlet은 해당 위치에 자식 라우트들이 렌더링되도록 하는 역할
