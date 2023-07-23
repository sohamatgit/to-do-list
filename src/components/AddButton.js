import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AddButton({onClickFunc}) {
  return (
    <Stack sx={{ padding: "15px 32px" }} spacing={2} direction="row">
      <Button variant="outlined" onClick={onClickFunc}>
        Add New Task
      </Button>
    </Stack>
  );
}
