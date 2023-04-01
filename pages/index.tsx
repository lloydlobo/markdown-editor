import Editor from "@/components/editor/editor";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { ActionType, AppContext } from "@/store/AppContext";
import { chakra, Box, Grid, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

export default function Home() {
  const toast = useToast();
  const { state, dispatch } = useContext(AppContext);
  const { isPreview } = state;

  // Fetch notes from local storage and dispatches them to the store,
  // or loads sample data if none exist in local storage.
  // It also displays a user toast message accordingly.
  useLocalStorage({ state: state, dispatch: dispatch, toast: toast });

  return (
    <Grid
      className={`wrapper ${isPreview ? "preview-open" : "preview-closed"}`}
    >
      <Sidebar />
      <Box>
        <Navbar />
        <chakra.main
          // Thin border to allow enough space for textarea border on focus in Editor -> Markdown.
          borderInlineStart={"thin solid"}
          borderInlineStartColor="blackAlpha.100"
          _dark={{ borderInlineStartColor: "whiteAlpha.100" }}
        >
          <Editor />
        </chakra.main>
      </Box>
    </Grid>
  );
}
