import { Box, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import SidebarNotes from '@/components/sidebar/sidebar-notes'
import Logo from '@/components/sidebar/sidebar-logo'
import SidebarNewNoteButton from '@/components/sidebar/sidebar-new-note-button'

export default function Sidebar() {
  return (
    <chakra.aside
      data-testid="sidebar"
      className="sidebar"
      h="100vh"
      pos="relative"
      px="6" py="7"
      bg="blackAlpha.50" _dark={{ bg: "whiteAlpha.50" }}
    >
      <Box>
        <Logo />
      </Box>
      <Box my="6">
        <Text textTransform="uppercase" fontWeight="medium">my notes</Text>
        <SidebarNewNoteButton />
        <SidebarNotes />
      </Box>
      {/* <ThemeToggle/> */}
    </chakra.aside>
  )
}


