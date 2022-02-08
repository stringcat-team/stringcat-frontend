import { Button, Container, Paper, Box } from "@mui/material";
import React from "react";
import Input from "../../Input";
import WysiwygEditor from "../../wysiwyg/WysiwygEditor";

const Ask = () => {
  const onChange = (inputValue: string) => {};
  return (
    <Container sx={{ width: 590, height: "100%" }}>
      <Paper sx={{ p: 2, height: "100%" }}>
        <Input fullWidth sx={{ mb: 2 }} />
        <Box mb={3}>
          <WysiwygEditor onChange={onChange} height="534px" />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" sx={{ borderRadius: 1 }}>
            작성하기
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Ask;
