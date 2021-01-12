/* eslint-disable @typescript-eslint/no-unsafe-call */
import { withSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { snacksSelector } from "../../stores/uiSlice/selectors";
import { Snack } from "../../stores/uiSlice/types";

interface StateProps {
  snacks: Snack[];
}

interface SnackControllerProps {
  enqueueSnackbar?: (string, options) => void;
  snacks: Snack[];
}

export const UnconnectedSnackController: React.FC<SnackControllerProps> = ({
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

const mapState = (state) => ({
  snacks: snacksSelector(state) as Snack[],
});

export default connect<StateProps, null, SnackControllerProps>(
  mapState,
  {}
)(withSnackbar(UnconnectedSnackController));
