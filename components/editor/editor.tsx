import React, { useContext } from "react";
import { Show, SimpleGrid, Stack } from "@chakra-ui/react";
import { AppContext } from "@/store/AppContext";
import Markdown from "@/components/markdown/markdown";
import Preview from "@/components/preview/preview";

/**
 * Editor component renders the editor section of the app.
 * It shows the Markdown component and the Preview component,
 * depending on the current state of the app.
 */
export default function Editor() {
  const { state } = useContext(AppContext);
  const { isPreview } = state;

  return (
    <Stack id="editor">
      {/* SimpleGrid with gridTemplateColumns for responsive layout above md viewport */}
      <SimpleGrid w="full" gridTemplateColumns={{ md: isPreview?'1fr': '1fr 1fr' }}>
        {/* Show above "md" only displays both Markdown and Preview */}
        <Show above="md">
          {/* Toggling preview state, `hides` the Markdown component */}
          {isPreview ? null : <Markdown />}
          <Preview />
        </Show>
        {/* Show below "md" displays either Markdown or Preview */}
        <Show below="md">
          {isPreview ? <Preview /> : <Markdown />}
        </Show>
      </SimpleGrid>
    </Stack>
  );
}
