import { Box, chakra, Flex, Grid } from "@chakra-ui/react";
import React from "react";

import AsideButton from "@/components/navbar/aside-button";
import Logo from "@/components/navbar/logo";
import NoteDelete from "@/components/navbar/note-delete";
import NoteSave from "@/components/navbar/note-save";
import NoteTitle from "@/components/navbar/note-title";

export default function Navbar() {
  return (
    <>
      <Box bg="gray.700" color="gray.100">
        <chakra.header>
          <Grid
            alignItems="center"
            gridTemplateColumns={{
              base: "56px 1fr",
              md: "72px 1fr",
            }}
          >
            <AsideButton />
            <Grid
              w="full"
              pl="6"
              pr="2"
              placeContent="center"
              gap="7"
              alignItems="center"
              autoFlow="column"
              gridTemplateColumns={{
                base: "1fr 20px auto",
                md: "auto 1fr 20px 150px",
              }}
            >
              <Logo />
              <NoteTitle />
              <NoteDelete />
              <NoteSave />
            </Grid>
          </Grid>
        </chakra.header>
      </Box>
    </>
  );
}
