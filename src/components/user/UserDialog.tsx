import {
  Box,
  Button,
  Chip,
  Dialog,
  IconButton,
  Paper,
  PaperProps,
  styled,
  Typography,
} from "@mui/material";
import React, { MouseEventHandler, useCallback } from "react";
import Icon from "../Icon";
import UserProfile from "./UserProfile";

interface UserDialogProps {
  open: boolean;
  onToggle: () => void;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: 440,
  position: "relative",
  padding: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  borderRadius: 5,
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  padding: "5px 10px",
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: 5,
  marginRight: 10,
}));

const UserDialog = ({ open, onToggle }: UserDialogProps) => {
  const getPaperComponent: React.JSXElementConstructor<PaperProps> = useCallback(
    (props) => <StyledPaper {...props} />,
    [],
  );

  const onClickFollow = () => {};

  return (
    <Dialog open={open} onClose={onToggle} PaperComponent={getPaperComponent}>
      <Box>
        <UserProfile name="Nickname" reputation={1020} userId="test" />
        <Box mb={1.5}>
          <StyledChip label="Javscript" />
          <StyledChip label="Typescript" />
        </Box>
        <Typography sx={{ fontSize: "13px" }}>한줄소개 글 주르르르륵</Typography>
      </Box>
      <IconButton
        onClick={onToggle}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          p: 0,
        }}
      >
        <Icon type="close" />
      </IconButton>
      <StyledButton onClick={onClickFollow} variant="contained">
        follow
      </StyledButton>
    </Dialog>
  );
};

export default UserDialog;
