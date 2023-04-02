import React from "react";

import { useRouter } from "next/router";

import {
  Box,
  Text,
  chakra,
  Stack,
  Grid,
  Flex,
  Link as ChakraLink,
  Divider,
  ChakraProps,
  FlexProps,
  StackProps,
} from "@chakra-ui/react";

import SidebarNotes from "@/components/sidebar/sidebar-notes";
import Logo from "@/components/sidebar/sidebar-logo";
import SidebarNewNoteButton from "@/components/sidebar/sidebar-new-note-button";
import { SidebarThemeToggle } from "@/components/sidebar/sidebar-theme-toggle";
import { navItems } from "@/lib/constants";

export default function Sidebar() {
  const router = useRouter();

  return (
    <chakra.aside
      data-testid="sidebar"
      className="sidebar"
      h="100vh"
      pos="relative"
      py={{ base: 6, md: 7 }}
      bg="blackAlpha.50"
      _dark={{ bg: "whiteAlpha.50" }}
    >
      <Flex justify="space-between" align="center" px="6">
        <Logo />
        <SidebarThemeToggle />
      </Flex>

      <Grid gap="6">
        {/* Show notes only if router.pathname is apps index page */}
        {router.pathname === "/" && (
          <Stack spacing="6" my={{ base: 6, md: 6 }}>
            <Text
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="widest"
              opacity="0.7"
              fontWeight="medium"
              my="0"
              px="6"
              py={{ md: "3" }}
            >
              my notes
            </Text>
            <Box px="6">
              <SidebarNewNoteButton />
            </Box>
            <SidebarNotes />
          </Stack>
        )}

        <Stack px="6" pt="6">
          <Divider position="relative" mb="2" w="full" />
          <NavigationLinks />
        </Stack>
      </Grid>
    </chakra.aside>
  );
}

export function NavigationLinks() {
  const router = useRouter();

  return (
    <Stack className="nav-items">
      {navItems.map((navItem, idxNavItem) => (
        <NavigationLink
          key={`navItem-${navItem.pathname}-${idxNavItem}`}
          isExternal={false}
          href={navItem.pathname}
          isActive={navItem.pathname === router.pathname}
          transition="all 0.15s ease-out"
        >
          {navItem.page}
        </NavigationLink>
      ))}
    </Stack>
  );
}

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  [key: string]: any | ChakraProps | FlexProps | StackProps;
}; // onClick: () => void;

export function NavigationLink({
  href,
  children,
  isActive,
  onClick,
  ...props
}: NavigationLinkProps) {
  return (
    <ChakraLink
      as={ChakraLink}
      href={href}
      {...props}
      letterSpacing="wider"
      fontWeight="medium"
      fontSize={{ base: "sm", md: "md" }}
      textTransform="capitalize"
      color={isActive ? "orange.500" : ""}
      _hover={{
        color: isActive ? "orange.400" : "orange.400",
        textDecoration: isActive ? "" : "none",
      }}
      _dark={{
        color: isActive ? "orange.400" : "",
        _hover: {
          color: isActive ? "orange.500" : "orange.400",
          textDecoration: isActive ? "" : "none",
        },
      }}
    >
      {children}
    </ChakraLink>
  );
}
