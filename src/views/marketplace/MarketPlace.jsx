import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import topImg from "../../assets/images/cnu3j07sra271.png";
import Title from "../../components/common/Tittle";
// 이미지도 변수 잡아서 데이터로 불러줘야 함

const MarketPlace = () => {
  const boxStyle = {
    width: "200px",
    height: "200px",
    background: "red",
    borderRadius: "50%",
  };

  return (
    <>
      <Title>NFT Marketplace</Title>
      {/* <Layout title="marketplace" showTitle={false}> */}
      <Box
        className="topCont"
        h={"500px"}
        bg={`url(${topImg}) no-repeat 50% 50% / cover `}
      ></Box>
      {/* <div>마켓플레이스 컨텐츠</div> */}
      {/* <Image src={topImg} alt="" /> */}
      {/* <Image src="/logo512.png" alt="" /> */}

      <Tabs position={"sticky"} top={0}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              eum nulla porro officia sequi consectetur neque. Maxime fugit enim
              quaerat autem id impedit perferendis quibusdam suscipit modi!
              Quasi, suscipit laudantium.!
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              molestiae, numquam neque ducimus dolor labore quasi enim magnam?
              Suscipit eaque natus quos eos consequatur fuga cupiditate odio
              dolores pariatur soluta.!
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              perferendis culpa dolorem porro repellat. Amet suscipit
              laudantium, a enim molestiae recusandae ratione iste in nemo illum
              delectus debitis velit perferendis!!
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <motion.div
        style={boxStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      />

      <div style={{ height: "100vh" }}></div>
      {/* </Layout> */}
    </>
  );
};

export default MarketPlace;
