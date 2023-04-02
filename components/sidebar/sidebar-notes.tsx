import { AppContext } from "@/store/AppContext";
import { INote } from "@/types/inote";
import { Box, List } from "@chakra-ui/react";
import React, { useContext } from "react";
import SidebarNote from "@/components/sidebar/sidebar-note";

interface Props { }

export default function SidebarNotes({ }: Props) {
  const { state, dispatch } = useContext(AppContext);
  // const { notes } = state; // Not using notes directly, as it may not be directly using context.

  return (
    <List spacing={{ base: "1", md: "2" }}>
      {state && state?.notes !== null ? (
        state?.notes.map((note, idxNote: number) =>
          note !== null ? (
            <SidebarNote
              key={`note-${note.title}-${idxNote}-${note.nanoid}`}
              nanoid={note.nanoid}
              createdAt={note.createdAt}
              title={note.title}
              id={note.id}
            />
          ) : null
        )
      ) : (
        <Box opacity="0.6" px="6">
          Empty notes
        </Box>
      )}
    </List>
  );
}
