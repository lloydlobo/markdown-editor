import { AppContext } from '@/store/AppContext'
import { INote } from '@/types/inote';
import { Box, List } from '@chakra-ui/react';
import React, { useContext } from 'react'
import SidebarNote from '@/components/sidebar/sidebar-note';

interface Props { }

export default function SidebarNotes({ }: Props) {
  const { state, dispatch } = useContext(AppContext);
  const { notes } = state;

  return (
    <List spacing={{base:"2", md:"3"}}>
      {notes !== null ?
        notes.map((note: INote, idxNote: number) => (
          <SidebarNote
            key={`note-${note.title}-${idxNote}-${note.nanoid}`}
            nanoid={note.nanoid}
            createdAt={note.createdAt}
            title={note.title}
            id={note.id}
          />
        )) : <Box opacity="0.6">Empty notes</Box>}
    </List>
  )
}

