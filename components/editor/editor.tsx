import React from "react";

import { Box, Divider, Grid, SimpleGrid, Stack, StackDivider } from "@chakra-ui/react";

import Markdown from "@/components/markdown/markdown";
import Preview from "@/components/preview/preview";

export default function Editor() {
  return (
    <Stack id="editor">
      <SimpleGrid w="full" gridTemplateColumns="50vw 50vw" >
        <Markdown />
        <Preview />
      </SimpleGrid>
    </Stack>
  );
}
