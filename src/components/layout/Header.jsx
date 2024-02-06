import React, { useEffect, useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import gsap from "gsap";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navBeltHeight =
        document.querySelector(".nav-belt__wrapper")?.offsetHeight || 0;
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > navBeltHeight) {
        document.getElementById("header").style.top = "-32px";
        document.querySelector(".nav-bar__wrapper").style.position = "fixed";
        document.querySelector(".nav-bar__wrapper").style.width = "100%";
      } else {
        document.getElementById("header").style.top = -scrollPosition + "px";
        setIsScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤 이벤트 핸들러
  const HandleScroll = () => {
    const scrollY = window.scrollY;
    const hd = document.querySelector("#header");
    const nvBelt = document.querySelector(".nav-belt__wrapper");
    const hdHeight = hd.offsetHeight;
    const swiperHeight = document.querySelector(".topCont")?.offsetHeight || 0;
    // ||(or 연산자): swiperHeight가 없으면 0을 넣어줌
    if (window.innerWidth > 960) {
      console.log("scrollY:", scrollY);
      console.log("swiperHeight:", swiperHeight);
      console.log("hdHeight:", hdHeight);
      if (scrollY >= swiperHeight - hdHeight) {
        gsap.to(hd, { background: "#fff", color: "#222", duration: 0.5 });
        gsap.to(hd.querySelectorAll("button, a"), {
          color: "#222",
          duration: 0.5,
        });
        gsap.to(nvBelt, {
          boxShadow: "0 1px 4px 0 rgba(0,0,0,.07);",
        });
      } else {
        gsap.to(hd, { background: "rgba(0,0,0, 0.2)" });
        gsap.to(hd.querySelectorAll("button, a"), {
          color: "#fff",
        });
      }
    }
  };
  window.addEventListener("scroll", HandleScroll);

  return (
    <Box
      as="header"
      id="header"
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      minH={"92px"}
      bg={isScroll ? "rgba(0,0,0,.1)" : "transparent"}
      backdropFilter={isScroll ? "saturate(180%) blur(15px)" : "none"}
    >
      {/* tab */}
      <Box
        className="nav-belt__wrapper"
        display={["none", null, null, null, "block"]}
        h={"32px"}
        bg={"rgba(0,0,0,.6)"}
      >
        <Container
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <ButtonGroup gap={"10px"}>
            <Button colorScheme="teal" variant="link12">
              공공 기관용
            </Button>
            <Button colorScheme="teal" variant="link12">
              금융 클라우드
            </Button>
          </ButtonGroup>
          <ButtonGroup gap={"10px"}>
            <Button colorScheme="teal" variant="link12">
              로그인
            </Button>
            <Button colorScheme="teal" variant="link12">
              회원가입
            </Button>
            <Button colorScheme="teal" variant="link12">
              Languages
            </Button>
          </ButtonGroup>
        </Container>
      </Box>
      {/* header */}
      <Box className="nav-bar__wrapper" bg={"rgba(0,0,0,.05)"}>
        <Container
          display={"flex"}
          h={"60px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading as={"h1"} fontSize={24} color={"white"}>
            <Link to="/">Dashboard</Link>
          </Heading>

          <Gnb />
          <ButtonGroup color={"white"}>
            <IconButton
              variant="ghost"
              aria-label="Search database"
              icon={<SearchIcon />}
              color={"white"}
            />
            <IconButton
              variant="ghost"
              aria-label="Light database"
              icon={<SunIcon />}
              color={"white"}
            />
            <IconButton
              variant="ghost"
              aria-label="전체 메뉴"
              icon={<HamburgerIcon />}
              display={{ sm: "block", lg: "none" }}
              color={"white"}
            />
          </ButtonGroup>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
