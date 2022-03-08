import { Card, CardActionArea, Divider, IconButton, styled, Typography } from "@mui/material";
import { SnackbarContent } from "notistack";
import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { closeSnackbar } from "../redux/reducers/snackbar";
import Icon from "./Icon";

interface Props {
  id: string | number;
  message: string | React.ReactNode;
}

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 320,
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  fontSize: "6px",
}));

const HIDE_DURATION = 3000;

const Bar = styled(Divider)(({ theme }) => ({
  borderBottomWidth: 8,
  borderBottomColor: theme.palette.primary.main,
  animation: `progress ${HIDE_DURATION}ms`,
  width: 0,
  "@keyframes progress": {
    "0%": {
      width: "100%",
    },
    "100%": {
      width: 0,
    },
  },
}));

const SnackBar = forwardRef<HTMLDivElement, Props>(({ id, message }, ref) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeSnackbar(id));
  };
  return (
    <SnackbarContent ref={ref}>
      <StyledCard elevation={5}>
        <CardActionArea sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Typography variant="body1">{message}</Typography>
        </CardActionArea>
        <CloseButton onClick={onClose} size="small">
          <Icon type="close" fontSize="1.1rem" />
        </CloseButton>
        <Bar />
      </StyledCard>
    </SnackbarContent>
  );
});

export default SnackBar;
