import React from "react";

import { Box } from "@chakra-ui/react";

import MarkdownBody from "@/components/markdown/markdown-body";
import MarkdownHeader from "@/components/markdown/markdown-header";
import { mode } from "@chakra-ui/theme-tools";

export default function Markdown() {
  return (
    <Box
      id="markdown"
      borderInlineEndWidth="thin"
      borderInlineEndColor="blackAlpha.200"
      _dark={{ borderInlineEndColor: "whiteAlpha.500" }}
    >
      <MarkdownHeader />
      <MarkdownBody />
    </Box>
  );
}
