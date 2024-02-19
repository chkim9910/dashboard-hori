import { Box, Flex, IconButton, Img } from "@chakra-ui/react";
import Card from "./Card";
import { IoHeartOutline } from "react-icons/io5";

export default function NFT(props) {
  return (
    <>
      <Card>
        <Flex
          flexDir={"column"}
          p={"20px"}
          borderRadius={"20px"}
          w={"100%"}
          minW={"0px"}
          bg={"white"}
        >
          <Flex>
            <Box mb={"20px"} position={"relative"}>
              <Img
                src={props.img}
                w={"100%"}
                h={"100%"}
                borderRadius={"20px"}
              />
              <IconButton
                icon={<IoHeartOutline />}
                position={"absolute"}
                top={"14px"}
                right={"14px"}
                verticalAlign={"middle"}
                lineHeight={1.2}
                borderRadius={"50%"}
                fontWeight={"semibold"}
                boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
                h={"36px"}
                minW={"36px"}
                w={"36px"}
                fontSize={"24px"}
                // px={"1rem"}
                // py={0}
                color={"brand.500"}
                p={0}
              />
            </Box>
            <Flex></Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
