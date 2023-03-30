import React from "react";

import { Box, Text, chakra, Stack, Grid } from "@chakra-ui/react";

import SidebarNotes from "@/components/sidebar/sidebar-notes";
import Logo from "@/components/sidebar/sidebar-logo";
import SidebarNewNoteButton from "@/components/sidebar/sidebar-new-note-button";
import { SidebarThemeToggle } from "@/components/sidebar/sidebar-theme-toggle";

export default function Sidebar() {
  return (
    <chakra.aside
      data-testid="sidebar"
      className="sidebar"
      h="100vh"
      pos="relative"
      // px="6"
      py={{ base: 6, md: 6 }}
      bg="blackAlpha.50"
      _dark={{ bg: "whiteAlpha.50" }}
    >
      <>
        <Box px="6">
          <Logo />
        </Box>
        <Grid gap="6">
          <Stack spacing="6" my="6">
            <Text
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="widest"
              opacity="0.7"
              fontWeight="medium"
              px="6"
            >
              my notes
            </Text>
            <Box px="6">
              <SidebarNewNoteButton />
            </Box>
            <SidebarNotes />
          </Stack>
          <SidebarThemeToggle/> 
        </Grid>
      </>
    </chakra.aside>
  );
}
