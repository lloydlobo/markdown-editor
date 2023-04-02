import React from "react";
import { useRouter } from "next/router";
import { Box, chakra, Grid, Show } from "@chakra-ui/react";

import AsideButton from "@/components/navbar/aside-button";
import Logo from "@/components/navbar/logo";
import NoteDelete from "@/components/navbar/note-delete";
import NoteSave from "@/components/navbar/note-save";
import NoteTitle from "@/components/navbar/note-title";

/**
 * Navbar component for the app
 */
export default function Navbar() {
  const router = useRouter();

  return (
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
            gap="7"
            gridTemplateColumns={{
              base: "1fr auto",
              md: "auto 1fr 20px 150px",
            }}
            placeContent="center"
            alignItems="center"
            autoFlow="column"
          >
            <Show above="md">
              <Logo />
            </Show>
            {/* Show notes only if router.pathname is apps index page */}
            {router.pathname === "/" && (
              <>
                <NoteTitle />
                <NoteDelete />
                <NoteSave />
              </>
            )}
          </Grid>
        </Grid>
      </chakra.header>
    </Box>
  );
}

// const [currPage, setCurrPage] = useState<NavItemProps | null>(null);
//
// useEffect(() => {
//   const curr = navItems.find((item) => item.pathname === router.pathname);
//   setCurrPage(curr ?? navItems[0]);
// }, [router.pathname]);
// ...
// currPage?.pathname === "/" && (...
