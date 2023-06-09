import React, { useContext } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useToast,
  chakra,
} from "@chakra-ui/react";

import { ActionType, AppContext } from "@/store/AppContext";

type PromptDeleteProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PromptDelete({ isOpen, onClose }: PromptDeleteProps) {
  const toast = useToast();

  const { state, dispatch } = useContext(AppContext);
  const { notes, activeNote } = state;

  function handleOnClickSecondary() {
    if (!activeNote) return;
    if (notes?.find((note) => note.nanoid === activeNote.nanoid)) {
      dispatch({ type: ActionType.DELETE_NOTE, note: activeNote });
      onClose();
      toast({
        title: "Deleted note",
        status: "success",
      });
    } else {
      onClose();
      toast({
        title: "Cannot delete unsaved note",
        status: "error",
      });
    }
  }

  if (activeNote === null) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            Are you sure you want to permanently delete{" "}
            <chakra.strong>
              {typeof activeNote !== 'undefined' ? activeNote.title : ""}
              {".md"}
            </chakra.strong>
            {"?"}
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button
            data-testid="closeDeletionPrompt"
            colorScheme="blue"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            data-testid="confirmDeletion"
            variant="ghost"
            colorScheme={"red"}
            onClick={handleOnClickSecondary}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
