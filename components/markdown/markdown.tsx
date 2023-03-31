import React from "react";

import { Box } from "@chakra-ui/react";

import MarkdownBody from "@/components/markdown/markdown-body";
import MarkdownHeader from "@/components/markdown/markdown-header";

export default function Markdown() {
  return (
    <Box
      id="markdown"
      className="markdown-editor"
      borderInlineEndWidth="thin"
      borderInlineEndColor="blackAlpha.200"
      _dark={{ borderInlineEndColor: "whiteAlpha.500" }}
      minH="calc(100vh - 80px)"
    >
      <MarkdownHeader />
      <MarkdownBody />
    </Box>
  );
}
