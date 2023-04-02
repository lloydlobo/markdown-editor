import React, { useEffect, useState } from "react";

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
  useColorModeValue,
  FlexProps,
  StackProps,
} from "@chakra-ui/react";

import SidebarNotes from "@/components/sidebar/sidebar-notes";
import Logo from "@/components/sidebar/sidebar-logo";
import SidebarNewNoteButton from "@/components/sidebar/sidebar-new-note-button";
import { SidebarThemeToggle } from "@/components/sidebar/sidebar-theme-toggle";
import { useRouter } from "next/router";
import { navItems } from "@/lib/constants";
import { NavItemProps } from "@/types/inote";

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
          <>
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
          </>
        )}

        <Stack px="6" pt="6">
          <NavigationLinks />
        </Stack>
      </Grid>
    </chakra.aside>
  );
}

export function NavigationLinks() {
  const router = useRouter();
  const [navItemsState, setNavItemsState] = useState<NavItemProps[]>(navItems);

  useEffect(() => {
    setNavItemsState(
      navItems.map((item) => ({
        ...item,
        isActive: item.pathname === router.pathname,
      }))
    );
  }, [router.pathname]);

  function handleLinkClick(pathname: string) {
    setNavItemsState(
      navItems.map((item) => ({
        ...item,
        isActive: item.pathname === pathname,
      }))
    );
  }

  return (
    <>
      <Divider position="relative" mb="2" w="full" />
      <Stack className="nav-items">
        {navItemsState.map((item, idx) => (
          <NavigationLink
            key={`navItem-${item.pathname}-${idx}`}
            isExternal={false}
            href={item.pathname}
            isActive={item.pathname === router.pathname}
            onClick={() => handleLinkClick(item.pathname)}
            transition="all 0.15s ease-out"
          >
            {item.page}
          </NavigationLink>
        ))}
      </Stack>
    </>
  );
}

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  [key: string]: any | ChakraProps | FlexProps | StackProps;
};

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
      color={isActive ? "orange.300" : ""}
      _hover={{
        color: isActive ? useColorModeValue("orange.500", "orange.400") : "",
      }}
      letterSpacing="wider"
      fontWeight="medium"
      fontSize={{ base: "sm", md: "md" }}
      textTransform="capitalize"
      onClick={onClick}
    >
      {children}
    </ChakraLink>
  );
}
