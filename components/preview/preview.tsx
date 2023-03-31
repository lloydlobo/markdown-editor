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
        // scrollMarginTop="4"
        h={"calc(100vh - 80px)"}
        minH={"calc(100vh - 123px)"}
      >
        <PreviewBody />
      </Box>
    </Box>
  );
}
