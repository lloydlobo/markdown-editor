import React from "react";

import { Box, Grid } from "@chakra-ui/react";

import Markdown from "@/components/markdown/markdown";
import Preview from "@/components/preview/preview";

export default function Editor() {
  return (
    <Box id="editor">
      <Grid w="full" templateColumns={{ base: "50vw 50vw" }} overflowX="hidden">
        <Markdown />
        <Preview />
      </Grid>
    </Box>
  );
}
