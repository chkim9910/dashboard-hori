import Title, { TitleH4 } from "../../components/common/Tittle";
import { Section } from "../../components/layout/Container";
import Layout from "../../components/layout/Layout";
import MainSlide from "./components/MainSlide";
import { Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      {/* <Layout title="home" showTitle={false}> */}
      <Title>Main Dashboard</Title>
      <MainSlide />
      <Section isLightBackground={true}>
        <Container>
          <TitleH4>목표</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui
          magnam assumenda, adipisci iste sint provident tempore mollitia.
          Deserunt labore ipsa quod odit dolore animi repudiandae vero dolorum
          delectus similique? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ex, facere. Ex asperiores maiores atque, ipsam laboriosam neque
          inventore molestias libero corrupti maxime? Iusto accusamus magni quis
          dolorem voluptatum saepe aut.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex, facere. Ex asperiores maiores atque, ipsam
          laboriosam neque inventore molestias libero corrupti maxime? Iusto
          accusamus magni quis dolorem voluptatum saepe aut. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere.
          Ex asperiores maiores atque, ipsam laboriosam neque inventore
          molestias libero corrupti maxime? Iusto accusamus magni quis dolorem
          voluptatum saepe aut.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex, facere. Ex asperiores maiores atque, ipsam
          laboriosam neque inventore molestias libero corrupti maxime? Iusto
          accusamus magni quis dolorem voluptatum saepe aut. <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere.
          Ex asperiores maiores atque, ipsam laboriosam neque inventore
          molestias libero corrupti maxime?
        </Container>
      </Section>
      <Section>
        <Container>
          <TitleH4>비전</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere.
          Ex asperiores maiores atque, ipsam laboriosam neque inventore
          molestias libero corrupti maxime? Iusto accusamus magni quis dolorem
          voluptatum saepe aut.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex, facere. Ex asperiores maiores atque, ipsam
          laboriosam neque inventore molestias libero corrupti maxime? Iusto
          accusamus magni quis dolorem voluptatum saepe aut. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere.
          Ex asperiores maiores atque, ipsam laboriosam neque inventore
          molestias libero corrupti maxime? Iusto accusamus magni quis dolorem
          voluptatum saepe aut.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex, facere. Ex asperiores maiores atque, ipsam
          laboriosam neque inventore molestias libero corrupti maxime? Iusto
          accusamus magni quis dolorem voluptatum saepe aut. <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere.
          Ex asperiores maiores atque, ipsam laboriosam neque inventore
          molestias libero corrupti maxime?
        </Container>
      </Section>
      {/* <Section isLightBackground={true}>
        <Container>
          <TitleH4>사장님 말씀</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui
          magnam assumenda, adipisci iste sint provident tempore mollitia.
          Deserunt labore ipsa quod odit dolore animi repudiandae vero dolorum
          delectus similique?
          <TitleH4>사모님 말씀</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui
          magnam assumenda, adipisci iste sint
        </Container>
      </Section> */}
      {/* </Layout> */}
    </>
  );
};

export default Home;
