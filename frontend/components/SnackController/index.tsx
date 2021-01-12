/* eslint-disable @typescript-eslint/no-unsafe-call */
import { SnackbarProvider, withSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import { snacksSelector } from "../../stores/uiSlice/selectors";
import { Snack } from "../../stores/uiSlice/types";

interface StateProps {
  snacks: Snack[];
}

const mapState = (state: StateProps) => ({
  snacks: snacksSelector(state) as Snack[],
});

const connector = connect(mapState, null);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux &
  SnackbarProvider & {
    enqueueSnackbar?: (message: string, options) => void;
    snacks: Snack[];
  };

export const UnconnectedSnackController: React.FC<Props> = ({
  enqueueSnackbar,
  snacks,
}) => {
  const [displayedSnacks, setSnackDisplayed] = useState({});
  useEffect(() => {
    snacks.forEach((snack) => {
      if (displayedSnacks[snack.key]) return;
      displayedSnacks[snack.key] = snack;
      setSnackDisplayed(displayedSnacks);
      enqueueSnackbar(snack.message, {
        ...snack.options,
        autoHideDuration: 5000,
        key: snack.key,
      });
    });
  }, [snacks, displayedSnacks, enqueueSnackbar]);
  return null;
};

export default connector(withSnackbar(UnconnectedSnackController));
