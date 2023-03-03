import {
  Heading,
  Text,
  Container,
  VStack,
  Box,
  Center,
  Button,
  useColorModeValue,
  Stack,
  Link,
  Divider,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxW={"4xl"} p="12">
      <VStack spacing="2" paddingTop={"5rem"} alignItems="flex-start">
        <Box
          as="a"
          href="https://wh0sumit.notion.site/work-dunolabs-e0dbc9782fda45208ed9ab23d9227dc7"
          target={"_blank"}
          bg="purple.50"
          rounded={"full"}
          px={"3"}
          py={"1"}
          border="1px"
          borderColor="purple.300"
          color={"purple.600"}
          transition="all 0.3s ease"
        >
          <Text fontSize="sm" fontWeight={"medium"}>
            we are hiring 👀
          </Text>
        </Box>
        <Heading as="h2" fontWeight={"bold"}>
          welcome to dunolabs.
        </Heading>
        <Divider />
        <Box maxW={"3xl"} textAlign={"left"} pb={"5"}>
          <Text fontSize="md" fontWeight={"medium"}>
            dunoLabs is a friendly, product-service-based company that's here to
            help you build your business and product from the ground up! we
            won't only help you build your brand (product) but also market it –
            wink wink 😉
          </Text>
          <Text fontSize="md" pt={"3"} fontWeight={"medium"}>
            we're a team that is well-versed in all aspects of product design,
            development, and growth. we focus on creating an engaging user
            experience that is tailored to your specific needs 🙌
          </Text>
          <Text fontSize="md" pt={"3"} fontWeight={"medium"}>
            plus, we offer a broad range of services from web and mobile app
            development to marketing and support. with dunolabs, you can have
            peace of mind knowing that your product is being built, marketed,
            and maintained with the utmost care 💎
          </Text>
        </Box>
        <Text fontSize="md" fontWeight={"medium"}>
          job application link :{" "}
          <Link
            href="https://wh0sumit.notion.site/work-dunolabs-e0dbc9782fda45208ed9ab23d9227dc7"
            target={"_blank"}
            color={useColorModeValue("purple.500", "blue.200")}
          >
            apply now 💼
          </Link>
        </Text>

        <Box maxW={"3xl"} textAlign={"left"} pt="5">
          <Heading as="h5" size="md" my="2" fontWeight={"bold"}>
            friendly note to our visitors
          </Heading>
          <Divider my="2" />
          <Text fontWeight={"500"}>
            this is a demo page for the dunoLabs website. we're currently
            working on the website and will be launching it soon. in the
            meantime, you can check out our social media pages and contact us{" "}
            <Link
              href="mailto:dunolabs@gmail.com"
              color={useColorModeValue("purple.500", "blue.200")}
              textDecoration="underline"
            >
              dunolabs@gmail.com
            </Link>{" "}
            for more information 🙌
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
