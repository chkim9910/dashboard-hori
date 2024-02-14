import {
  Box,
  Flex,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {
  IoIosDocument,
  IoLogoUsd,
  IoMdCheckboxOutline,
  IoMdStats,
} from "react-icons/io";
import usFlag from "../../../assets/images/us-flag.png";

export default function Info() {
  const infoList = [
    {
      dt: "Earnings",
      dd: "$350.4",
      rightDir: true,
      icon: <IoMdStats />,
    },
    {
      dt: "Spend this month",
      dd: "$642.39",
      rightDir: true,
      icon: <IoLogoUsd />,
    },
    { dt: "Sales", dd: "$574.34" },
    { dt: "Your balance", dd: "$1,000", leftDir: true, img: usFlag },
    {
      dt: "New Tasks",
      dd: "154",
      rightDir: true,
      icon: <IoMdCheckboxOutline />,
      bgColor: true,
      colorWhite: true,
    },
    {
      dt: "Total Projects",
      dd: "2935",
      rightDir: true,
      icon: <IoIosDocument />,
    },
  ];
  // console.log(infoList[2].whichDir);
  return (
    <>
      {infoList.map((item, index) => (
        <Flex
          key={index}
          p={"20px"}
          flexDirection={"column"}
          w={"100%"}
          position={"relative"}
          borderRadius={"20px"}
          minW={0}
          bg={"white"}
          //   py={"15px"}
        >
          <Flex
            h={"100%"}
            alignItems={{ base: "center", lg2: "start" }}
            justifyContent={"center"}
            my={"auto"}
          >
            <Flex
              display={item.rightDir ? "flex" : "none"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50%"}
              w={"56px"}
              h={"56px"}
              bg={
                item.bgColor
                  ? "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                  : "secondaryGray.300"
              }
              fontSize={"32px"}
              color={item.colorWhite ? "white" : "brand.500"}
            >
              {item.icon}
            </Flex>
            <Box
              position={"relative"}
              my={"auto"}
              marginInlineStart={"18px"}
              flex={"1 1 0%"}
            >
              <Text as={"dl"}>
                <Text
                  as={"dt"}
                  fontWeight={"medium"}
                  fontSize={"0.875rem"}
                  lineHeight={"100%"}
                  color={"secondaryGray.600"}
                >
                  {item.dt}
                </Text>
                <Text
                  as={"dd"}
                  fontWeight={"semibold"}
                  fontSize={"1.5rem"}
                  color={"secondaryGray.900"}
                >
                  {item.dd}
                </Text>
              </Text>
            </Box>
            <Flex
              display={item.leftDir ? "flex" : "none"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50%"}
              w={"56px"}
              h={"56px"}
              bg={"secondaryGray.300"}
            >
              <Img src={item.img} width={"100%"} />
            </Flex>
          </Flex>
        </Flex>
      ))}
    </>
  );
}
