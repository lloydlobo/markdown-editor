import { ActionType, AppContext } from '@/store/AppContext';
import { Text, ListItem, Button } from '@chakra-ui/react'
import React, { useContext } from 'react'

type SidebarNoteProps = {
  nanoid: string, createdAt: string, title: string, id: number,
}

// nanoid={note.nanoid} createdAt={note.createdAt} title={item.title}
export default function SidebarNote({ nanoid, createdAt, title, id }: SidebarNoteProps) {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote, notes } = state;

  function handleOnClickSetActiveNote() {
    const currNote = notes?.find((note) => note.nanoid === nanoid);
    if (typeof currNote !== 'undefined') {
      dispatch({ type: ActionType.SET_ACTIVE_NOTE, note: currNote })
    }
  }

  return (
    <ListItem overflowX="hidden">
      <Button variant="link" title={title} onClick={handleOnClickSetActiveNote}>
        <Text color={activeNote?.nanoid === nanoid ? "orange.400" : ""}>
          {title}
        </Text>
      </Button>
    </ListItem>
  )
}

