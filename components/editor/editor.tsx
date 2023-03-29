import React from "react";

import { Box, Grid, Stack } from "@chakra-ui/react";

import Markdown from "@/components/markdown/markdown";
import Preview from "@/components/preview/preview";

export default function Editor() {
  return (
    <Stack id="editor">
      <Grid w="full" templateColumns={{ base: "50vw 50vw" }}>
        <Markdown />
        <Preview />
      </Grid>
    </Stack>
  );
}
