import Editor from "@/components/editor/editor";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { AppContext } from "@/store/AppContext";
import {
  chakra,
  Box,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { useContext, } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  const { isPreview } = state;

  const toast = useToast();
  useLocalStorage({ dispatch: dispatch, toast: toast });

  return (
    <Grid className={`wrapper ${isPreview ? "preview-open" : "preview-closed"}`} >
      <Sidebar />

      <Box>
        <Navbar />
        <chakra.main borderInlineStart={"thin solid"} borderInlineStartColor="blackAlpha.100" _dark={{ borderInlineStartColor: "whiteAlpha.100" }}>
          <Editor />
        </chakra.main>
      </Box>
    </Grid>
  );
}
