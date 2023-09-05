import React from "react";
import Navbar from "@/components/Navbar";
import { Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Section from "@/components/Section";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import Social from "@/components/Social";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex direction="column" w="100%" mt="0">
      <Navbar />
      <Section />
      <Profile />
      <Project />
      <Social />
    </Flex>
  );
}
