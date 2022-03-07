import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnackbarKey, useSnackbar } from "notistack";
import { removeSnackbar } from "../redux/reducers/snackbar";
import { SnackbarState } from "../@types/redux/reducers/snackbar.interface";
import { RootState } from "../redux/reducers";

let displayed: (number | string)[] = [];

const useNotifier = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((store: RootState): SnackbarState => store.snackbar);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  React.useEffect(() => {
    notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
      if (dismissed) {
        closeSnackbar(key);
        return;
      }

      if (key && displayed.includes(key)) return;

      enqueueSnackbar(message, {
        key,
        ...options,
        onClose: (event, reason, myKey) => {
          if (options.onClose) {
            options.onClose(event, reason, myKey);
          }
        },
        onExited: (event, myKey) => {
          dispatch(removeSnackbar(myKey));
          removeDisplayed(myKey);
        },
      });

      storeDisplayed(key as SnackbarKey);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return {};
};

export default useNotifier;
