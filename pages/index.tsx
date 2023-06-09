import Editor from "@/components/editor/editor";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";
import { chakra, Box, Grid, useToast } from "@chakra-ui/react";
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
        <chakra.main>
          <Editor />
        </chakra.main>
      </Box>
    </Grid>
  );
}
