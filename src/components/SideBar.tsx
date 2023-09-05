import React from "react";
import {
  Link as ChakraLink,
  Flex,
  Stack,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function SidebarNav() {
  const router = useRouter();

  const { asPath } = useRouter();

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="md" fontWeight="bold">
          Seções:
        </Text>
        <Stack></Stack>
        <ChakraLink
          onClick={() => {
            router.push("/");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          boxShadow={
            asPath === "/" ? (isDark ? " 0 1px 0 #fff" : "0 1px 0 #000000") : ""
          }
        >
          <Text fontSize="xl" fontWeight="medium">
            Home
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={() => {
            router.push("/projects");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          boxShadow={
            asPath === "/projects"
              ? isDark
                ? " 0 1px 0 #fff"
                : "0 1px 0 #000000"
              : ""
          }
        >
          <Text fontSize="xl" fontWeight="medium">
            Projetos
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={() => {
            router.push("/calca");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          bg={asPath === "/calca" ? "gray.200" : ""}
        >
          <Text fontSize="xl" fontWeight="medium">
            Sobre mim
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={() => {
            router.push("/contact");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          boxShadow={
            asPath === "/contact"
              ? isDark
                ? " 0 1px 0 #fff"
                : "0 1px 0 #000000"
              : ""
          }
        >
          <Text fontSize="xl" fontWeight="medium">
            Contatos
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={() => {
            router.push("/calca");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          bg={asPath === "/calca" ? "gray.200" : ""}
        >
          <Text fontSize="xl" fontWeight="medium">
            Blogs
          </Text>
        </ChakraLink>
      </Stack>
      <Stack>
        <Text fontSize="sm" fontWeight="bold">
          Social Links:
        </Text>
        <Flex>
          <Flex direction="row">
            <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
            <IconButton
              ml={2}
              icon={<FaInstagram />}
              isRound="true"
            ></IconButton>
            <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
            <IconButton
              ml={2}
              icon={<AiOutlineMail />}
              isRound="true"
            ></IconButton>
            <IconButton
              ml={2}
              icon={<IoLogoWhatsapp />}
              isRound="true"
            ></IconButton>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default SidebarNav;
