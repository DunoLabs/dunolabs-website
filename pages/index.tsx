import {
  Heading,
  Text,
  Container,
  VStack,
  Box,
  Center,
  HStack,
  Button,
  useColorModeValue,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import type { NextPage } from "next";

import * as RiIcons from "react-icons/ri";

const Home: NextPage = () => {
  return (
    <Container maxW={"5xl"} p="12">
      <VStack spacing="2" paddingTop={"5rem"} alignItems="flex-start">
        <Heading as="h1" pb={"5"} size="2xl">
          Welcome to DunoLabs !
        </Heading>
        <Text as="p" fontSize="lg">
          DunoLabs' mission is to develop open-source micro-saas applications
          using various technologies to help businesses & individuals. we cover
          all the aspects by providing a wonderful cross-platform user
          experience.
        </Text>
        <br />
        <Heading as="h1" pb={"5"} textDecor="underline">
          About
        </Heading>
        <Text as="p" fontSize="lg">
          Founded in April 2022, DunoLabs' plan is to develop micro-saas
          applications across multiple domains. DunoLabs teams up a community of
          experts to develop open-source software that enables users to
          accomplish tasks quickly and easily. The main goal is to provide a
          phenomenal user experience.
        </Text>{" "}
        <br />
        <Heading as="h1" pb={"5"} textDecor="underline">
          Work
        </Heading>
        <Center py={6}>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            rounded={"xl"}
            p={6}
            overflow={"hidden"}
          >
            <Stack>
              <Text
                color={"purple.300"}
                fontWeight={"bold"}
                textDecor="underline"
                as="a"
                href="https://invoicetor.works"
              >
                Invoicetor
              </Text>

              <Text color={"gray.500"}>
                Invoicetor is a no-code platform where business owners can
                create invoices for their business in no time. Invoicetor is a
                platform that helps businesses to digitize their finances in an
                easy manner and create invoices in a simple way.
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Button
                as={"a"}
                href="https://github.com/dunolabs/invoicetor-landing"
                target={"_blank"}
              >
                Github
              </Button>{" "}
              <Button
                as={"a"}
                href="https://invoicetor.works"
                target={"_blank"}
              >
                Visit
              </Button>
            </Stack>
          </Box>
        </Center>
        <Stack padding={"3"} mt={"5rem"} bg="yellow.100" rounded={"xl"}>
          <Text fontWeight={"500"}>
            This is a demo website for the Dunolabs. we're currently working on
            our main website.
          </Text>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Home;

