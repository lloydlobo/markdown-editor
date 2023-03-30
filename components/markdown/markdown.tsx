import React from "react";

import { Box } from "@chakra-ui/react";

import MarkdownBody from "@/components/markdown/markdown-body";
import MarkdownHeader from "@/components/markdown/markdown-header";

export default function Markdown() {
  return (
    <Box id="markdown">
      <MarkdownHeader />
      <MarkdownBody />
    </Box>
  );
}
