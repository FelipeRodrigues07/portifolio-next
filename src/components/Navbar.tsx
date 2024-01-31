import React from "react";
import SidebarNav from "./SideBar";
import {
  Flex,
  Heading,
  Spacer,
  IconButton,
  useColorMode,
  Avatar,
  Link as ChakraLink,
  Text,
  useDisclosure,
  useBreakpointValue,
  Icon,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { useRouter } from "next/router";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const router = useRouter();

  const { asPath } = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex
      position="fixed"
      h="65px"
      align="center"
      zIndex="1000"
      backgroundColor={isDark ? "#1A202C" : "#FFFFFF"}
      w="100%"
      mx="auto"
      maxW={1900}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      left="50%"
      transform="translateX(-50%)"
    >
      <Avatar
       /* ml={{ base: "15px", sm: "15px", md: "8", lg: "8", xl: "200px" }}*/
       ml={{ base: "20px", sm: "15px", md: "8", lg: "8", xl: "8px" }}
        size="sm"
        src="/logo.png"
      ></Avatar>
      <Heading ml="0" size="md" fontWeight="semibold" color="cyan.400">
        Felipe
      </Heading>
      <Spacer></Spacer>
      <ChakraLink
        display={{ base: "none", md: "flex" }}
        onClick={() => {
          router.push("/");
        }}
        _hover={{ bg: "gray.500" }} // underline é para efeito
        px="4"
        py="2"
        borderRadius={5}
        borderBottom={
          asPath === "/" ? (isDark ? "1px solid #fff" : "1px solid #000") : ""
        }
      >
        <Text
          fontSize={{ base: "15px", md: "lg", lg: "xl" }}
          display={{ base: "none", md: "flex" }}
        >
          Home
        </Text>
      </ChakraLink>
      <ChakraLink
        ml="12px"
        display={{ base: "none", md: "flex" }}
        onClick={() => {
          router.push("/projects");
        }}
        _hover={{ bg: "gray.500" }} // underline é para efeito
        px="4"
        py="2"
        borderRadius={5}
        borderBottom={
          asPath === "/projects"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          fontSize={{ base: "15px", md: "lg", lg: "xl" }}
          display={{ base: "none", md: "flex" }}
        >
          Projetos
        </Text>
      </ChakraLink>
      <ChakraLink
        ml="12px"
        display={{ base: "none", md: "flex" }}
        onClick={() => {
          router.push("/about");
        }}
        _hover={{ bg: "gray.500" }} // underline é para efeito
        px="4"
        py="2"
        borderRadius={5}
        borderBottom={
          asPath === "/about"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          fontSize={{ base: "15px", md: "lg", lg: "xl" }}
          display={{ base: "none", md: "flex" }}
        >
          Sobre mim
        </Text>
      </ChakraLink>
      <ChakraLink
        ml="12px"
        display={{ base: "none", md: "flex" }}
        onClick={() => {
          router.push("/contact");
        }}
        _hover={{ bg: "gray.500" }} // underline é para efeito
        px="4"
        py="2"
        borderRadius={5}
        borderBottom={
          asPath === "/contact"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          fontSize={{ base: "15px", md: "lg", lg: "xl" }}
          display={{ base: "none", md: "flex" }}
        >
          Contatos
        </Text>
      </ChakraLink>
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize={20}
          mr="15px"
          aria-label="Abrir menu"
        ></IconButton>
      )}{" "}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="50px" mt="20px" mr="10px" />
          <DrawerHeader>
            <IconButton
              ml={5}
              mr={5}
              icon={isDark ? <BsSun /> : <FaMoon />}
              isRound={true}
              onClick={toggleColorMode}
              aria-label="Toggle Color Mode"
            ></IconButton>
          </DrawerHeader>
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <IconButton
        display={{ base: "none", md: "flex" }}
        ml={{ base: "25px", sm: "70px", md: "3", lg: "8" }}
        mr={5}
        icon={isDark ? <BsSun /> : <FaMoon />}
        isRound={true}
        onClick={toggleColorMode}
        aria-label="Toggle Color Mode"
      ></IconButton>
    </Flex>
  );
}

export default Navbar;
