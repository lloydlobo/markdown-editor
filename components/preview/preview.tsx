import React from "react";

import { Box } from "@chakra-ui/react";

import PreviewHeader from "@/components/preview/preview-header";
import PreviewBody from "@/components/preview/preview-body";

export default function Preview() {
  return (
    <Box className="preview" scrollMargin="4">
      <PreviewHeader />
      <Box
        overflowY={"scroll"}
        h={"calc(100vh - 80px)"}
        minH={"calc(100vh - 80px)"}
        maxW={{ md: "61.8vw" }}
        marginInline="auto"
        pb={{ base: 4, md: 6 }}
      >
        <PreviewBody />
      </Box>
    </Box>
  );
}
